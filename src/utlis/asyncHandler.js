export const asyncHandler = (fn) => (req, res, next) => {
    console.log("Request received:", req.body); // Log the request body
    Promise.resolve(fn(req, res, next)).catch(next);
};