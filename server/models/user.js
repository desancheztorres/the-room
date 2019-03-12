const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String,
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 128 characters']
    },
    email: { 
        type: String, 
        unique: true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 128 characters']
    },
    password: { 
        type: String, 
        unique: true,
        required: 'Password is required',
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 128 characters']
    },
    rentals: [{ type: Schema.Types.ObjectId, ref: 'Rental' }]
});

module.exports = mongoose.model('User', userSchema);