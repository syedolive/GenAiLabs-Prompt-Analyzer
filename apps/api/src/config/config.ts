export default () => ({
  redis: {
    uri: process.env.REDIS_URI?.trim(),
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY?.trim(),
  },
});
