import type { StaticImageData } from "next/image";
import ipac from "../../public/ipac.png";
import espol from "../../public/espol.png";
import ucsg from "../../public/ucsg.png";
import eae from "../../public/eae.png";

export interface EducationItem {
  level: string;
  school: string;
  detail: string;
  logo: StaticImageData;
}

export const education: readonly EducationItem[] = [
  { level: "High school", school: "IPAC", detail: "Guayaquil, Ecuador", logo: ipac },
  { level: "University", school: "ESPOL", detail: "Computer Science Engineer", logo: espol },
  { level: "University", school: "UCSG", detail: "Economics", logo: ucsg },
  { level: "Master", school: "EAE Business School", detail: "Big Data & Analytics", logo: eae },
];
