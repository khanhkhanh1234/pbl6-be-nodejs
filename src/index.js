const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(  
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
   
});
  
