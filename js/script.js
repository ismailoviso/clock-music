let secArrow = document.querySelector('.s'),
    minArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursBlock = document.querySelector('.hours'),
    minutesBlock = document.querySelector('.minutes');

let check = document.querySelector('#check'),
    audio = document.querySelector('.audio');
// let id = setTimeout(function(){
//     console.log('asfasf');
// }, 1000)
// clearTimeout(id)
// let interval;
//рекурсия когда функция вызывает сама себя
function clock(){
    let time = new Date(),
        s = time.getSeconds(),
        m = time.getMinutes(),
        h = time.getHours();
    secArrow.animate([
        {transform: `rotate(${s*6}deg)`},
        {transform: `rotate(${s*6+6}deg)`}
    ],{
        duration: 1000,
        fill: 'forwards',
        easing: 'linear'
    })
    // secArrow.style = `transform: rotate(${s*6}deg);`;
    minArrow.style = `transform: rotate(${m*6}deg)`;
    hourArrow.style = `transform: rotate(${h*30}deg)`;
    hoursBlock.innerHTML = h < 10 ? '0'+h : h;
    minutesBlock.innerHTML = m < 10 ? '0'+m : m;
    setTimeout(clock, 1000);
    if(check.checked) audio.play();
    else audio.pause();
    // if(s >= 30) clearTimeout(interval)
}
clock();

let tabsLink = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener('click', function(e){
      e.preventDefault();
      for (let k = 0; k < tabsLink.length; k++) {
        tabsLink[k].classList.remove('active');
        tabsContent[k].classList.remove('active');
      }
      this.classList.add('active');
      tabsContent[i].classList.add('active');
    })
}

let indicator = document.querySelector('.tabsLink__span'),
    stopHours = document.querySelector('.stopwatch__hours'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopSeconds = document.querySelector('.stopwatch__seconds'),
    stopBtn = document.querySelector('.stopwatch__btn'),
    interval;

stopBtn.addEventListener('click', function(e){
    e.preventDefault();
    indicator.classList.remove('active');
    indicator.classList.remove('active_clear');
    if(this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        setTimeout(stopwatch, 1000);
        indicator.classList.add('active');
    }
    else if(this.innerHTML == 'stop'){
        this.innerHTML = 'clear';
        clearTimeout(interval);
        indicator.classList.add('active_clear')
    }
    else if(this.innerHTML == 'clear'){
        this.innerHTML = 'start';
        stopSeconds.innerHTML = 0;
        stopMinutes.innerHTML = 0;
        stopHours.innerHTML = 0;
    }
})
function stopwatch(){
    if(stopSeconds.innerHTML <= 59){ 
        stopSeconds.innerHTML++;
    }
    if(stopSeconds.innerHTML > 59){
        stopSeconds.innerHTML = 0;
        stopMinutes.innerHTML++;
    }
    if(stopMinutes.innerHTML > 59){
        stopMinutes.innerHTML = 0;
        stopHours.innerHTML++;
    }
    interval = setTimeout(stopwatch, 1000);
}