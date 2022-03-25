function domainName(url){
  if(url[0] == "h")
    return (url.slice(url.indexOf("://")+3,url.indexOf(".")))
else if(url[0] == "w")
    return (url.slice(url.indexOf("www.")+4,url.lastIndexOf(".")))
}
