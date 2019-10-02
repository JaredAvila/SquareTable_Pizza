const filterObject = list => {
  const filteredObj = Object.keys(list).reduce((p, c) => {
    if (list[c]) p[c] = list[c];
    return p;
  }, {});
  return filteredObj;
};

export default filterObject;
