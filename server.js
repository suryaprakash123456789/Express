// import express from "express";
// const app = express();
// console.log(app);
// app.get("/", (req, res) => {
//   res.send("hi da surya");
// });
// app.listen(1010, () => {
//   console.log("server connected");
// });
// 

const express = require('express');
// import express from "express"; 
const path = require("path");
const app = express();
const jsondata = {
  whi: "200",
  rum1: "200",
};
let dir = __dirname;
dir = path.join(dir, "index.html");
console.log(dir);

let img = __dirname;
img = path.join(img, "link icon.gif");
// console.log(dir)

let jso = __dirname;
jso = path.join(jso, "package.json");
app.get("/", (req, res) => {
  res.send("<h1>Shopping mall</h1>");
});

app.get("/kfc", (req, res) => {
  res.send("Kfc Shop");
});
app.get("/enjoy", (req, res) => {
  res.json(jsondata);
});
app.get("/html", (req, res) => {
  res.sendFile(dir);
});
app.get("/img", (req, res) => {
    res.sendFile(img);
  });
  app.get("/jso", (req, res) => {
    res.sendFile(jso);
  });
app.listen(1010, () => {
  console.log("server connected");
});
