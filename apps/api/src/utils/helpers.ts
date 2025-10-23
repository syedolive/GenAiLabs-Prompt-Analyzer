export const tokenCount = (text: string) => {
  const t = text.trim();
  if (!t) return 0;
  const chars = Array.from(t).length;
  const words = t.split(/\s+/).filter(Boolean).length;
  const byChars = Math.ceil(chars / 4); // conservative
  const byWords = Math.ceil(words * 1.3); // punctuation/short words
  return Math.max(byChars, byWords);
};
