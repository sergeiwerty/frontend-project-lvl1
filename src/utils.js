const generateRandomNum = (min = 0, max = 100) => {
  const random = Math.floor(Math.random() * (max - min + 1));
  return random;
};

export default generateRandomNum;
