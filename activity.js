const request =require("request");
const jsdom=require("jsdom");
const {  JSDOM  }=  jsdom;
const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/sunrisers-hyderabad-vs-lucknow-super-giants-12th-match-1304058/live-cricket-score"
 
request(link,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document=dom.window.document; 
        let teamname=document.querySelectorAll(".name-link .name");
        console.log(teamname[0].textContent);
        console.log(teamname[1].textContent);
    }

}
