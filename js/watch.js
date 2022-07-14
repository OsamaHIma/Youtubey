$(document).ready(function(){
    $('.text-btn').click(function(){
        $('.toggle-txt').toggleClass('line');
        if($('.toggle-txt').hasClass('line')){
            $('.text-btn').text('عرض اقل');
        }
        else{
            $('.text-btn').text('عرض اكثر');
        }
    });
    $('.reply').click(function(){
        $(this).parents("div.action").prev("div.card-inner").toggle();
    });
    $('.hide').click(function(){
        $(this).parents('.card').fadeOut(400)
    })
})