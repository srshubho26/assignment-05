// Geting the latest date and formating
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
function formatedDate(){
    const date = new Date(Date.now());

    const month = date.getMonth();
    let dayOfMonth = date.getDate();
    dayOfMonth = dayOfMonth<10 ? '0'+dayOfMonth : dayOfMonth;
    const year = date.getFullYear();

    let hour = date.getHours();
    const amPm = hour > 11 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? '0'+hour : hour;

    let minute = date.getMinutes();
    minute = minute < 10 ? '0'+minute : minute;

    return `Date: ${months[month]} ${dayOfMonth}, ${year} | <span class="inline-block">${hour}:${minute} ${amPm}</span>`;
}

// Page navigator function
function pageNavigator(btn, address){
    document.getElementById(btn).addEventListener("click", function(){
        window.location.href = address;
    });
}