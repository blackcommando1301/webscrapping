const request=require("request");
const jsdom=require("jsdom");
const {  JSDOM  }=  jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"

request(link,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else {
        
        const dom = new JSDOM(html);
      const document=dom.window.document;
      let tabel=document.querySelectorAll(".table.bowler");
      let max=0;
      let k=0;
      for(let i=0;i<tabel.length;i++){
       
          let row=tabel[i].querySelectorAll("tbody tr");
          for(let j=0;j<row.length;j++){
           let td=row[j].querySelectorAll("td");
            if(td.length>1){
               let name=td[0].textContent;
               let wicket=td[4].textContent;
               if(max<wicket){
                   max=wicket;
                   k=name;
               }
              

               }
            }
            
          }
          console.log(max);
          console.log(k)

      }
      
      

    }
