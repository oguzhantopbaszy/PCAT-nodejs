const Photo = require('../models/Photo')

exports.getAboutPage = (req, res) => {
    res.render('about')
}

exports.getAddPage = (req, res) => {
    res.render('add')
}

exports.getEditPage = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id }) //burda linkteki id ile databasedeki id'nin eşleşmesini karşılaştırdık.
    res.render('edit', {
        photo,
    })
}