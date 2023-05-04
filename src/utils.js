export const numberRandom = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin) + numMin);
};
