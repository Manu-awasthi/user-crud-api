import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type : string,  require : true},
    age : {type: integer , require:true},
    email : {type : string , unique : true}

})

const User = mongoose.model("User" , userSchema)

export default User