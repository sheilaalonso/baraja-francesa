//for(var i=0; i<baraja.length; i=i+1){
        //document.write(i + '<br>');
        
        //var carta="<div class='carta'>"+(i+1)+baraja[i].palo+baraja[i].numero+"</div>";
         //document.getElementById('tapete').innerHTML+=carta;
        
   // }

function mostrarCartas(){
for(var i=0; i<baraja.length; i=i+1){
   
   var carta="<div class='carta'>";
//   carta += "<span class='numcart'>";
//   carta += i+1;
//   carta += "</span>";
//    carta += "<span class='palo'>";
//   carta += baraja[i].palo;
//    carta += "</span>";
    carta += "<span class='fuente'>";
    carta += baraja[i].font;
    carta += "</span>";
    carta +="</div>";
    document.getElementById('tapete').innerHTML+=carta;        
   
   }
}
    
    
  
    
    
    

