const {pool} = require("../Config/db")


// SIGN UP
const signUp=async(req,res)=>{
    const {firstName, lastName, email, password} =req.body
    if (!firstName || !lastName || !email || !password){
        return res.status(404).json({
            status:false,
            message:"Missing required fields",
        })
    }
    try{
        let existingUser = await pool.query(`SELECT * FROM user WHERE email='${email}'`)

    }catch(err){

    }

}