const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const connect = async () => {
    try {
        await mongoose.connect(mongoString);
        console.log('Connect DB successfully...........');
    } catch (error) {
        console.log('Connect DB failute!!!!!');
    }
};

module.exports = { connect };
