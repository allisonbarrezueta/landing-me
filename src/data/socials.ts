import { profile } from "./profile";

export interface Social {
  label: string;
  href: string;
}

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export const socials: readonly Social[] = [
  { label: "GitHub", href: `https://github.com/${profile.github}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allison-barrezueta-097432131/" },
  ...(email ? [{ label: "Email", href: `mailto:${email}` }] : []),
];
