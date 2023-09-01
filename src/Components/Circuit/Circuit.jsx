import React from "react";
import "./Circuit.css"

export default function Circuit() {
  React.useEffect(() => {
    var c = document.getElementById("myCanvas");

    c.width = window.innerWidth;
    c.height = 400;


    var ctx = c.getContext("2d");
    var speed=1;

    setInterval(drawMain,speed);
    
    
    var gradient=ctx.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","#abb5c2");
    gradient.addColorStop("0.5","#abb5c2");
    gradient.addColorStop("1.0","#abb5c2");
    
    ctx.strokeStyle="#abb5c2";
    ctx.strokeStyle=gradient;
    ctx.lineWidth=2;
    
    var x1=0;
    var x2=0;
    var y1=-80;
    var y2=80;
    var x3=-850;
    var y3=180;
    
    
    
    var seed1=getRandomInt(200,560);
    var seed2=getRandomInt(100,760);
    var rightLimit=window.innerWidth;
    var increment=1;
    function trace1(seed){
    ctx.strokeStyle="#abb5c2";
    ctx.strokeStyle=gradient;
    
    ctx.moveTo(x2,y2);
    ctx.lineTo(x2+increment,y2);
    if(x2>20 && x2<60){
    y2=y2+increment;
    }
    if(x2>150 && x2<470){
        y2=y2+increment;
    }
    
    if(x2>400 && x2<seed1){
        y2=y2-increment;
    }
    if(x2==480){
        ctx.beginPath()
        ctx.arc(x2,y2,4,0,2*Math.PI);
        ctx.stroke();	
    }
    if(x2<476 || x2>484){
    ctx.stroke();	
    }
    
    
    if(x2>600 && x2<seed1+300){
        y2=y2+increment;
    }
    
    ctx.beginPath()
    x2+=increment;
    if(x2>rightLimit){
        x2=0;
        y2+=getRandomInt(55,75);
        y2=480;
        //seed1=getRandomInt(400,490);
    }
    }
    function trace2(seed){
        ctx.strokeStyle="#abb5c2";
    
    ctx.moveTo(x3,y3);
    ctx.lineTo(x3+1,y3);
    if(x3>20 && x3<40){
    y3=y3+increment;
    }
    if(x3>200 && x3<270){
        y3=y3+increment;
    }
    
    if(x3>400 && x3<seed1){
        y3=y3-increment;
    }
    if(x3==480){
        ctx.beginPath()
        ctx.arc(x3,y3,4,0,2*Math.PI);
        ctx.stroke();	
    }
    
    if(x3>600 && x3<seed1+300){
        y3=y3+increment;
    }
    
    if(x3<476 || x3>484){
    ctx.stroke();	
    }
    ctx.beginPath()
    x3+=increment;
    if(x3>rightLimit){
        x3=-900;
        y3=380;
        seed2=seed1;
    }
    }
    
    
    
    
    function drawMain(){
        trace1(seed1);
        trace2(seed2);
        trace2(seed2);
    
    
    }
    
    
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, []);

  return (
    <div className="myCanvas">
      <canvas
        id="myCanvas"
        width="200"
        height="100"
      >
      </canvas>
    </div>
  );
}