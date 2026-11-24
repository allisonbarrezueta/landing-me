"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { sendContactMessage } from "@/app/actions/contact";
import type { ContactFieldErrors } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "success" | "error";

interface UseContactForm {
  status: Status;
  fieldErrors: ContactFieldErrors;
  error: string | null;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useContactForm(): UseContactForm {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setFieldErrors({});
    setError(null);
    const result = await sendContactMessage(data);
    if (result.ok) {
      form.reset();
      setStatus("success");
      return;
    }
    setFieldErrors(result.fieldErrors ?? {});
    setError(result.error ?? null);
    setStatus("error");
  };

  return { status, fieldErrors, error, onSubmit };
}
