const express = require('express');
const logger = require('morgan');
const admin = require('firebase-admin');
const serviceAccount = require('./boardgame-shelf-160524-firebase-adminsdk-qkogs-f3a9773d94.json');
const path = require('path');
const port = process.env.PORT || 8000;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: 'boardgame-shelf-160524'
});

const boardgameRouter = require('./routes/boardgameRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Import and use the boardgame router


app.use('/api/boardgames', boardgameRouter);


app.listen(port, () => console.log(`Server is running on port ${port}`));