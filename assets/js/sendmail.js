//заявка
$('.quiz__send-btn').on('click', function() {
    let data = [];
    for(let i = 1; i < 8; i++) {
        data.push($(`#quiz${i} .item__circle_active`).parent('.item__title').children('.item__name').text());
    }
    let number = $('.ct3').val();
    if(!number.match(/\+375\s*\([0-9]{2}\)\s*[0-9]{3}-[0-9]{2}-[0-9]{2}/)) {
        alert('Введите номер телефона');
        return;
    }

    $.ajax({
        url: './quiz.php',
        method: 'POST',
        data: {
            'number': number,
            'questions': data
        },
        success: function(data) {
            document.location.href = './thanks.html'
        }
    });


})

//обратный звонок
$('.invite__btn').on('click', function() {
    if($('.in1').val() == '' ||!$('.in2').val().match(/\+375\s*\([0-9]{2}\)\s*[0-9]{3}-[0-9]{2}-[0-9]{2}/)) {
        alert('Заполните все поля');
        return;
    }
    let data = {
        name: $('.in1').val(),
        number: $('.in2').val(),
    }
    $.ajax({
        url: './invite.php',
        method: 'POST',
        data: data,
        success: function(data) {
            document.location.href = './thanks.html'
        }
    });
})

$('.popup__btn').on('click', function() {
    if(!$('.in3').val().match(/\+375\s*\([0-9]{2}\)\s*[0-9]{3}-[0-9]{2}-[0-9]{2}/)) {
        alert('Заполните все поля');
        return;
    }
    let data = {
        number: $('.in3').val()
    }
    $.ajax({
        url: './popup.php',
        method: 'POST',
        data: data,
        success: function(data) {
            document.location.href = './thanks.html'
        }
    });
})