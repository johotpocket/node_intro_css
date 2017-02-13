### Introduction to Node

Learning node by doing, and keeping track of it with github

-----
### First Commit
Using the node module `http`, to create a very simple node server. run `node server.js` to start a server on port 3000.
```
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
### Second commit
We are making our project a node project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

___the dash dash save writes express to our package.json___

1) Imported express and used the constructor to make our app.
2) Defined an endpoint 'howdy', which gives a response of some text.
3) Created a server on PORT 3000

```
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
###Third commit
Up until now we have to kill our server, and restart our server to see our new changes in our code. We can use a tool called `nodemon` that will make this process much easier.

`sudo npm install -g nodemon`

*the dash g flag tells NPM to install nodemon globally on our computer, meaning this is not specific to this project. When we install things globally, it's a pretty big deal, so we need to prefix the command with sudo*

Now we can start our server with `nodemon` and our server will automatically restart every time we save our codebase.

`nodemon server.js` is the command we use to launch our server using nodemon.
