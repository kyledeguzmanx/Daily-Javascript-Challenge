
const url = " http://www.1ylun3q07sm7fj7omb.com/img/"
console.log(url);
// start of string        |       url.indexOf("://")+3
// end of string          | url.indexOf(".com")
//url[url.indexOf(".com")] start of .com

if(url.includes("www.")){
   console.log(url.slice(url.indexOf("www.")+4,url.lastIndexOf("."))) 
}
else if(url.includes("http")){
    console.log(url.slice(url.indexOf("://")+3,url.indexOf(".")))
}
else if(!url.includes("www." && !url.includes("http"))){
    console.log(url.slice(0, url.indexOf(".")))
}
    
