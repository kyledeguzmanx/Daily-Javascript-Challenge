function domainName(url){
  let start;
let end; 

if(url.includes("www.")){
    start = url.indexOf("www.")+4;
   //console.log(url.slice(url.indexOf("www.")+4,url.lastIndexOf("."))) 
}
else if(url.includes("http")){
    start = url.indexOf("://")+3;
    //console.log(url.slice(url.indexOf("://")+3,url.indexOf(".")))
}
else if(!url.includes("www." && !url.includes("http"))){
    start = 0;
    //console.log(url.slice(0, url.indexOf(".")))
}

if(url.lastIndexOf("/") > start){
        url = url.split("");
        url.length = url.lastIndexOf("/");
        url = url.join("");
}

end = url.lastIndexOf(".");
console.log(url.slice(start, end))
return url.slice(start, end);
}
