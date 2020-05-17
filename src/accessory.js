const generateRandomNum = () => {
  const min = 1;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

export default generateRandomNum;
