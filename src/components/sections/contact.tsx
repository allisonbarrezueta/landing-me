import Section from "@/components/ui/section";
import ContactForm from "@/components/ui/contact-form";

export default function Contact(): React.JSX.Element {
  return (
    <Section id="contact" title="Let's talk" intro="Have a project, role or question in mind? Send me a message and I'll get back to you.">
      <ContactForm fallbackEmail={process.env.NEXT_PUBLIC_CONTACT_EMAIL} />
    </Section>
  );
}
