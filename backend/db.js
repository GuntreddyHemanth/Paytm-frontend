const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
    console.error("MongoDB URL is missing in the .env file");
    process.exit(1);  // Exit the process if the URL is missing
}

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);  // Exit the process if connection fails
    }
};

// User Schema
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true  
    },
    last_name: {
        type: String,
        required: true 
    },
    user_email: {
        type: String,
        required: true, 
        unique: true,    // Add unique constraint for email
        match: [/.+\@.+\..+/, 'Invalid email format']  // Add basic email validation
    },
    password: {
        type: String,
        required: true 
    }
});

// Account Schema
const accountSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    balance: {
        type: Number,
        required: true  
    }
});

// Creating Models
const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {
    User,
    Account,
    connectDB,
};
