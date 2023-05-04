export const gcsNum = (firstNum, secondNum) => {
  if (typeof firstNum !== "number" || typeof secondNum !== "number") return false;
  firstNum = Math.abs(firstNum);
  secondNum = Math.abs(secondNum);
  while (secondNum) {
    let number = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = number;
  }
  return firstNum;
};