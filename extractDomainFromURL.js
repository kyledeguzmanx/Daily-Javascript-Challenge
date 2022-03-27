/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    let start = url.includes("www.") ? url.indexOf("www.")+4 : (
        url.includes("http") ? url.indexOf("://")+3 : 0
    );
    let end; 
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
    return url.slice(start, end);
}
console.log(domainName("https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript"))


/*---------------------------------------------------------
ALT SOLUTION
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
---------------------------------------------------------*/
