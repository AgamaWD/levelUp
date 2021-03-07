/*Прокрутка к форме - start*/
const smoothButtons = document.querySelectorAll('.btn');

for (let smoothButton of smoothButtons) {
    smoothButton.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('form').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
/*Прокрутка к форме - end*/

/*Слайдер - start*/
const arrow_prev = document.querySelector('#arrow_prev');
const arrow_next = document.querySelector('#arrow_next');
const slides = document.querySelectorAll('.carousel_item');
var i = 0;

arrow_next.onclick = function(){
    slides[i].style.display = 'none';
    i++;
            
    if(i >= slides.length){
        i = 0;
    }
            
    slides[i].style.display = 'block';
}

arrow_prev.onclick = function(){
    slides[i].style.display = 'none';
    i--;
            
    if(i < 0){
        i = slides.length - 1;
    }
            
    slides[i].style.display = 'block';
}
/*Слайдер - end*/

/*Таймер - start*/   
document.addEventListener('DOMContentLoaded', function(){     
    var endTime = new Date().getTime() + 1000*3600;
 
    var timer = setInterval(function (){
        var now = new Date().getTime();
        var timeLeft = endTime - now + 1;

        if (timeLeft >= 0) {
            var minutes = Math.floor(timeLeft / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("minutes").innerHTML= ("0" + minutes).slice(-2) + "<span class='time_label'> мин. </span>";
            document.getElementById("seconds").innerHTML= ("0" + seconds).slice(-2) + "<span class='time_label'> сек.</span>";
        } else {
            document.getElementById("minutes").innerHTML= "00" + "<span class='time_label'> мин. </span>";
            document.getElementById("seconds").innerHTML= "00" + "<span class='time_label'> сек.</span>";
            clearInterval(timer);
        }

    }, 1001);
});
/*Таймер - end*/ 