const { default: mongoose } = require("mongoose");

const db=mongoose.connect(`mongodb+srv://kotakh311:ylpVqoffVsFyI1RU@rnwharsh.jhwn3pn.mongodb.net/itsarthi`).then(()=>{
    console.log("database connect👍");
    
})
.catch((err)=>{
    console.log("dataabase error😫😫");
    
})
module.exports=db