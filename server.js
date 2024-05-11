const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//static files 
app.use(express.static(path.join(__dirname,'./client/portfolioRoute')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});
//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
