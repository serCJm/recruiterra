module.exports = function splitAndTrim(arrOfStrgs) {
  return arrOfStrgs
    .split(/[,;]+/)
    .map(string => string.trim())
    .filter(Boolean);
};
