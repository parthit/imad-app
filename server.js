var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = 
{
    user : 'parthitpatel',
    database : 'parthitpatel',
    host: 'db.imad.hasura-app.io',
    port :'5432',
    password : process.env.DB_PASSWORD
}


var app = express();
app.use(morgan('combined'));

var articles = {

 'article-one': {
    
    title: 'work please',
    heading: ' Hello, please kaam kar' ,
    date : 'August 20th, 2017.' ,
    content:`
                    <p>
                        This is prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.
                    </p>
                    
                     <p>
                         This is prayers to get you to work. This is prayers to get you to work. This is prayers to get you to work. This is    prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayer to get you to work.
                    </p>
                    
                     <p>
                         This is prayers to get you to work. This is prayers to get you to work. This is prayers to get you to work. This is    prayers to get you to work.This is prayers to get you to work.This is prayers to get you to work.This is prayer to get you to work.
                   </p>`
    
},
'article-three':{ 
    title :'Article three | Humans are awesome',
    heading : ' Hello humans, I love you.' ,
    date :'August 19th, 2017.' ,
    content : `
                    <p>
                      Hello, this is me, a very orderly human being. I think that humans need to work together and bring about world peace. This is our home, we need to save it. Thank you.
                    </p>`
    },
 'article-two': { 
    title :'Article Two | Awesome',
    heading : ' Please work ok?' ,
    date :'August 22th, 2017.' ,
    content : `
                    <p>
                       Please work, i really need you to. Please kaam karna ok? thanks.
                    </p>`
    }


};


function createTemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `<html>

            <head> 
            <title>
                ${title}
            </title>
            <meta name="view port" content = "width=device-width, initial-scale=1">
              <link href="/ui/style.css" rel="stylesheet" />
            
            </head>
            
            
            
            <body>
                <div class ="element">
                        <div>
                            <a href='/'>Home </a>
                        </div>
                        <hr/>
                        
                        <h3> ${heading}</h3>
                        <div>
                            ${date.toDataString()}
                        </div>
                        
                        <div>
                              ${content}
                        </div>
                </div>
            </body>
            </html>
            
            
            `;
            return htmlTemplate;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);

app.get('/test-db', function (req, res){
    // make a select req
    // return a response
    pool.query("SELECT * FROM test", function(err , result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/articles/:articleName', function(req, res){
    var articleName = req.params.articleName;
    
    pool.query("SELECT * FROM article WHERE title ='" + req.params.articleName + "'", function(err, result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length === 0){
                res.status(404).send('Article not found');
            }
            else{
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
