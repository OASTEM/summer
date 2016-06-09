$(document).ready(function(){
    init();
});

function reinit(){
    $('faq-wrap').children().unbind();
    init();
}

function init(){
    $('.active').on('click',function(){
        $(this).removeClass('active');
        $(this).addClass('hidden');
        reinit();
    });
    
    $('.hidden').on('click',function(){
        $(this).removeClass('hidden');
        $(this).addClass('active');
        reinit();
    });
}