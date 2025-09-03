const daysTag = document.getElementById('day-name');
const dateTag = document.getElementById('date-number');
const monthTag = document.getElementById('month-name');
const yearTag = document.getElementById('year-number');

const date = new Date();

function renderCalendar() {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    daysTag.innerText = days[day];
    dateTag.innerText = day;
    monthTag.innerText = months[month];
    yearTag.innerText = year;
}
renderCalendar();