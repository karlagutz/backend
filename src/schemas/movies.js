import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const MoviesSchema = new Schema({

    'name' : {
        type: String,
        require: true
    },
    'category': {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    'year': {
        type: Number,

    },
    'director': {
        type: String,
    },
    'rank': {
        type: Number
    },
    'ratings': {
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'plot': {
        type: String,
    
    },
    'cast': {
        type: Date,

    },
    'length': {
        type: String,
    },

    
    
},{collection: 'movies', timestamps: true});

export default mongoose.model('movies', MoviesSchema);