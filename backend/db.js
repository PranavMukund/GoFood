/*const mongoose = require('mongoose');
const mongoURI = 'mongodb://gofood:Pranav22@gofood@ac-iijqge5-shard-00-00.hkokpsx.mongodb.net:27017,ac-iijqge5-shard-00-01.hkokpsx.mongodb.net:27017,ac-iijqge5-shard-00-02.hkokpsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-42kriv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
        }

    });
}
(async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB!");
        // Start your app logic here (e.g., app.listen(5000))
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with an error code
    }
})();


module.exports = mongoose;
*/


require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:Pranav22%40gofood@cluster0.hkokpsx.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0';

(async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB!");


        //represents single data from collection
        /*const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function (err, data) {
            if (err) console.log(err);
            else console.log(data);
        })*/


        //represents all the data in collection
        const collection = mongoose.connection.db.collection("food_items");
        const allItems = await collection.find({}).toArray(); // Get all items

        const foodCategory = mongoose.connection.db.collection("food_category");
        const allCat = await foodCategory.find({}).toArray();

        if (allItems.length > 0) {
            //console.log("Food Items:");
            const foodItems = [];
            for (const item of allItems) {
                //console.log(item); // Print each item object
                //global.food_items = item;
                //console.log(global.food_items)

                foodItems.push(item);
            }
            global.food_items = foodItems;

        }
        if (allCat.length > 0) {
            const foodCat = [];
            for (const cat of allCat) {
                foodCat.push(cat);
            }
            //console.log(global.foodCategory);
            global.food_category = foodCat;


        }
        else {
            console.log("No food items found in the collection.");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with an error code
    }
})();


/*const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else {
                    global.food_items = data;
                    console.log(global.food_items)
                }
            })
        }
    })
}
    */

module.exports = mongoose; // Export the mongoose connection instance
