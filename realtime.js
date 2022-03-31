let request= require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.worldometers.info/coronavirus/";
request(link,cb);
function cb(error,response,html){
   
    if(error){
        console.log(error);
    }else{
       
        const dom = new JSDOM(html);
      const doc=dom.window.document;
       let time=doc.querySelectorAll("#maincounter-wrap div.maincounter-number span");
       console.log("corona cases",time[0].textContent);
       console.log("deaths",time[1].textContent);
       console.log("recorved",time[2].textContent);

     

    }
}