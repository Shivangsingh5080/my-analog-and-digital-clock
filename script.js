setInterval(()=>{
d=new Date();
htime=d.getHours();
mtime=d.getMinutes();
stime=d.getSeconds();
hrotation=30*htime+mtime/2;
mrotation=6*mtime;
srotation=6*stime;
hour.style.transform=`rotate(${hrotation}deg)`;
minute.style.transform=`rotate(${mrotation}deg)`;
second.style.transform=`rotate(${srotation}deg)`;
},1000);
function updateClock() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Day, Date, Month, Year
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    // Display
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("day").textContent = dayName;
    document.getElementById("date").textContent = `${date} ${monthName} ${year}`;
  }

  // Update every second
  setInterval(updateClock, 1000);
  updateClock();