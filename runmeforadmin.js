// Right Now Admin Sign Up is Not Present
// Create Admin From This JS File.

import mongoose from 'mongoose';
import usermodel from './models/user.js';
const uname = 'admin';
const pwd = 'admin';
(async () => {
    await mongoose.connect('mongodb://localhost/info');
    await usermodel({username : uname, password : pwd, admin : true}).save()
    // Admin Created
})().then(()=>{
    console.log(`Username : ${uname} \nPassword : ${pwd}`)
    console.log('Admin Created Successfully, Please Press CTRL+C And Log In :)')
}).catch(console.log)