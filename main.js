var i;
for(var i=0;i<document.querySelectorAll("button").length;++i){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       var keys=this.className;
        
       switch(keys){
        case "white c":
            var aud=new Audio("sound/sound_piano-c.mp3");
            aud.play();
            break;
        case "black c":
            var aud=new Audio("sound/sound_piano-c-sharp.mp3");
            aud.play();
            break;
        case "white d":
            var aud=new Audio("sound/sound_piano-d.mp3");
            aud.play();
            break;
        case "black d":
            var aud=new Audio("sound/sound_piano-d-sharp.mp3");
            aud.play();
            break;
        case "white e":
            var aud=new Audio("sound/sound_piano-e.mp3");
            aud.play();
            break;
            
        case "white f":
            var aud=new Audio("sound/sound_piano-f.mp3");
            aud.play();
            break;
        case "black f":
            var aud=new Audio("sound/sound_piano-f-sharp.mp3");
            aud.play();
            break;
        case "white g":
            var aud=new Audio("sound/sound_piano-g.mp3");
            aud.play();
            break;
        case "black g":
            var aud=new Audio("sound/sound_piano-g-sharp.mp3");
            aud.play();
            break;
        case "white a":
            var aud=new Audio("sound/sound_piano-a.mp3");
            aud.play();
            break;
        case "black a":
            var aud=new Audio("sound/sound_piano-a-sharp.mp3");
            aud.play();
            break;
        case "white b":
            var aud=new Audio("sound/sound_piano-b.mp3");
            aud.play();
            break;
        case "white c":
            var aud=new Audio("sound/sound_piano-high-c.mp3");
            aud.play();
            break;
        case "black c":
            var aud=new Audio("sound/sound_piano-high-c-sharp.mp3");
            aud.play();
            break;
        case "white d":
            var aud=new Audio("sound/sound_piano-high-d.mp3");
            aud.play();
            break;
        case "black d":
            var aud=new Audio("sound/sound_piano-high-d-sharp.mp3");
            aud.play();
            break;
        case "white e":
            var aud=new Audio("sound/sound_piano-high-e.mp3");
            aud.play();
            break;
        default: console.log("as"); 
       }
    })
}

