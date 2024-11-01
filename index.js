function multiply(a, b) {
  return a * b;
}

const fetchData = (isFailed = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFailed) {
        reject("Rejected, error occured");
      } else {
        resolve("Resolved");
      }
    });
  });
};

module.exports = { multiply, fetchData };
