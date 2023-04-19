import mongoose  from "mongoose";

const DestinationsScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: false
    },
    numberOfDays: {
        type: String,
        required: false
    },
    isExpired: {
        type: Boolean,
        required: false,
        default: false
    },
    destinations: {
        type: Array,
        required: false
    },
    coordinates: {
        type: Array,
        required: true
    },
    mapId: {
        type: String,
        required: false
    },
    placeName: {
        type: String,
        required: false
    },
    creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const destinationsModel = mongoose.model('Destinations', DestinationsScheme);

export default destinationsModel;