const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');
let alarmDate;

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('fechaAlarma') !== null){
        const input = formAlarm.children[0];
        input.value = new Date(localStorage.getItem('fechaAlarma'));
    }

    getCurrentTime();
});

setInterval(()=>{
    getCurrentTime();
}, 1000);

formAlarm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get('time');
    if (value === null || value === ""){
        alert('Establesca una fecha');
        return;
    }
    const currentDate= new Date();
    const setAlarm = new Date(value);

    if (isValidDate(currentDate, setAlarm)){
        alert("Fecha invalida")
        return;
    }

    localStorage.setItem('fechaAlarma', setAlarm.toString());
    
});

function isValidDate(currentDate, setAlarm){
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    const alarmYear = setAlarm.getFullYear();
    const alarmMonth = setAlarm.getMonth();
    const alarmDay = setAlarm.getDay();
    const alarmHour = setAlarm.getHours();
    const alarmMinutes = setAlarm.getMinutes();

    const Ayearmenor = alarmYear < currentYear;
    const Ayearigual = alarmYear === currentYear;
    const Amonthmenor = alarmMonth < currentMonth;
    const Amonthigual = alarmMonth === currentMonth;
    const Adaymenor = alarmDay < currentDay;
    const Adayigual = alarmDay === currentDay;
    const Ahourmenor = alarmHour < currentHour;
    const Ahourigual = alarmHour === alarmHour;
    const Aminutesmenorigual = alarmMinutes <= currentMinutes;

    return (Ayearmenor || Ayearigual && Amonthmenor || Amonthigual && Adaymenor || Adayigual && Ahourmenor 
        ||Ahourigual && Aminutesmenorigual)
}

function getCurrentTime(){
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    

    hours.innerText = formatNumber(currentHours);
    minutes.innerText = formatNumber(currentMinutes);
    seconds.innerText = formatNumber(currentSeconds);
};

function formatNumber(value){
    if (value < 10) {
        return "0" + value;
    }else{
        return value;
    }
}

//const formatNumber = value => value < 10 ? "0" + value : value;