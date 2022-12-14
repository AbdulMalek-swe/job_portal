const env = require("dotenv").config();
const colors = require("colors");
const { dbConnect } = require("./dbConnect/dbConnection");


const app = require("./app");
dbConnect();
app.listen(process.env.PORT, () => {
    console.log("server is running".red, process.env.PORT.red)
})

