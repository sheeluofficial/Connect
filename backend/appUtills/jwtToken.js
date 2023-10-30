
   const jwt = require("jsonwebtoken");

const sendJwtToekn  = (userData  , statusCode , res) =>{
  
  const Token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });// from method userModel

    //  console.log(process.env.COOKIE_EXPIRE, userData);
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ), // 2day
    httpOnly: true, // The 'httpOnly' flag prevents client-side access to the cookie
  };
 
    res.status(statusCode).cookie("token", Token, options).json({
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      isAdmin: userData.isAdmin,
      pic: userData.pic,
      createdAt: userData.createdAt,
    });

    
}

module.exports = sendJwtToekn;