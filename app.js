const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { pathToAppRootDir } = require('./helpers/path');

const app = express();
const port = process.env.PORT || 3005;

const indexRoutes = require('./routes/index');

const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.static(path.join(pathToAppRootDir, 'public')));

app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found #404' })
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
});
