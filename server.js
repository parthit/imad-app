var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
    title :'Article three | Fuck that Krina bitch',
    heading : ' Hello, Krina gand mara' ,
    date :'August 19th, 2017.' ,
    content : `
                    <p>
                      Bhenchod saali bhadwi ne mera best friend chura liya. Dimag ka bhosda karti hai woh alag. Saali ka kabhi bhala na, meri baddua usko laga. I dont want her succeed at anything that she does. Madharchod saali.
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
                            ${date}
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

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
