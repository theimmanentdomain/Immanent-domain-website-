import "server-only";
import seed from "@/data/site-content.json";
import { validateEditorialContent } from "@/lib/editorial-content";

export const publishedEditorial = validateEditorialContent(seed);
