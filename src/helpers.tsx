import { sideBarData } from "./data/data";

export const categoryAndCompetencyFromUrl = (hash: string) => {
  const [cat, ...comp] = hash.split("#")[1].split("-");
  const categoryfromUrl = cat.charAt(0).toUpperCase() + cat.slice(1);
  const competencyFromUrl = comp
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { categoryfromUrl, competencyFromUrl };
};

export const fromUrl = (urlText: string) =>
  urlText
    .replace(/-/g, " ")
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

export const getCompetencies = (cat: string) =>
  sideBarData.filter(({ category }) => category === cat)[0].competencies;

export const toUrl = (urlString: string) =>
  urlString.replace(/\s/g, "-").toLowerCase();
