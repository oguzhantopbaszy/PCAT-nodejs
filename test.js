const mongoose = require('mongoose')
//mongoose is a ODM(Object Document Mapper) tool
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model('Photo', PhotoSchema) //Photo şeklinde koyduğumuz string ifadeyi harfleri küçültüp mongo collection oluşturuyor.

//create a photo
// Photo.create({
//     title: "Photo Title 2",
//     description: "Photo Description 2"
// });

//read a photo
// Photo.find({}, (err, data) => {
//     console.log(data)
// })

//update photo
/* const id = "62e39653b721abe0aa9bfff0"

Photo.findByIdAndUpdate(
    id, 
    {
        title: "Photo title 1 updated",
        description: "Photo description 1 updated"
    },
    {
        new: true //we can read updated data on console with this parameter
    },
    (err ,data) => {
        console.log(data)
    }

); */

//delete photo
// const id = '62e39854b00cf0f7d7ca10b3';
// Photo.findByIdAndDelete(id, (err, data) => {
//     console.log('Photo is removed...')
// })