var gameWidth = 400;
var counter = 2;
function stopSliding(slider1, slider2, sliderB4){
    var btn = document.getElementById("btn");
    var slider1 = document.getElementById(slider1);
    var slider2 = document.getElementById(slider2);
    var sliderB4 = document.getElementById(sliderB4);
    var left = window.getComputedStyle(slider1).getPropertyValue("left");
    slider1.classList.remove("animate");
    slider1.style.left = left;
    
    var width = parseFloat(window.getComputedStyle(slider1).getPropertyValue("width"));
    var left1 = parseFloat(window.getComputedStyle(slider1).getPropertyValue("left"));
    var left2 = parseFloat(window.getComputedStyle(sliderB4).getPropertyValue("left"));
    var difference = left1 - left2;
    var absDifference = Math.abs(left1 - left2);
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        var scoreStr = "Score:";
        var scoreMinusOne = counter-2;
        var score = scoreStr.concat(scoreMinusOne);
        btn.setAttribute("onclick", "");
        alert(score);
        Location.reload();
    }
    var offset = width - absDifference;
    var px = "px";
    var offstring = offset.toString();
    var theWidth = offstring.concat(px);
    
    var str1 = "stopSliding('slider";
    var str2 = counter;
    var str3 = "','slider";
    var str4 = counter+1;
    var str5 = "','slider";
    var str6 = counter-1;
    var str7 = "')";
    var str8 = str1.concat(str2, str3, str4, str5, str6, str7);
    btn.setAttribute("onclick",str8);
    if(difference>0){
        var newleft = left1 + absDifference;
    }else{
        var newleft = left1 - difference;
    }
    var theleft = newleft.toString();
    var newnewleft = theleft.concat(px);
    slider1.style.width = theWidth; 
    if(difference<0){
        slider1.style.left = newnewleft;
    }
    slider2.style.width = theWidth;
    slider2.style.visibility = "visible";
    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    counter++;
}