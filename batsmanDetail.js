const request=require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-kolkata-knight-riders-1st-match-1304047/full-scorecard";

request(link,cb);
function cb(error,response,html){
    if(error){
        console.log(error);

    }else{
        const dom = new JSDOM(html);
      const document=dom.window.document;
      
      let tabel=document.querySelectorAll(".batsman-cell.text-truncate.out a");
      for(let i=0;i<tabel.length;i++){
        let btlink=tabel[i].href;
        let flink="https://www.espncricinfo.com"+btlink;
        request(flink,cb2);
            
                }
        
      }
     

    }
    function cb2(error,response,html){
        if(error){
            console.log(error);
        }else{
            const dom = new JSDOM(html);
      const document=dom.window.document;
      let batsmanname=document.querySelectorAll(".player-card-padding .player_overview-grid div h5");
      console.log( "batsman name-------"+ batsmanname[0].textContent);
      console.log("batsman DOB---------"+ batsmanname[1].textContent);


        }
    }
