export const imgHeight = [
  480, 530, 380, 560, 440, 220, 340, 210, 355, 480, 540, 310, 270, 380, 280,
  355, 380, 680, 420, 380, 410, 390, 450, 540, 480, 540, 310, 270, 380, 280,
  355, 380, 680, 420, 380, 410, 390, 450, 540,
];
export const imgNum = [
  1, 3, 5, 4, 2, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 31, 22, 41, 51,
  61, 25, 26, 14, 15, 16, 17, 18, 19, 20, 21, 31, 22, 41, 51, 61, 25, 26,
];
export const data_img = imgHeight.map((height, index) => {
  const desc = index + 1;
  return {
    // 圖片來源
    imgUrl: `https://picsum.photos/360/${height}?random=${imgNum[index]}`,
    desc: desc,
  };
});

export default data_img;