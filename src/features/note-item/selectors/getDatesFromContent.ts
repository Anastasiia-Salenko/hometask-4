export const getDatesFromContent = (content: string): string[] => {
  const dateRegexp = /\d{2}\/\d{2}\/\d{4}/g;

  return [...content.matchAll(dateRegexp)].map((item) => item[0]);
};
