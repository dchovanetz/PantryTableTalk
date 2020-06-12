const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/test", (req, res) => {
    res.json({message: "Hello from server.js! ;)"})
});

app.listen(port, () => console.log(`App listening on port ${port}`))