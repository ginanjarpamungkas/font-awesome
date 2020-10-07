$(function() {
    $('.question-text').each(function(i) {
        $('.question-text p').eq(i).css('font-size', '80px');
        while( $('.question-text p').eq(i).height() > $('.question-text').eq(i).height() ) {
            $('.question-text p').eq(i).css('font-size', (parseInt($('.question-text p').eq(i).css('font-size')) - 1) + "px" );
        }
    })
    $('.answer-text').each(function(i) {
        $('.answer-text p').eq(i).css('font-size', '50px');
        if ($('.answer-text p').eq(i).width() > $('.answer-text').eq(i).width()) {
            while( $('.answer-text p').eq(i).width() > $('.answer-text').eq(i).width() ) {
                $('.answer-text p').eq(i).css('font-size', (parseInt($('.answer-text p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
        if ($('.answer-text p').eq(i).height() > $('.answer-text').eq(i).height()) {
            while( $('.answer-text p').eq(i).height() > $('.answer-text').eq(i).height() ) {
                $('.answer-text p').eq(i).css('font-size', (parseInt($('.answer-text p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
    })
    $('.description-container').each(function(i) {
        $('.description-container p').eq(i).css('font-size', '16px');
        if ($('.description-container p').eq(i).height() > $('.description-container').eq(i).height()) {
            while( $('.description-container p').eq(i).height() > $('.description-container').eq(i).height() ) {
                $('.description-container p').eq(i).css('font-size', (parseInt($('.description-container p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
        if ($('.description-container p').eq(i).width() > $('.description-container').eq(i).width()) {
            while( $('.description-container p').eq(i).width() > $('.description-container').eq(i).width() ) {
                $('.description-container p').eq(i).css('font-size', (parseInt($('.description-container p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
    })
    $('.result').each(function(i) {
        $('.desc p').eq(i).css('font-size', '16px');
        if ($('.result-container').eq(i).height() > $('.result').eq(i).height()) {
            while( $('.result-container').eq(i).height() > $('.result').eq(i).height() ) {
                $('.desc p').eq(i).css('font-size', (parseInt($('.desc p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
        if ($('.result-container').eq(i).width() > $('.result').eq(i).width()) {
            while( $('.result-container').eq(i).width() > $('.result').eq(i).width() ) {
                $('.desc p').eq(i).css('font-size', (parseInt($('.desc p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
    })
    $('.quiz-start').each(function(i) {
        $('.quiz-start-container p').eq(i).css('font-size', '16px');
        if ($('.quiz-start-container').eq(i).height() > $('.quiz-start').eq(i).height()) {
            while( $('.quiz-start-container').eq(i).height() > $('.quiz-start').eq(i).height() ) {
                $('.quiz-start-container p').eq(i).css('font-size', (parseInt($('.quiz-start-container p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
        if ($('.quiz-start-container').eq(i).width() > $('.quiz-start').eq(i).width()) {
            while( $('.quiz-start-container').eq(i).width() > $('.quiz-start').eq(i).width() ) {
                $('.quiz-start-container p').eq(i).css('font-size', (parseInt($('.quiz-start-container p').eq(i).css('font-size')) - 1) + "px" );
            }
        }
    })
});
$(document).on('click','.btn-start',function() {
    var height = $('#question1').height()
    $('.quiz-start').removeClass('show').removeClass('fadeIn').addClass('hide').addClass('fadeOutLeftBig')
    $('#question1').removeClass('hide').removeClass('fadeOutLeftBig').addClass('show').addClass('fadeInRightBig')
    $('body').css('height',height+'px')
    parent.postMessage(height, '*');
})
var resultShw = 0
var currentVal = 0
var biggestVal = 0
var height = 0
$(document).on('click','.answer-text, .answer-text-with-thumbnail',function() {
    var question = $(this).data('question')
    var result = $(this).data('result')
    var questionLen = $('.question').length
    if (question < questionLen) {
        height = $('#question'+(question+1)).height()
        $('#question'+question).removeClass('show').removeClass('fadeInRightBig').addClass('hide').addClass('fadeOutLeftBig')
        $('#question'+(question+1)).removeClass('hide').removeClass('fadeOutLeftBig').addClass('show').addClass('fadeInRightBig')
        $('#resultInput'+result).val(parseInt($('#resultInput'+result).val())+1)
        $('body').css('height',height+'px')
        parent.postMessage(height, '*');
    } else {
        $('#resultInput'+result).val(parseInt($('#resultInput'+result).val())+1)
        $('.result-input').each(function() {
            currentVal = $(this).val() 
            if (currentVal > biggestVal) {
                biggestVal = currentVal
                resultShw = $(this).data('result')
            }   
        })
        $('#question'+question).removeClass('show').removeClass('fadeInRightBig').addClass('hide').addClass('bounceOut')
        height = $('#result'+resultShw).height()
        setTimeout(function(){$('#result'+resultShw).removeClass('hide').addClass('show').addClass('bounceIn');$('#question'+question).removeClass('bounceOut');resultShw = 0; currentVal = 0;biggestVal = 0}, 600);
        $('body').css('height',height+'px')
        parent.postMessage(height, '*');
    }
})
$(document).on('click','.btn-retake',function() {
    resultShw = 0
    currentVal = 0
    biggestVal = 0
    $('.result-input').val(0)
    $('.result').removeClass('show').removeClass('bounceIn').addClass('hide').addClass('rotateOut')
    setTimeout(function(){$('.quiz-start').removeClass('hide').removeClass('fadeOutLeftBig').addClass('show').addClass('fadeIn');$('.result').removeClass('rotateOut')}, 700);
    height = $('.quiz-start').height()
    $('body').css('height',height+'px')
    parent.postMessage(height, '*');
})
