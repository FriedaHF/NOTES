//(* => "come back to")

const express = require('express');
//*fill out relative paths
const htmlRoutes = require('');
const apiRoutes = require('');

//create the port
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//*fill out path
app.use('', htmlRoutes);
app.use('', apiRoutes);

//start
app.listen(PORT, () => {
console.log(`Running on PORT: ${PORT}`)});