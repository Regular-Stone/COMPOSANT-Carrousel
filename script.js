let left_btn = document.querySelector(".left");
let right_btn = document.querySelector(".right");
let dots = document.querySelectorAll(".dot");

let first_slide = document.querySelector(".box--01");
let second_slide = document.querySelector(".box--02");
let third_slide = document.querySelector(".box--03");
console.log(first_slide, second_slide);

let counter = 0;
console.log(first_slide.querySelector('.img'))

right_btn.addEventListener('click', (e) => {
    switch(counter){
        case 0:
            first_slide.classList.add('box--close');
            second_slide.classList.remove('box--close');
            dots[0].classList.remove('dot--active');
            dots[1].classList.add('dot--active');
            counter ++;
        break;
        case 1:
            second_slide.classList.add('box--close');
            third_slide.classList.remove('box--close');
            dots[1].classList.remove('dot--active');
            dots[2].classList.add('dot--active');
            counter ++;
        break;
        case 2: 

        break;
    }
})
left_btn.addEventListener('click', (e) => {
    switch(counter){
        case 0:
            
        break;
        case 1:
            first_slide.classList.remove('box--close')
            second_slide.classList.add('box--close');
            dots[1].classList.remove('dot--active');
            dots[0].classList.add('dot--active');
            counter --;
        break;
        case 2: 
            second_slide.classList.remove('box--close');
            third_slide.classList.add('box--close');
            dots[2].classList.remove('dot--active');
            dots[1].classList.add('dot--active');
            counter --;
        break;
    }
})


for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', (e) => {
       for(let j = 0; i < dots.length; j++){
        if(dots[i] != dots[j]){
            dots[j].classList.remove('dot--active');
        }
        dots[i].classList.add('dot--active');

        switch(i){
            case 0: 
                first_slide.classList.remove('box--close');
                second_slide.classList.add('box--close');
                third_slide.classList.add('box--close');
                counter = 0;
            break;

            case 1:
                first_slide.classList.add('box--close');
                second_slide.classList.remove('box--close');
                third_slide.classList.add('box--close');
                counter = 1
            break;

            case 2:
                first_slide.classList.add('box--close');
                second_slide.classList.add('box--close');
                third_slide.classList.remove('box--close');
                counter = 2
            break;
        }
       }
    });
}