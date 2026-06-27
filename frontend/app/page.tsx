"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
  Sparkles
} from "lucide-react";

type ChatRole = "user" | "coach";
type ApiState = "checking" | "online" | "offline";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";

const quickPrompts = [
  "Help me plan a calm 25-minute study session.",
  "I feel stuck starting this project. Coach me through it.",
  "Give me a simple habit reset for tomorrow morning."
];

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "coach",
    content:
      "Hi, I am your Momentum Coach. Tell me what you are working through, and I will help you find the next steady step."
  }
];

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [apiState, setApiState] = useState<ApiState>("checking");
  const messageListRef = useRef<HTMLDivElement>(null);

  const canSend = draft.trim().length > 0 && !isSending;

  const statusLabel = useMemo(() => {
    if (apiState === "checking") return "Checking backend";
    if (apiState === "online") return "Backend online";
    return "Backend offline";
  }, [apiState]);

  useEffect(() => {
    let isMounted = true;

    async function checkApi() {
      try {
        const response = await fetch(`${API_BASE_URL}/`, {
          cache: "no-store"
        });
        if (isMounted) setApiState(response.ok ? "online" : "offline");
      } catch {
        if (isMounted) setApiState("offline");
      }
    }

    checkApi();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, isSending]);

  async function submitMessage(messageText: string) {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage || isSending) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedMessage
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setDraft("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: trimmedMessage })
      });

      const data = (await response.json().catch(() => null)) as {
        reply?: string;
        detail?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.detail || "The coach could not reply.");
      }

      setApiState("online");
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          role: "coach",
          content: data?.reply || "I am here with you. What feels most useful to explore next?"
        }
      ]);
    } catch (requestError) {
      setApiState("offline");
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not reach the backend. Make sure FastAPI is running."
      );
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitMessage(draft);
  }

  return (
    <main className="app-shell">
      <section className="coach-panel" aria-label="Momentum Coach chat">
        <header className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark" aria-hidden="true">
              <Sparkles size={24} strokeWidth={2.2} />
            </div>
            <div>
              <p className="eyebrow">AI Engineer Challenge</p>
              <h1>Momentum Coach</h1>
            </div>
          </div>

          <div className={`status-pill status-${apiState}`} title={API_BASE_URL}>
            {apiState === "online" ? (
              <CheckCircle2 size={16} aria-hidden="true" />
            ) : apiState === "checking" ? (
              <Loader2 className="spin" size={16} aria-hidden="true" />
            ) : (
              <AlertCircle size={16} aria-hidden="true" />
            )}
            <span>{statusLabel}</span>
          </div>
        </header>

        <div className="conversation" ref={messageListRef}>
          {messages.map((message) => (
            <article className={`message-row ${message.role}`} key={message.id}>
              <div className="avatar" aria-hidden="true">
                {message.role === "coach" ? (
                  <MessageCircle size={18} />
                ) : (
                  <span>You</span>
                )}
              </div>
              <div className="message-bubble">
                <p>{message.content}</p>
              </div>
            </article>
          ))}

          {isSending && (
            <article className="message-row coach">
              <div className="avatar" aria-hidden="true">
                <MessageCircle size={18} />
              </div>
              <div className="message-bubble typing">
                <Loader2 className="spin" size={18} aria-hidden="true" />
                <span>Thinking it through...</span>
              </div>
            </article>
          )}
        </div>

        <div className="quick-prompts" aria-label="Suggested prompts">
          {quickPrompts.map((prompt) => (
            <button
              className="prompt-chip"
              disabled={isSending}
              key={prompt}
              onClick={() => submitMessage(prompt)}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        {error && (
          <div className="error-banner" role="alert">
            <AlertCircle size={18} aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        <form className="composer" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submitMessage(draft);
              }
            }}
            placeholder="Share what you want help with..."
            rows={3}
            value={draft}
          />
          <button className="send-button" disabled={!canSend} type="submit">
            {isSending ? (
              <Loader2 className="spin" size={20} aria-hidden="true" />
            ) : (
              <Send size={20} aria-hidden="true" />
            )}
            <span>{isSending ? "Sending" : "Send"}</span>
          </button>
        </form>
      </section>
    </main>
  );
}
