import express from 'express'
import User from '../Model/User';

const router = express.Router();

// create user

router.post("/" , async (req , res)=>{
    try{
        const {name , age , email } = req.body
        if(!name || !age || !email){
            res.status(400).json({message:"fill all field"}

            )
              }

        const exitUser = await User.findOne({email});
        if(exitUser){
            return res.status(409).json({message:"the user is already exits"})

        } 

        const user = await User.create({name , age , email})
        res.status(201).json(User)
      
    }catch(err){
        res.status(500).json({message:"error" , error: err.message})
    }
})

// get all users

router.get("/" , async (req , res)=>{
    try{
        const userExist = await UserFind();
        res.status(200).json({message:"all users"})

}catch(err){
    res.status(500).json("err")
}
})
 // find one by id

router.get("/:id" , async(req,res)=>{
    try{
        const userFind = await User.findById(req.params.id);
        if(!userFind){
            return res.status(400).json({message:"user not found"})
       }
       res.status(200).json({message:"error"})

    }catch(err){
        res.status(400).json({ message: "Invalid user ID" });
    }
})
// update

router.put("/:id" , async (req,res)=>{
    try{
    const userUpdate = await User.findByIdAndUpdate(req.params.id , req.body , {new: true});
    res.json(userUpdate)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

// delete 

router.delete("/:id" , async (req, res)=>{
    try{
        const userDelete = await User.findByIdAndUpdate(req.params.id)
        res.json({message:"user deleted"})

    }catch(err){
        res.json({message:"err",err})
    }
})

export default router;


