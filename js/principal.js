
   
$(function(){
    var welcome=$('#welcome');
    var wwm=$('#wwm');
    var wwm1=$('#wwm-1');
    var comenzar=$('#comenzar');
    comenzar.on('click',function(e){
        welcome.toggleClass('hidden-lg-up');
        wwm.toggleClass('hidden-xs-up');
        wwm1.removeClass('hidden-xs-up');
        e.preventDefault();
    });
    
}())

$(function(){
    var wwm1=$('#wwm-1');
    var volver1=$('#step1-prev');
    var welcome=$('#welcome');
    var wwm=$('#wwm');
    volver1.on('click',function(e){
        welcome.removeClass('hidden-lg-up');
        wwm.removeClass('hidden-xs-up');
        wwm1.toggleClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm1=$('#wwm-1');
    var wwm2=$('#wwm-2');
    var sig1=$('#step1-next');
    sig1.on('click',function(e){
        wwm1.toggleClass('hidden-xs-up');
        wwm2.removeClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm1=$('#wwm-1');
    var volver2=$('#step2-prev');
    var wwm2=$('#wwm-2');
    volver2.on('click',function(e){
        wwm1.removeClass('hidden-xs-up');
        wwm2.toggleClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm3=$('#wwm-3');
    var wwm2=$('#wwm-2');
    var sig2=$('#step2-next');
    sig2.on('click',function(e){
        wwm2.toggleClass('hidden-xs-up');
        wwm3.removeClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm2=$('#wwm-2');
    var volver3=$('#step3-prev');
    var wwm3=$('#wwm-3');
    volver3.on('click',function(e){
        wwm2.removeClass('hidden-xs-up');
        wwm3.toggleClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm3=$('#wwm-3');
    var wwm4=$('#wwm-4');
    var sig3=$('#step3-next');
    sig3.on('click',function(e){
        wwm3.toggleClass('hidden-xs-up');
        wwm4.removeClass('hidden-xs-up');
        e.preventDefault();
    });
}())

$(function(){
    var wwm4=$('#wwm-4');
    var volver4=$('#step4-prev');
    var wwm3=$('#wwm-3');
    volver4.on('click',function(e){
        wwm3.removeClass('hidden-xs-up');
        wwm4.toggleClass('hidden-xs-up');
        e.preventDefault();
    });
}())

