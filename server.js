const express = require("express");

const app = express();


const handlebars = require("express-handlebars");
app.set("view engine","handlebars");
app.engine('handlebars',handlebars({
	default:"home",
	layoutDir:__dirname+"/views/layouts"
}));


const novelcovid = require('novelcovid');
novelcovid.all().then(response=>{
	console.log(response);
}).catch(err=>{
	console.log(err);
});


app.get("/",function(req,res){
	novelcovid.countries().then(response=>{
		res.render("home.handlebars",{info:response});
	console.log(response);
}).catch(err=>{
	console.log(err);
});
	
});



app.listen(3080,()=>{
	console.log("listening");
})