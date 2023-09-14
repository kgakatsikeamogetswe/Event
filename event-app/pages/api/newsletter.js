import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'});
            return;
        }

       const client = await MongoClient.connect(
            'mongodb+srv://stimulatekay11ew:MKLk2gTjPFE0aBFL@cluster0.kchci7g.mongodb.net/events?retryWrites=true&w=majority'
        )
            const db = client.db();
            
          await db.collection('newsletter').insertOne({email: userEmail});
        
        client.close();

        res.status(201).json({ message: 'Signed up'});
    }
}

export default handler;