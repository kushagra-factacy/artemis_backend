import { Schema } from "@azure/cosmos";

const userSchema= new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        index: true,
        minlength: 3,
        maxlength: 20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate:{
            validator: /^\S+@\S+\.\S+$/,
            message: 'Invalid email format'
        }

    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
        select: false
        },
    refreshToken:{
        type: String

    },
    company:{
        type: Schema.Types.ObjectId,
        ref: companyname
    },
    createdon:{
        type: String,
        
    }
    

})




