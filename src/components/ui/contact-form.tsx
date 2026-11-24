"use client";
import { useContactForm } from "@/hooks/use-contact-form";

const field =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus-visible:outline-2 focus-visible:outline-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white";

interface ContactFormProps {
  fallbackEmail?: string;
}

export default function ContactForm({ fallbackEmail }: ContactFormProps): React.JSX.Element {
  const { status, fieldErrors, error, onSubmit } = useContactForm();
  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl space-y-5">
      {(["name", "email"] as const).map((key) => (
        <div key={key}>
          <label htmlFor={key} className="font-medium capitalize text-gray-800 dark:text-gray-100">
            {key === "email" ? "Your email" : "Your name"}
          </label>
          <input
            id={key}
            name={key}
            type={key === "email" ? "email" : "text"}
            autoComplete={key}
            required
            aria-invalid={Boolean(fieldErrors[key])}
            aria-describedby={fieldErrors[key] ? `${key}-error` : undefined}
            className={field}
          />
          {fieldErrors[key] && (
            <p id={`${key}-error`} className="mt-1 text-sm text-red-700 dark:text-red-400">
              {fieldErrors[key]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="font-medium text-gray-800 dark:text-gray-100">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={field}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700 dark:text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>
      {/* Honeypot: hidden from users and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="rounded-lg bg-primary-700 px-6 py-3 font-medium text-white transition hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "success" && (
          <span className="text-green-800 dark:text-green-400">Thanks! Your message was sent.</span>
        )}
        {status === "error" && error && (
          <span className="text-red-700 dark:text-red-400">
            {error}
            {fallbackEmail && (
              <>
                {" "}
                You can also write to{" "}
                <a className="underline" href={`mailto:${fallbackEmail}`}>
                  {fallbackEmail}
                </a>
                .
              </>
            )}
          </span>
        )}
      </p>
    </form>
  );
}
