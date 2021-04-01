$(document).on('ready',slide)
// .on('click', '.notice-wrap li, .layer_close',layerToggle)
// .on('mouseenter mouseleave','.dropdown>ul>li',menu);



$(document).ready(function(){
    $('.notice-wrap li').click(function(){
        $('.layout').css('display','block');
    });
    $('.layout span').click(function(){
        $('.layout').css('display','none');
    })
    
    // ---------------------------------------------//
    

    $('.photo-gallery li:nth-child(1)').click(function(){
        $('.layout-img1').css('display','block');
    })
    $('.photo-gallery li:nth-child(2)').click(function(){
        $('.layout-img2').css('display','block');
    })
    $('.photo-gallery li:nth-child(3)').click(function(){
        $('.layout-img3').css('display','block');
    })
    $('.layout-img span').click(function(){
        $('.layout-img').css('display','none');
    })
    $('.layout-img').click(function(e){
        $('.layout-img').css('display','none');
    })

    $('.navbar_toggle').click(function(){
        $('.nav_bar_content').css('transform','translate(40%,0)').css('transition','0.5s')
        $('.navbar_toggle').css('opacity','0')
        $('.navbar_toggle_times').css('display','block')
    })
    $('.navbar_toggle_times').click(function(){
        $('.nav_bar_content').css('transform','translate(100%,0)').css('transition','0.5s')
        $('.navbar_toggle_times').css('display','none')
        $('.navbar_toggle').css('opacity','1')
    })
    // $('.navbar_toggle').click(function(e){
    //     if($('.nav_var_content').is(':animated')) return false;
    //     $('.nav_bar_content').css('transform','translate(800px)')
    // })

})

function slide() {
    var os = 0;
    function slideEG(){
        os=(os+1)%3

        $('.slide ul').animate({
            marginTop: -300*os+"px"
        },500)
    }
    setInterval(slideEG , 3000)
}
function menu(){
    $('ul', this).stop().slideToggle(300)
}
function layerToggle(){
    $('.layout').toggle()
}

// const togglebtn = document.querySelector('.navbar_toggle');