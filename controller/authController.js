const {pool} = require("../Config/db");
const bycrypt = require("bcryptjs");


// SIGN UP
const signUp=async(req,res)=>{
    const {firstName, lastName, email, password} =req.body
    if (!firstName || !lastName || !email || !password){
        return res.status(404).json({
            status:false,
            message:"Missing required fields",
        })
    }w
    try{
        let existingUser = await pool.query(`SELECT * FROM user WHERE email='${email}'`)
        // console.log(existingUser)
        if(existingUser[0].length !=0){
            return res.status(400).json({status:false, message:"User Already Exist in the system"});
        }

        //hashing the password or encryption
        const salt = await bycrypt.genSalt(10)
        console.log(salt)
        // const hashedPassword = bycrypt.hash(password, salt)
res.send("just checking the salt");
        // await pool.query("INSERT INTO user (firstName, lastName, email, password) values (?, ?, ?, ?)", [firstName, lastName, email, password]);
//if(existingUser[0])
    }catch(err){

    }

}
module.exports={signUp};