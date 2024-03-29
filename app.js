const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override') //Tarayacımız PUT ve DELETE işlemlerini desteklemediğinden yardım aldığımız modül. Uygulamada aslında yapabiliyoruz ama bu işlemleri tarayıcı desteklemediği için bu modeül sayesinde tarayıcı tarafında PUT işlemini POST işlemi gibi simüle edebiliyoruz.

const ejs = require('ejs')
const photoController = require('./controller/photoController')
const pageController = require('./controller/pageController')

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', {
  methods: ['POST', 'GET'] //Hangi methodları override edeceğini belirtmek için yazdık.
}))

//Routes
app.get('/', photoController.getAllPhotos)
app.get('/photos/:id', photoController.getPhoto)
app.post('/photos', photoController.createPhoto)
app.put('/photos/:id', photoController.updatePhoto)
app.delete('/photos/:id', photoController.deletePhoto)

app.get('/about', pageController.getAboutPage)
app.get('/add', pageController.getAddPage)
app.get('/photos/edit/:id', pageController.getEditPage)

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatildi...`)
})