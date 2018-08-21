
for(var i=0;i<pokemondata.length;i++){
var option = document.createElement("OPTION");
    option.setAttribute("value", i);
    var nameop = document.createTextNode(pokemondata[i].Nov+" "+pokemondata[i].Name);
    option.appendChild(nameop);
    document.getElementById("select1").appendChild(option);
   
}
for(var i=0;i<pokemondata.length;i++){
var option = document.createElement("OPTION");
    option.setAttribute("value", i);
    var nameop = document.createTextNode(pokemondata[i].Nov+" "+pokemondata[i].Name);
    option.appendChild(nameop);
    document.getElementById("select2").appendChild(option);
   
}
 var whileloop =0;
 var stonevalue= [0,0];
 //calculator, a huge chunk of the code, do not delete
function calculate (){
    
    if(document.getElementById("sliderHP").value!==stonevalue[0]){  stonevalue[0]=document.getElementById("sliderHP").value;  laststonedragged=0;}
    if(document.getElementById("sliderATK").value!==stonevalue[1]){  stonevalue[1]=document.getElementById("sliderATK").value;  laststonedragged=1;}
   
    if(lastvalue2!==document.getElementById("select2").value){
        whileloop = 0;
        while(whileloop==0){
        if(document.getElementById("moves2").childNodes.length == 0){
        whileloop+=1;
        }else{
            document.getElementById("moves2").removeChild(document.getElementById("moves2").childNodes[0]);
        }
        }
        whileloop = 0;
        if(document.getElementById("bingos1pokes2").childNodes.length == 0 ){
        whileloop = 9;
        }
        while(whileloop<9){
        if(whileloop<3){
document.getElementById("bingos1pokes2").removeChild(document.getElementById("bingos1pokes2").childNodes[0]);
whileloop +=1;
    }else if (whileloop<6){
document.getElementById("bingos2pokes2").removeChild(document.getElementById("bingos2pokes2").childNodes[0]);
whileloop +=1;
         } else{
document.getElementById("bingos3pokes2").removeChild(document.getElementById("bingos3pokes2").childNodes[0]); 
whileloop +=1;
    }
}
       
        for(var i=0;i<pokemondata[document.getElementById("select2").value].Moves.length;i++){
option = document.createElement("OPTION");
    option.setAttribute("value",movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Nov);
 if(i == 10||(document.getElementById("select2").value == 24&&movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Name == "Surf")||((document.getElementById("select2").value == 28||document.getElementById("select2").value == 29)&&movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Name == "Sing")||((document.getElementById("select2").value == 31||document.getElementById("select2").value == 32)&&movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Name == "Work Up")){
    nameop = document.createTextNode(movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Name+" (DLC)");
    }else{
    nameop = document.createTextNode(movedata[pokemondata[document.getElementById("select2").value].Moves[i]].Name);   
    }
    option.appendChild(nameop);
    document.getElementById("moves2").appendChild(option);
}
for(var i=0;i<9;i++){
    if(i<3){
option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select2").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos1pokes2").appendChild(option);
    }else if (i<6){
     option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select2").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos2pokes2").appendChild(option);   
    } else{
        option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select2").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos3pokes2").appendChild(option);   
    }
}
}
if(lastvalue!==document.getElementById("select1").value){
       whileloop = 0;
        while(whileloop==0){
        if(document.getElementById("moves1").childNodes.length == 0){
        whileloop+=1;
        }else{
            document.getElementById("moves1").removeChild(document.getElementById("moves1").childNodes[0]);
        }
        }
        whileloop = 0;
        if(document.getElementById("bingos1pokes1").childNodes.length == 0 ){
        whileloop = 9;
        }
        while(whileloop<9){
        if(whileloop<3){
document.getElementById("bingos1pokes1").removeChild(document.getElementById("bingos1pokes1").childNodes[0]);
whileloop +=1;
    }else if (whileloop<6){
document.getElementById("bingos2pokes1").removeChild(document.getElementById("bingos2pokes1").childNodes[0]);
whileloop +=1;
         } else{
document.getElementById("bingos3pokes1").removeChild(document.getElementById("bingos3pokes1").childNodes[0]); 
whileloop +=1;
    }
}
       
        for(var i=0;i<pokemondata[document.getElementById("select1").value].Moves.length;i++){
option = document.createElement("OPTION");
    option.setAttribute("value",movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Nov);
    if(i == 10||(document.getElementById("select1").value == 24&&movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Name == "Surf")||((document.getElementById("select1").value == 28||document.getElementById("select1").value == 29)&&movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Name == "Sing")||((document.getElementById("select1").value == 31||document.getElementById("select1").value == 32)&&movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Name == "Work Up")){
    nameop = document.createTextNode(movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Name+" (DLC)");   
    }else{
      nameop = document.createTextNode(movedata[pokemondata[document.getElementById("select1").value].Moves[i]].Name);     
    }
    option.appendChild(nameop);
    document.getElementById("moves1").appendChild(option);
}
for(var i=0;i<9;i++){
    if(i<3){
option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select1").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos1pokes1").appendChild(option);
    }else if (i<6){
     option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select1").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos2pokes1").appendChild(option);   
    } else{
        option = document.createElement("OPTION");
    option.setAttribute("value", i);
    nameop = document.createTextNode(pokemondata[document.getElementById("select1").value].Bingos[i]);
    option.appendChild(nameop);
    document.getElementById("bingos3pokes1").appendChild(option);   
    }
}
}
        
    lastvalue = document.getElementById("select1").value;
     lastvalue2 = document.getElementById("select2").value;
 
    totalstats[0]= 
    Number(document.getElementById("Level1").value)+
    Number(document.getElementById("HPIV1").value)+
    Number(pokemondata[document.getElementById("select1").value].HP)+
    potbonus[document.getElementById("pot1").value]+
    Number(document.getElementById("sliderHP").value)
     totalstats[1]= 
    Number(document.getElementById("Level1").value)+
    Number(document.getElementById("ATKIV1").value)+
    Number(pokemondata[document.getElementById("select1").value].Attack)+
    potbonus[document.getElementById("pot1").value]+
    Number(document.getElementById("sliderATK").value);
    totalstats[3]= 
    Number(document.getElementById("Level2").value)+
    Number(document.getElementById("HPIV2").value)+
    Number(pokemondata[document.getElementById("select2").value].HP)+
    potbonus[document.getElementById("pot2").value]+
    Number(document.getElementById("sliderHP").value)
     totalstats[4]= 
    Number(document.getElementById("Level2").value)+
    Number(document.getElementById("ATKIV2").value)+
    Number(pokemondata[document.getElementById("select2").value].Attack)+
    potbonus[document.getElementById("pot2").value]+
    Number(document.getElementById("sliderATK").value);
    
    
    
//Bingo Checker
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" +")[0] == "HP"){
totalstats[0] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" +")[1]);
}else{
totalstats[1] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" +")[1]);
}
}
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" +")[0] == "HP"){
totalstats[0] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" +")[1]);
}else{
totalstats[1] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" +")[1]);
}
}      
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" +")[0] == "HP"){
totalstats[0] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" +")[1]);
}else{
totalstats[1] += Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" +")[1]);
}
}      

if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" +")[0] == "HP"){
totalstats[3] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" +")[1]);
}else{
totalstats[4] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" +")[1]);
}
}
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" +")[0] == "HP"){
totalstats[3] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" +")[1]);
}else{
totalstats[4] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" +")[1]);
}
}      
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" +")[0] == "HP"
||pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" +")[0] == "ATK"){
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" +")[0] == "HP"){
totalstats[3] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" +")[1]);
}else{
totalstats[4] += Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" +")[1]);
}
}      






//% bingo calculator
moveattack = movedata[document.getElementById("moves1").value].Attack;
movewaittime = movedata[document.getElementById("moves1").value].Wait_time;
movetotalattack =0;
movetotalwaittime =1;

if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" ")[2] == movedata[document.getElementById("moves1").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" ")[2] == movedata[document.getElementById("moves1").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" ")[2] == movedata[document.getElementById("moves1").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}  
moveattack *= 1+movetotalattack;
document.getElementById("attack1").innerHTML = movedata[document.getElementById("moves1").value].Attack+"("+Math.round(moveattack)+")";


//wait time checker
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" ")[0] == movedata[document.getElementById("moves1").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos1pokes1").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" ")[0] == movedata[document.getElementById("moves1").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos2pokes1").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" ")[0] == movedata[document.getElementById("moves1").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select1").value].Bingos[document.getElementById("bingos3pokes1").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}  
movewaittime *= movetotalwaittime;

    document.getElementById("waittime1").innerHTML = movedata[document.getElementById("moves1").value].Wait_time+"("+movewaittime+")";
    
 totalstats[2]= 
    Math.round((totalstats[1]*(moveattack/100))/movewaittime);

//% bingo calculator 2
moveattack = movedata[document.getElementById("moves2").value].Attack;
movewaittime = movedata[document.getElementById("moves2").value].Wait_time;
movetotalattack =0;
movetotalwaittime =1;

if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" ")[2] == movedata[document.getElementById("moves2").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" ")[2] == movedata[document.getElementById("moves2").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" ")[2] == movedata[document.getElementById("moves2").value].Type){
movetotalattack += (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" ")[5].split("+")[1].split("%")[0])/100);
}  
moveattack *= 1+movetotalattack;

    document.getElementById("attack2").innerHTML = movedata[document.getElementById("moves2").value].Attack+"("+Math.round(moveattack)+")";
   
//wait time checker
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" ")[0] == movedata[document.getElementById("moves2").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos1pokes2").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" ")[0] == movedata[document.getElementById("moves2").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos2pokes2").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}
if(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" ")[0] == movedata[document.getElementById("moves2").value].Type){
movetotalwaittime -= (Number(pokemondata[document.getElementById("select2").value].Bingos[document.getElementById("bingos3pokes2").value].split(" ")[4].split("-")[1].split("%")[0])/100);
}  
movewaittime *= movetotalwaittime;

    document.getElementById("waittime2").innerHTML = movedata[document.getElementById("moves2").value].Wait_time+"("+movewaittime+")";


 totalstats[5]= 
    Math.round((totalstats[4]*(moveattack/100))/movewaittime);
    
    
    //Limit Testing
    if(totalstats[0] > 9999){totalstats[0] = 9999}
    if(totalstats[1] > 9999){totalstats[1] = 9999}
    if(totalstats[3] > 9999){totalstats[3] = 9999}
    if(totalstats[4] > 9999){totalstats[4] = 9999}
    
    
     if(document.getElementById("Level1").value < 1&&document.getElementById("Level1").value!==""){ document.getElementById("Level1").value = 1}
    if(document.getElementById("Level1").value > 100){ document.getElementById("Level1").value= 100}
    if(document.getElementById("HPIV1").value < 0){ document.getElementById("HPIV1").value = 0}
    if(document.getElementById("HPIV1").value > 100){ document.getElementById("HPIV1").value= 100}
    if(document.getElementById("ATKIV1").value < 0){ document.getElementById("ATKIV1").value = 0}
    if(document.getElementById("ATKIV1").value > 100){ document.getElementById("ATKIV1").value= 100}
    
    if(document.getElementById("Level2").value < 1&&document.getElementById("Level2").value!==""){ document.getElementById("Level2").value = 1}
    if(document.getElementById("Level2").value > 100){ document.getElementById("Level2").value= 100}
    if(document.getElementById("HPIV2").value < 0){ document.getElementById("HPIV2").value = 0}
    if(document.getElementById("HPIV2").value > 100){ document.getElementById("HPIV2").value= 100}
    if(document.getElementById("ATKIV2").value < 0){ document.getElementById("ATKIV2").value = 0}
    if(document.getElementById("ATKIV2").value > 100){ document.getElementById("ATKIV2").value= 100}  
    
    
    if(laststonedragged==0&&Number(document.getElementById("sliderHP").value)+Number(document.getElementById("sliderATK").value)>8991){
    document.getElementById("sliderATK").value=8991-document.getElementById("sliderHP").value;
    }
    if(laststonedragged==1&&Number(document.getElementById("sliderHP").value)+Number(document.getElementById("sliderATK").value)>8991){
    document.getElementById("sliderHP").value=8991-document.getElementById("sliderATK").value;
    }
    
 document.getElementById("image2").src = "https://www.serebii.net/quest/pokemon/"+pokemondata[document.getElementById("select2").value].Nov+".png";
    document.getElementById("image1").src = "https://www.serebii.net/quest/pokemon/"+pokemondata[document.getElementById("select1").value].Nov+".png";
if(totalstats[2] > totalstats[5]){
    document.getElementById("pokemon1total").innerHTML = "<span style='opacity:1;'>Pokémon 1's HP:"+totalstats[0]+", Pokémon 1's Attack:"+totalstats[1]+", Pokémon 1's DPS:"+totalstats[2]+"&emsp;<span style='opacity:0.5;'>Pokémon 2's HP:"+totalstats[3]+", Pokémon 2's Attack:"+totalstats[4]+",Pokémon 2's DPS:"+totalstats[5];
}else if(totalstats[2] == totalstats[5]){
    document.getElementById("pokemon1total").innerHTML = "<span style='opacity:1;'>Pokémon 1's HP:"+totalstats[0]+", Pokémon 1's Attack:"+totalstats[1]+", Pokémon 1's DPS:"+totalstats[2]+"&emsp;<span style='opacity:1;'>Pokémon 2's HP:"+totalstats[3]+", Pokémon 2's Attack:"+totalstats[4]+",Pokémon 2's DPS:"+totalstats[5];
}else{
document.getElementById("pokemon1total").innerHTML = "<span style='opacity:0.5;'>Pokémon 1's HP:"+totalstats[0]+", Pokémon 1's Attack:"+totalstats[1]+", Pokémon 1's DPS:"+totalstats[2]+"&emsp;</span><span style='opacity:1.5;'>Pokémon 2's HP:"+totalstats[3]+", Pokémon 2's Attack:"+totalstats[4]+",Pokémon 2's DPS:"+totalstats[5];
}

}



function clone(typeclone){
    if(typeclone == 2){
document.getElementById("select2").value = document.getElementById("select1").value;
calculate();
document.getElementById("HPIV2").value = document.getElementById("HPIV1").value;
document.getElementById("ATKIV2").value = document.getElementById("ATKIV1").value;
document.getElementById("Level2").value = document.getElementById("Level1").value;
document.getElementById("pot2").value = document.getElementById("pot1").value;
document.getElementById("moves2").value = document.getElementById("moves1").value;
document.getElementById("bingos1pokes2").value = document.getElementById("bingos1pokes1").value;
document.getElementById("bingos2pokes2").value = document.getElementById("bingos2pokes1").value;
document.getElementById("bingos3pokes2").value = document.getElementById("bingos3pokes1").value;
}else{
document.getElementById("select1").value = document.getElementById("select2").value;
calculate();
document.getElementById("HPIV1").value = document.getElementById("HPIV2").value;
document.getElementById("ATKIV1").value = document.getElementById("ATKIV2").value;
document.getElementById("Level1").value = document.getElementById("Level2").value;
document.getElementById("pot1").value = document.getElementById("pot2").value;
document.getElementById("moves1").value = document.getElementById("moves2").value;
document.getElementById("bingos1pokes1").value = document.getElementById("bingos1pokes2").value;
document.getElementById("bingos2pokes1").value = document.getElementById("bingos2pokes2").value;
document.getElementById("bingos3pokes1").value = document.getElementById("bingos3pokes2").value;
}
}




function switchity(){
clonearray[0]=document.getElementById("select1").value;
clonearray[1]=document.getElementById("HPIV1").value;
clonearray[2]=document.getElementById("ATKIV1").value;
clonearray[3]=document.getElementById("Level1").value;
clonearray[4]=document.getElementById("pot1").value;
clonearray[5]=document.getElementById("moves1").value;
clonearray[6]=document.getElementById("bingos1pokes1").value;
clonearray[7]=document.getElementById("bingos2pokes1").value;
clonearray[8]=document.getElementById("bingos3pokes1").value;
document.getElementById("select1").value = document.getElementById("select2").value;
calculate();
document.getElementById("HPIV1").value = document.getElementById("HPIV2").value;
document.getElementById("ATKIV1").value = document.getElementById("ATKIV2").value;
document.getElementById("Level1").value = document.getElementById("Level2").value;
document.getElementById("pot1").value = document.getElementById("pot2").value;
document.getElementById("moves1").value = document.getElementById("moves2").value;
document.getElementById("bingos1pokes1").value = document.getElementById("bingos1pokes2").value;
document.getElementById("bingos2pokes1").value = document.getElementById("bingos2pokes2").value;
document.getElementById("bingos3pokes1").value = document.getElementById("bingos3pokes2").value;
document.getElementById("select2").value=clonearray[0];
calculate();
document.getElementById("HPIV2").value=clonearray[1];
document.getElementById("ATKIV2").value=clonearray[2];
document.getElementById("Level2").value=clonearray[3];
document.getElementById("pot2").value =clonearray[4];
document.getElementById("moves2").value=clonearray[5];
document.getElementById("bingos1pokes2").value=clonearray[6];
document.getElementById("bingos2pokes2").value=clonearray[7];
document.getElementById("bingos3pokes2").value=clonearray[8];
  lastvalue = document.getElementById("select1").value;
     lastvalue2 = document.getElementById("select2").value;
}




function ivcalculate(type){
    if(type == 1){
var hp = prompt("This quick IV Calculator requires that you put the species and level for Pokémon 1. Once you do this tell us your Pokémon's HP stat "+"("+pokemondata[document.getElementById("select1").value].HP+"-"+Number(pokemondata[document.getElementById("select1").value].HP+100 + 100 + 300)+"):");
var attack = prompt("Attack stat "+"("+pokemondata[document.getElementById("select1").value].Attack+"-"+Number(pokemondata[document.getElementById("select1").value].Attack+100+100+300)+"):");

if(hp-document.getElementById("Level1").value-pokemondata[document.getElementById("select1").value].HP<=10){
document.getElementById("pot1").value =0;
document.getElementById("HPIV1").value=hp-document.getElementById("Level1").value-pokemondata[document.getElementById("select1").value].HP;
document.getElementById("ATKIV1").value=attack-document.getElementById("Level1").value-pokemondata[document.getElementById("select1").value].Attack;
} else if(hp-document.getElementById("Level1").value-pokemondata[document.getElementById("select1").value].HP<=100){
document.getElementById("pot1").value =1;
document.getElementById("HPIV1").value=hp-document.getElementById("Level1").value-50-pokemondata[document.getElementById("select1").value].HP;
document.getElementById("ATKIV1").value=attack-document.getElementById("Level1").value-50-pokemondata[document.getElementById("select1").value].Attack;
}else if(hp-document.getElementById("Level1").value-pokemondata[document.getElementById("select1").value].HP<=250){
document.getElementById("pot1").value =2;
document.getElementById("HPIV1").value=hp-document.getElementById("Level1").value-150-pokemondata[document.getElementById("select1").value].HP;
document.getElementById("ATKIV1").value=attack-document.getElementById("Level1").value-150-pokemondata[document.getElementById("select1").value].Attack;
}else{
document.getElementById("pot1").value =3;
document.getElementById("HPIV1").value=hp-document.getElementById("Level1").value-300-pokemondata[document.getElementById("select1").value].HP;
document.getElementById("ATKIV1").value=attack-document.getElementById("Level1").value-300-pokemondata[document.getElementById("select1").value].Attack;
}
}else{
var hp = prompt("This quick IV Calculator requires that you put the species and level for Pokémon 2. Once you do this tell us your Pokémon's HP stat "+"("+pokemondata[document.getElementById("select2").value].HP+"-"+Number(pokemondata[document.getElementById("select2").value].HP+100 + 100 + 300)+"):");
var attack = prompt("Attack stat "+"("+pokemondata[document.getElementById("select2").value].Attack+"-"+Number(pokemondata[document.getElementById("select2").value].Attack+100+100+300)+"):");

if(hp-document.getElementById("Level2").value-pokemondata[document.getElementById("select2").value].HP<=10){
document.getElementById("pot2").value =0;
document.getElementById("HPIV2").value=hp-document.getElementById("Level2").value-pokemondata[document.getElementById("select2").value].HP;
document.getElementById("ATKIV2").value=attack-document.getElementById("Level2").value-pokemondata[document.getElementById("select2").value].Attack;
} else if(hp-document.getElementById("Level2").value-pokemondata[document.getElementById("select2").value].HP<=100){
document.getElementById("pot2").value =1;
document.getElementById("HPIV2").value=hp-document.getElementById("Level2").value-50-pokemondata[document.getElementById("select2").value].HP;
document.getElementById("ATKIV2").value=attack-document.getElementById("Level2").value-50-pokemondata[document.getElementById("select2").value].Attack;
}else if(hp-document.getElementById("Level2").value-pokemondata[document.getElementById("select2").value].HP<=250){
document.getElementById("pot2").value =2;
document.getElementById("HPIV2").value=hp-document.getElementById("Level2").value-150-pokemondata[document.getElementById("select2").value].HP;
document.getElementById("ATKIV2").value=attack-document.getElementById("Level2").value-150-pokemondata[document.getElementById("select2").value].Attack;
}else{
document.getElementById("pot2").value =3;
document.getElementById("HPIV2").value=hp-document.getElementById("Level2").value-300-pokemondata[document.getElementById("select2").value].HP;
document.getElementById("ATKIV2").value=attack-document.getElementById("Level2").value-300-pokemondata[document.getElementById("select2").value].Attack;
}
}
alert("Thank you for waiting! the IVs and the pot originated were calculated directly on your left.");
}
setInterval(calculate,40);
