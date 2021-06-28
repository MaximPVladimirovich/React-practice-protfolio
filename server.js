const express = require(`express`);
const cors = require(`cors`);
const app = express();

const projects = require(`./projects.json`);
const about = require(`./about.json`);
const { allowedNodeEnvironmentFlags } = require("process");

// Middleware
app.use(cors());

// Home route
app.get(`/`, function (req, res) {
    res.send(`Hello world`)
})

// Route for projects
app.get(`/projects`, function (req, res) {
    // Send back projects
    res.json(projects)
})

// Route for about
app.get(`/about`, function (req, res) {
    res.json(about)
})


PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log(`Listening on port`, PORT)
})