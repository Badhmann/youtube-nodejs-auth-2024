const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401).json({
      success: false,
      Message: "Access denied. No token provided. please login first",
    });
  }
  //decode token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedTokenInfo);

    req.userInfo = decodedTokenInfo;
  } catch (e) {
    return res.sendStatus(500).json({
      success: false,
      Message: "Access denied. No token provided. please login first",
    });
  }
  next();
};

module.exports = authMiddleware;
