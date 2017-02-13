### Introduction to Node

Learning node by doing, and keeping track of it with github

-----
### First Commit: HTTP module
Using the node module `http`, to create a very simple node server. run `node server.js` to start a server on port 3000.
```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.end("hello world")
}).listen(3000);

console.log("Server is listening on PORT 3000")

```
___and then we committed our code___

`git add -A`
`git commit -m "configured basic server using HTTP"`
`git push origin master`

-----
### Second commit: Express
We are making our project a node project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

___the dash dash save writes express to our package.json___

1) Imported express and used the constructor to make our app.
2) Defined an endpoint 'howdy', which gives a response of some text.
3) Created a server on PORT 3000

```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.end("hello world")
}).listen(3000);

console.log("Server is listening on PORT 3000")
```
Then we committed our code
`git add -A`
`git commit -m "Add package.json, user express to configure our server"`
`git push origin master`

-----

1) Make two new endpoints, one that serves a sad response, and one that serves a happy response

2)document your changes in your README

3)push your changes to Github

---
### Third commit: Nodemon
Up until now we have to kill our server, and restart our server to see our new changes in our code. We can use a tool called `nodemon` that will make this process much easier.

`sudo npm install -g nodemon`

*the dash g flag tells NPM to install nodemon globally on our computer, meaning this is not specific to this project. When we install things globally, it's a pretty big deal, so we need to prefix the command with sudo*

Now we can start our server with `nodemon` and our server will automatically restart every time we save our codebase.

`nodemon server.js` is the command we use to launch our server using nodemon.

---
### Fourth commit: Parameters (Params)
We can create functions that can take a parameter:
```js
function greeting(name){
  return "Hello " + name
}
```
We have this same ability when we define API endpoints:
```js
app.get(/greeting/:name, function(req, res){
  res.send("How are you " + req.params.name)
  });
```

Add this endpoint to `server.js`, and pass in a value for the name param.

---
### Fifth commit: req.body

If you have ever been on a website and filled out a form, when you hit submit, you are actually submitting data to the server. This data or information gets submitted to the server in an object req.body

In the following example, we are going to create an endpoint to simulate a user login form. The information being submitted to the server will be Name and Password. aka `req.body.Name` and `req.body.Password`

but first....

___Postman___ is a tool that enables us to easily test our APIs, for our example it will enable us to test the functionality of a form being submitted without actually having to create the UI for the form.

1) Create the login API endpoint. This will be a `POST` method since we are sending data to our server.

2) Install and `body-parser`

`npm install --save body-parser`

require it in your `server.js`

`var bodyParser = require("body-parser")`

3) Make sure your server is running.
`nodemon server.js`

4) Head to Postman to test your endpoint `localhost:3000/login` (don't forget to select x-www-form-urlencoded)
