const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();  // Load the .env file

// MongoDB connection string from the environment variable
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
        required: true  // Corrected 'required'
    },
    last_name: {
        type: String,
        required: true  // Corrected 'required'
    },
    user_email: {
        type: String,
        required: true,  // Corrected 'required'
        unique: true,    // Add unique constraint for email
        match: [/.+\@.+\..+/, 'Invalid email format']  // Add basic email validation
    },
    password: {
        type: String,
        required: true  // Corrected 'required'
    }
});

// Account Schema
const accountSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  // Corrected 'required'
    },
    balance: {
        type: Number,
        required: true  // Corrected 'required'
    }
});

// Creating Models
const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", UserSchema);

// Exporting Models
module.exports = {
    User,
    Account,
    connectDB,
};
