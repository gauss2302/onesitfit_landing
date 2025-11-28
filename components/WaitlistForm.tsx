"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again."
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("Something went wrong. Please try again.");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        if (res.status === 409) {
          setErrorMessage("You're already on the list!");
        } else if (data.error) {
          setErrorMessage(data.error);
        }
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-6 py-4 rounded-full border border-green-100 animate-fade-in">
        <CheckCircle2 size={20} />
        <span className="font-medium">
          You're on the list! We'll be in touch.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0"
    >
      <input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-6 py-4 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all shadow-sm placeholder:text-zinc-400"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
      >
        {status === "loading" ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            Join Waitlist
            <ArrowRight size={18} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm absolute -bottom-8 left-0 w-full text-center md:text-left pl-4">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
