const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://myDB:1234@cluster0.2ff0go9.mongodb.net/?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('mongodb connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;