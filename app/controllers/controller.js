const mongoose = require("mongoose")
const json = require("../../user.json")
const userModel = mongoose.model('User')
var a=json.users;

let userData = (req,res) => {
    for (var i = 0; i < a.length; i++) {
        let newUser = new userModel(a[i])
        newUser.save((err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
            }
        })


    }


}
var sortData=(req,res)=>
{
    a.sort(GetSortOrder("Age")); 
    console.log(a);    

}
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}
var sumMarks=(req,res)=>
{
    var sum=0;
for (var item in a) {    
    sum+=parseInt(a[item].Marks);  
      
}  
console.log(sum) 
}
module.exports = {
    userData: userData,
    sortData:sortData,
    sumMarks:sumMarks
}

