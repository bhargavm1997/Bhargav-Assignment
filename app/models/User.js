let mongoose=require('mongoose'),
Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{
        Type:String,
        default:""
    },

    age:{
        Type:Number,
        default:""
    },
    marks:{
        Type:Number,
        default:""
    }

})
mongoose.model('User', userSchema);