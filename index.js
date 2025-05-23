const express = require('express');
const app= express();
const cors = require('cors');
require('dotenv').config();
const db = require('./db.js');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors());


// file imports
const signupRouter = require('./routes/auth/signup')
const loginRouter = require('./routes/auth/login')
const userRouter =  require('./routes/auth/user.js')
const { loginAuthentication, signupAuthentication, forgotPasswordAuthentication } = require('./Middlewares/authvalidation')

// admin api routes import
const addproducts = require("./routes/admin/AddProducts.js")
const addcategory = require('./routes/admin/AddCategory.js')
const allproducts = require('./routes/admin/AllProducts.js')

app.use("/api/signup", signupAuthentication , signupRouter)
app.use("/api/login", loginAuthentication , loginRouter)
app.use('/api', userRouter)

// admin api routes
app.use("/api/addproducts", addproducts )
app.use("/api/addcategory", addcategory )
app.use("/api/allproducts", allproducts )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})