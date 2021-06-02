function toVWColour() {
  return (text: string, render: any) => {
    let fullText:string = render(text);
    fullText = fullText.toUpperCase();
    return '0x' + fullText[7] + fullText[8] + fullText[5] + fullText[6] + fullText[3] + fullText[4] + fullText[1] + fullText[2];
  };
};
export {toVWColour};// Converts #RRGGBBAA to VW format of 0xAABBGGRR 
