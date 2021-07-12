const banners = [{
        name: 'Test Title 1',
        img: 'img/1.jpg',
        link: '#Link1'
    },
    {
        name: 'Test Title 2',
        img: 'img/2.jpg',
        link: '#Link2'
    },
    {
        name: 'Test Title 3',
        img: 'img/3.jpg',
        link: '#Link3'
    },
    {
        name: 'Test Title 4',
        img: 'img/4.jpg',
        link: '#Link4'
    },
    {
        name: 'Test Title 5',
        img: 'img/5.jpg',
        link: '#Link5'
    }

]

const title = document.querySelector('.card-title');
const banner = document.querySelector('.card-img-top');
const link = document.querySelector('.card-link');
const arrowRight = document.querySelector('.fa-arrow-circle-right');
const arrowLeft = document.querySelector('.fa-arrow-circle-left');

const numberOfBanner = banners.length - 1;
let order = 0;
let index = order;
let settings = {
    duration: 2000,
    random: false,
}

trigger();

arrowRight.addEventListener('click', function () {
    order++;
    slide();
})

arrowLeft.addEventListener('click', function () {
    order--;
    slide();
})

function slide() {

    if (order > numberOfBanner) {
        order = 0
    }

    if (order < 0) {
        order = numberOfBanner
    }

    title.textContent = banners[order].name;
    banner.setAttribute('src', banners[order].img);
    link.setAttribute('href', banners[order].link);
    link.textContent = banners[order].link;

}

function trigger() {
    let loop;
    loop = setInterval(changeIt, settings.duration);
    document.querySelectorAll('.arrows').forEach(function(i){
        i.addEventListener('mouseenter',function(){
            clearInterval(loop)
        })
    });
}

document.querySelectorAll('.arrows').forEach(function(i){
    i.addEventListener('mouseleave',function(){
        trigger()
    })
})

function changeIt() {
    if (settings.random) {
        let randomNumber = Math.floor(Math.random() * (numberOfBanner + 1))
        if (order === randomNumber) {
            order = randomNumber + 1
        } else {
            order = randomNumber
        }

        slide()
    } else {
        if (order < numberOfBanner) {
            order = order + 1;
            slide()
        } else {
            order = 0;
            slide()
        }
    }
}
