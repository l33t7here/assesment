import Fastify from 'fastify';
import mongoose from 'mongoose';
// JWT IN FASTIFY ECO-SYSTEM
import jwt from 'fastify-jwt';
import usermodel from './models/user.js';
// Importing Routes 
import showpost from './routes/showposts.js'
// ES6 Makes Path Library Complex
import * as path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
import fastifystatic from 'fastify-static';
// Adding Serving Static Files


const fastify = Fastify({
    // logger: true
})

// EXTRA STUFF -> SIGNUP PAGE
// Advantage Of Fastify -> Faster Than Any Other Framework + Async/Await Support From Beginning.
// Fastify Default Support Validation, Now It Will Check Query And Will Prevent Incomplete Requests.

const userqueryrequired = {
    schema: {
       querystring: {
         type: 'object',
           properties: {
             username: {
               type: 'string'
             },
             password: {
               type: 'string'
             },
         },
         required: ['username', 'password']
     }
  }
}
fastify.get('/signup', userqueryrequired, async(req,res) => { 
    // Check Username Already Exists ?
    try{
        const exists = await usermodel.exists({username : req.query.username, admin : false});
        if(!exists){
            // Username is new and we will sign up 
            await new usermodel({username : req.query.username, password : req.query.password}).save()
            // We Will Send JWT Signed Token So He Can Perform Actions.
            const token = fastify.jwt.sign({username : req.query.username})
            // Advantage Of Fastify Eco-System, Package Can Be Used Via Fasify Object
            res.code(200).send({token : token})
    
        }else{
            res.code(406).send({Error : "Username Already Exists"})
        }   
    }catch(err){
        res.code(500).send({Error : 'Error Occurred While Signing Up User'})
    }
})

//  Login EndPoint
fastify.get('/login', userqueryrequired, async (req,res) =>{
    // Check Username Already Exists ?

    try{
        const data = await usermodel.findOne({username : req.query.username});
        // If User Exists We Need Data Because We Would Check Password,
        // .findOne Returns null if user is not in db.
        if(data && data.password == req.query.password){
            // data is presend + password is correct so we will give him token
            const token = fastify.jwt.sign({username : req.query.username, admin : data.admin})
            res.code(200).send({token : token, admin : data.admin})
    
        }else{
            res.code(406).send({Error : "Username Does Not Exists"})
        }   
    }catch(err){
        res.code(500).send({Error : 'Error Occurred While Login-in User'})
    }

})


const start = async() => {
    try{
        // Lets Register All Requirements And Directory
        await fastify.register(jwt, {
            secret: 'keythatshldnotbeshared'
          })
        // Required Endpoints
        // Registering POSTS API
        await fastify.register(showpost)
        // Registering Static Files
        await fastify.register(fastifystatic, {
           root: path.join(__dirname + '/dist'),
           prefix: '/',
        })
        await mongoose.connect('mongodb://localhost/info');
        await fastify.listen(3000);
    }catch(err){
        console.log(err)
    }
}
start().then(()=>{
    console.log('Server Successfully Started');
}).catch(()=>{console.log('Error Occurred White Starting Server')});