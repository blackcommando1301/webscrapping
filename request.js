const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/mumbai-indians-vs-rajasthan-royals-9th-match-1304055/live-cricket-score"
request(link, cb);
function cb (error, response, body) {
 if(error){
  console.error('error:', error); 
 }
  else{
  console.log('body:', body);
}
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);


}