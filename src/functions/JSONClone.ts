function JSONClone(input:any) {
  return JSON.parse(JSON.stringify(input));
};

export {JSONClone};