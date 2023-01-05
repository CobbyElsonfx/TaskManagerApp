const mongoose = require("mongoose")


function dbConnect(mongourl){
    return mongoose.connect(mongourl, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
})

}



module.exports = dbConnect