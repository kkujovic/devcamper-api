const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// const asyncHandler = function(fn) {
//   return function(req, res, next) {
//     return Promise.resolve(fn(req, res, next)).catch(next);
//   };
// };

module.exports = asyncHandler;
