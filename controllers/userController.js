import status from 'http-status'

const userRegister = (req,resp) =>{
    resp.status(status.OK).json({
        success: true,
        message : 'sucessfull...'
    })
}

export {userRegister}