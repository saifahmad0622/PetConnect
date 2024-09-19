const mongoose = require('mongoose');

const url = "mongodb+srv://saifahmad0622:1234@cluster0.hwfsiuo.mongodb.net/petadoption?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function - Promise object
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;