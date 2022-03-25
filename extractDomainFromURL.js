function domainName(url){
  let start;
  let end; 

  if(url.includes("www.")){
    start = url.indexOf("www.")+4;
  }
  else if(url.includes("http")){
    start = url.indexOf("://")+3;
  }
  else if(!url.includes("www." && !url.includes("http"))){
    start = 0;
  }

  while(url.lastIndexOf("/") > start){
     url = url.split("");
     url.length = url.lastIndexOf("/");
     url = url.join("");
  }
if(url[url.length-3] == "." && url[url.length-6] == "."){
    url = url.split("");
    url.length = url.lastIndexOf(".");
    url = url.join("");
}

end = url.lastIndexOf(".");
console.log(url.slice(start, end))
return url.slice(start, end);
}
