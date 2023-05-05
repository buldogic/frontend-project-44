const gcsNum = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') return false;
  let first = Math.abs(firstNum);
  let second = Math.abs(secondNum);
  while (second) {
    const number = second;
    second = first % second;
    first = number;
  }
  return first;
};

export default gcsNum;
