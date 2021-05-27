var pointer = 1;
var fadeTime = 1000;

$(function(){
    setInterval(function(){
        if (pointer < 4){
           $('.top_main_group img:nth-of-type('+ pointer + ')').fadeOut(fadeTime); 
           ++pointer;
           $('.top_main_group img:nth-of-type('+ pointer + ')').fadeIn(fadeTime);   
        }else{
            $('.top_main_group img:nth-of-type('+ pointer + ')').fadeOut(fadeTime); 
            $('.top_main_group img:nth-of-type(1)').fadeIn(fadeTime); 
            pointer = 1;
        }
    }, 5000);
})

