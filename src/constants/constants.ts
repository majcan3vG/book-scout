import { mooodInfo } from "@/types/bookTypes";

export const moodToKeywords: Record<string, mooodInfo> = {
  cozy: { symbol: '☕', queryTerms: ["comfort read", "slice of life", "heartwarming"] },
  sad: { symbol: "😭", queryTerms: ["tragic", "drama", "emotional", "literary fiction"] },
  inspired: { symbol: "🌠", queryTerms: ["biography", "self-help", "motivational"] },
  creepy: { symbol: "🤡", queryTerms: ["horror", "thriller", "suspense"] },
  romantic: { symbol: "💖", queryTerms: ["romance", "love story", "contemporary romance"] },
  escapist: { symbol: "🔮", queryTerms: ["fantasy", "sci-fi", "adventure"] },
  nerdy: { symbol: "🤖", queryTerms: ["hard science fiction", "history", "technology"] },
  happy: { symbol: "😁", queryTerms: ["feel-good", "uplifting", "humor", "joyful", "wholesome"] },
  sporty: { symbol: "🏀", queryTerms: ["sports fiction", "athlete", "competition", "team", "sports biography"] },
};
