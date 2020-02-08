module.exports = function greeting(name) {
  if (typeof name !== "string")
    throw new TypeError("Input required for greeting is a string 🧶");
  return `Hello, ${name}! 🌷`;
};
