const express = require('express');
const morganBody =  require('morgan-body') ;
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var app = express();
var port = 3000;

app.use(bodyParser.json())
app.use(express.static('dist'));

morganBody(app);

var items = [{
    id: '0',
    description: 'milk',
    done: false
}];

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.get('/api/list', (req, res) => {
    res.send(items);
});

app.put('/api/add', (req, res) => {
    items.push(req.body);
    res.status(201);
    res.send(items);
}); 

app.post('/api/delete', (req, res) => {
    items = items.filter(item => item.id != req.body.id);
    res.status(204);
    res.send(items);
});

app.post('/api/mark', (req, res) => {
    items = items.map(item => {
        if(item.id == req.body.id) {
            item['done'] = ! item['done'];
            return item;
        }
        else {
            return item;
        }
    });
    res.status(200);
    res.send(items);
});

app.listen(PORT, () => {
    console.log("Listening at port:", PORT);
});