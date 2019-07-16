const express = require('express');
const router = require('./routes/circus');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
   });

app.use('/api', router);
app.listen(port, () => console.log("Express server is running"));





















module.exports = router;