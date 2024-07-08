/*const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const mongoose = require('mongoose')
//mongoose();
//mongoDB();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
    */
const express = require('express')
const cors = require("cors")
///const cors = require('cors'); // Import CORS middleware
const app = express()

///app.use(cors()); // Allow requests from localhost:3000 only (replace with your actual frontend domain)
// ... rest of your backend routes
const port = 5000
const mongoose = require('./db') // Import the mongoose connection



// Start your app logic after successful connection (optional)
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection is open. Starting app logic...');

    //this middleware was outside tht connection function
    app.use(cors({
        origin: 'https://go-foodfrontend-pranavs-projects-5b57fed6.vercel.app/', // Adjust this to match your frontend URL
        credentials: true, // This allows cookies and other credentials to be sent across domains
    }));



    app.get('/', (req, res) => {
        res.send('Hello World!!!!!!')
    })

    app.use(express.json())
    app.use('/api', require("./Routes/CreateUser"));
    app.use('/api', require("./Routes/DisplayData"));
    app.use('/api', require("./Routes/OrderData"));

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
});

// Handle potential connection errors (optional)
mongoose.connection.on('error', (error) => {
    console.error('Mongoose connection error:', error);
});
