const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'*'
}
));

const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/REACT_BACKEND");

const post_route = require('./routes/postRoutes');
app.use('/api',post_route);

app.listen(8000,function(){
    console.log('Server is running');
});


