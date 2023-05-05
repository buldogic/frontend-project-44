const startProgression = 1;
const stepProgression = 2;

const progressionArr = (firstnum, secondnum) => {
  const arrProgression = [];
  for (
    let i = Math.min(firstnum, secondnum);
    i < Math.max(firstnum, secondnum);
    i += 1
  ) {
    const n = startProgression + 1;
    const progression = i + stepProgression * (n - 1);
    if (arrProgression.length < 10) {
      arrProgression.push(progression);
    }
  }

  return arrProgression;
};

export default progressionArr;
