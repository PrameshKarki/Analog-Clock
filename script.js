//Grabbing elements from the dom
const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second')


//Function to rotate the hand
const rotateHand=(element,degree)=>{
    element.style.setProperty('--degree-of-rotation',degree);
}

//Function to set the clock
const setClock=()=>{
    const currentTime=new Date();
    const currentHour=currentTime.getHours();
    const currentMinute=currentTime.getMinutes();
    const currentSeconds=currentTime.getSeconds();
    let hourDegree=(currentHour/12)*360;
    let minuteDegree=(currentMinute/60)*360;
    let secondDegree=(currentSeconds/60)*360;
    rotateHand(hour,hourDegree);
    rotateHand(minute,minuteDegree);
    rotateHand(second,secondDegree);
}

//Invoke the function in each second
setInterval(setClock,1000); 

setClock();