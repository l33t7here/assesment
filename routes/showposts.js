import postmodel from "../models/posts.js";
import usermodel from "../models/user.js";
async function router(fastify,options){
    fastify.addHook('onRequest', async (request, reply) => {
        // We Will Validate Our JWT Here
        if(request.headers.token != undefined){
            try{
                const tokendecrypt = fastify.jwt.verify(request.headers.token);
                // We Either Can Check User On DB For Safety Suppose If Admin Deleted User, But He Has JWT TOKEN
                // He Can Stil Access So Lets Prevent That By Rechecking User On DB
                const exists = await usermodel.exists({username : tokendecrypt.username})
                if(exists){
                    request.username = tokendecrypt.username;
                    request.admin = tokendecrypt.admin;
                }else{
                    reply.code(401).send({Error : "Sorry You Provided Wrong Token, Kindly Login Again."})
                }
            }catch(err){
                reply.code(500).send({Error : "Error While Validating User."})
            }
        }else{
            reply.code(401).send({Error :'Kindly Verify YourSelf First'})
        }
    });
    // Show Post.
    fastify.get('/post', async(request, reply) => {
        try{
            const postdata = await postmodel.find({});
            // Sending All Posts To Users.
            reply.code(200).send(postdata)
        }catch(err){
            reply.code(401).send({Error : "Sorry You Provided Wrong Token, Kindly Login Again."})
        }
    })
    // Delete Post
    fastify.delete('/post/:id', async(request,reply) =>{
        if(request.admin){
            try{
                 await postmodel.deleteOne({id : request.params.id})
                 reply.code(200).send("Post Deleted Successfully");
            }catch(err){
                reply.code(500).send({Error : "Error While Deleting Post."})
                
            }
        }else{
            reply.code(403).send({Error : "You Can Not Perform This Task"});
        }
    })
    // Post Validations For Create/Update
    const postbodyschema = {
        schema: {
           body: {
             type: 'object',
               properties: {
                 post: {
                   type: 'string',
                   minLength : 1,
                   maxLength : 254
                 }
             },
             required: ['post']
         }
      }
    }
    // Update Post
    fastify.patch('/post/:id',postbodyschema, async(request, reply) =>{
        if(request.admin){
            try{
                // We Can Check Post First, Then Can Update 
                 const exists = await postmodel.exists({id : request.params.id})
                 if(exists){
                     await postmodel.updateOne({id : request.params.id}, {$set : {post : request.body.post}})
                     reply.code(200).send("Post Updated Successfully");
                 }else{
                     reply.code(404).send({Error : "Post Does Not Exists"});
                 }
            }catch(err){
                reply.code(500).send({Error : "Error While Updating Post."});
                
            }
        }else{
            reply.code(403).send({Error : "You Can Not Perform This Task"});
        }
    
    })
    // Create Post 
    fastify.post('/post', postbodyschema, async(request, reply) => {
        if(request.admin){
            try{
                // Lets Create Random Yet Unique Id
                let randomid = 0
                 while(true){
                    // Will Break Loop Until We Get Unique ID
                    randomid = parseInt(Math.random()*1000);
                    const exists = await postmodel.exists({id : randomid})
                    if(!exists){
                        break;
                    }
                 }
                 await new postmodel({id : randomid, post : request.body.post}).save()
                 reply.code(200).send({id : randomid})
            }catch(err){
                reply.code(500).send({Error : "Error While Updating Post."});
                
            }
        }else{
            reply.code(403).send({Error : "You Can Not Perform This Task"});
        }
    
    })
}
export default router;