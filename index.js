const express = require('express');
const req = require('express/lib/request');
const axios = require("axios");

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: true
})

const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/connect', function(req, res) {
        res.render('pages/connect', {
            query: req.query
        });
    })
    .post('/connect-submit', urlencodedParser, function(req, res) {
        console.log('Form request:', req.body)
        res.send("recieved your request!");
        console.log(process.env.BLECON_API_KEY)
        axios.post("https://api.blecon.net/devices?account=" + process.env.BLECON_ACCOUNT, {
            device_id: req.body.device_id,
            public_key: req.body.device_public_key,
            network_id: req.body.network_id,
            model: req.body.device_model,
        }, {
            headers: {
                'Authorization': `${process.env.BLECON_API_KEY}`
            }
        })
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));