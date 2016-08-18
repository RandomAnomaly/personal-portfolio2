/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//document.onLoad = function(){console.log("hello!")}();


var amigaRender = {
    drawAmiga: function(){
        console.log('here');
        var shapes = $("path");
        
        var tl = new TimelineMax();
        
        tl.to(shapes,1, {drawSVG:"0%"});
        
    }
};


document.onLoad = amigaRender.drawAmiga();