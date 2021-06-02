function drawingOrderGenerate(drawingOrder: Array<string>) {
  const ret:Array<object> = [];
  drawingOrder.forEach((e, i) => {
    ret.push({
      order: i, name: e
    });
  });
  return ret;
}
export {drawingOrderGenerate};