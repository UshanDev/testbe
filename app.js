const express = require('express')
const app = express()
const DBConnection = require('./db/dbConnection.js');

const researcherRoute = require('./routes/user-routes/reseacher.router.js')
const attendeeRoute = require('./routes/user-routes/attendee.router.js')
const workshopconductorRoute = require('./routes/user-routes/workshopConductor.router')

const reviewerRoute = require('./routes/reviewer-routes/reviewer.router.js')
// Connect Database
DBConnection;

const PORT = 8080

app.use(express.json());
app.use('/api/attendee',attendeeRoute);
app.use('/api/reseacher',researcherRoute);
app.use('/api/workshopcon',workshopconductorRoute);

app.use('/api/reviewer',reviewerRoute);

app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})