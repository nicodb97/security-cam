import geckos from '@geckos.io/server'
import http from 'http'
import express from 'express'

const app = express();
const server = http.createServer(app)
const io = geckos();

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.addServer(server);
io.onConnection(channel => {
    console.log(channel.id);
});

setInterval(() => {

    var n = Math.random() * 10;
    io.emit("numero", n);

}, 1000);

server.listen(process.env.PORT || 3000, () => {
    console.log("Server Started Port 3000");
});