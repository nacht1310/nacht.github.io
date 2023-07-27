$(document).ready(() => {
    $('#header').load('header.html', () => {
        $('li').each((index, element) => {
            const id = $(element).attr('id').split('-')[0]
            $(element).on('click',() => {
                moveToSection(id)
            })
        })
        checkActive()
    })
    $('#intro').load('introduction.html')
    $('#information').load('info.html')
    $('#experience').load('exp.html')
    $('#contact').load('contact.html')
})

$(window).scroll(() => {
    checkActive()
})

const checkActive = () => {
    $('#main>div').each((index, element) => {
        var wP = $(window).scrollTop()
        var hT = $(element).offset().top
        var hB = $(element).outerHeight()
        if(wP >= hT - 1 && wP <= hT + hB - 1) {
            $(`#${$(element).attr('id')}-button`).addClass('active')
        }
        else {
            $(`#${$(element).attr('id')}-button`).removeClass('active')
        }
    })
}

const moveToSection = (id) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 500)
}
