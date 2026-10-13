const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const periodElement = document.getElementById("period");

function updateClock() {
  const now = new Date();

  // Use the visitor's local time zone and a 12-hour clock.
  timeElement.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now).replace(/\s?(AM|PM)$/i, "");

  periodElement.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    hour12: true
  }).format(now).replace(/^.*\s/, "").toUpperCase();

  dateElement.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
}

// Show the time immediately, then refresh it every second.
updateClock();
setInterval(updateClock, 1000);
