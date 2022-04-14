function copy(){
    let section=document.getElementsByTagName("section")[0];
    let article="";
    for(i=0; i<10; i++){
        article+="<section><div  class=small-square1></div> <div  class=small-square2></div> <div  class=small-square3></div> <div  class=small-square4></div></section>"
    }
    section.innerHTML=article;
}