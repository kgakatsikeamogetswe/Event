async function connectDatabase(){
    const client = await MongoClient.connect(
     'mongodb+srv://stimulatekay11ew:MKLk2gTjPFE0aBFL@cluster0.kchci7g.mongodb.net/events?retryWrites=true&w=majority'
     )
     return client; 
 
 }
 
 async function insertDocument(client, collection, document){
     const db = client.db();
             
     await db.collection(collection).insertOne(document);
  
 }