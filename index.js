const express = require("express");
const app = express();
const importData=require("./data.json")
let port = process.env.port || 3000;
app.get("/", (req, res) => {
    res.send("hell");
})
app.get("/users", (req, res) => {
    res.send(importData);
})
// app.listen(port, () => {
//     console.log(`Example app is listing on port https://localhost:$(port)`)
// });
app.listen(port, () => {
    console.log(`example app is port http://localhost:${port}`);
})