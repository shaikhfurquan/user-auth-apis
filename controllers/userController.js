import status from 'http-status'
import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

// post http://localhost:5151:/api/users/register
const userRegister = async (req, res) => {
    try {
        const { username, password, profile, email } = req.body
        const existsUser = await UserModel.findOne({ email })
        if (existsUser) {
            return res.status(status.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "User Alredy Exists, Please Login...",
                error: error.message
            })
        }

        const existsEmail = await UserModel.findOne({ email })
        if (existsEmail) {
            return res.status(status.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Email Exists, Please use unique...",
                error: error.message

            })
        }

        if (password) {
            bcrypt.hash(password, 10).then((hashpassword) => {
                const user = UserModel.create({
                    username,
                    password: hashpassword,
                    profile: profile || "",
                    email: email
                }).then((user) => {
                    res.status(status.CREATED).json({
                        success: true,
                        message: "User created successfully",
                        user

                    })
                }).catch((err) => {
                    res.status(status.BAD_GATEWAY).json({
                        success: false,
                        message: "Error while creating user",
                        err: err.message
                    });
                })
            })
        }

    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error occurred while registering the user...",
            error: error.message
        })
    }
}


// post http://localhost:5151:/api/users/login
const userLogin = (req, res) => {
    res.json({ message: 'user login' })
}


// get http://localhost:5151:/api/users/name123
const getUser = (req, res) => {
    res.json({ message: 'get user' })
}


// put http://localhost:5151:/api/users/updateuser
const userUpdate = (req, res) => {
    res.json({ message: 'update user' })
}


// get http://localhost:5151:/api/users/generateOTP
const generateOTP = (req, res) => {
    res.json({ message: 'generate otp' })
}



// post http://localhost:5151:/api/users/verifotp
const verifyOTP = (req, res) => {
    res.json({ message: 'verify otp' })
}


// post http://localhost:5151:/api/users/crateresetsession
const createResetSession = (req, res) => {
    res.json({ message: 'create reset session' })
}

// post http://localhost:5151:/api/users/crateresetsession
const resetPassword = (req, res) => {
    res.json({ message: 'reset password' })
}


export { userRegister, userLogin, getUser, userUpdate, generateOTP, verifyOTP, createResetSession, resetPassword }
