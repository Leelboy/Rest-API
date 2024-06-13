console.log('Rest-API');
console.log('NASA');
console.log('The National Aeronautics and Space Administration');
console.log('NASA Astronomy Picture of the Day');
console.log('Messier 66 Close up');

/* my NASA API */
/* brZ9aP9Dv14pw4gpDm58tANrQ5Tq7gepOG6pQ1xK */

/* get the pictures */
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "brZ9aP9Dv14pw4gpDm58tANrQ5Tq7gepOG6pQ1xK";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})
