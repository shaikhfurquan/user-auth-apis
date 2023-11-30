import express  from "express";
import  {userRegister, userLogin, getUser, userUpdate, generateOTP, verifyOTP ,createResetSession, resetPassword} from "../controllers/userController.js";
const userRouter = express.Router()


/** POST Methods */
userRouter.post('/register' , userRegister) // register user
// userRouter.post('/registerMail' ); // send the email
userRouter.post('/authenticate' , (req,res)=>res.end()); // authenticate user
userRouter.post('/login', userLogin) // login in app

/** GET Methods */
userRouter.get('/user/:username' , getUser) // user with username
userRouter.get('/generateOTP' , generateOTP) // generate random OTP
userRouter.get('/verifyOTP' , verifyOTP) // verify generated OTP
userRouter.route('/createResetSession' , createResetSession) // reset all the variables


/** PUT Methods */
userRouter.put('/updateuser' , userUpdate); // is use to update the user profile
userRouter.put('/resetPassword' , resetPassword); // use to reset password









export default userRouter
