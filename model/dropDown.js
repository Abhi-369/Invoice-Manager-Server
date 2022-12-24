import mongoose from 'mongoose'

const dropDownSchema = new mongoose.Schema(
    {
        dropDown: {
            type: Array,
            unique: true
        },
    }
)

const dropDown = mongoose.model('dropDown', dropDownSchema)

export default dropDown;
