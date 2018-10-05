import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const ClientSchema = new Schema({

    'name' : {
        type: String,

        require: true
    },
    'lastName': {
        type: String,
        require: true
    },
    'age': {
        type: Number,
        require: false
    }

},{collection: 'clients', timestamps: true});

export default mongoose.model('clients', ClientSchema);