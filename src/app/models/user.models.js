const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Users = new Schema(
    {
        _id: { type: Number },
        first_name: { type: String, maxWidth: 255, required: true },
        last_name: { type: String, maxWidth: 255 },
    },
    {
        _id: false,
        timestamps: true,
    },
);

Users.plugin(AutoIncrement);

module.exports = mongoose.model('Users', Users);
