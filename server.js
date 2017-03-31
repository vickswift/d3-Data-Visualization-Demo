var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

//When our app loads in the browser, the express app instance will load our client static file
//and will automatically look for and load the index.html file for us. (that's how express is built internally)
app.use( express.static( path.join( root, 'client' )));

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});

// The easy way to run this app with a server is to put all of these static html and js files in our
// static folder (named client) and then use the static content server from your express project.
