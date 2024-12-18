const mongoose = require('mongoose')

async function connectionDB() {
    try{
        await mongoose.connect(process.env.DATABASE_URI)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectionDB