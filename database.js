const mongoose = require('mongoose');
const URI = 'mongodb+srv://miguel_armas:VGAkP8lqqGjdnkka@test-todo.zhr0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


module.exports = mongoose;