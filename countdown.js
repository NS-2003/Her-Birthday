// Set the target date and time
const targetDate = new Date("2024-12-10T14:06:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("present").classList.remove("hidden");
    document.getElementById("present").classList.add("visible");

    document.getElementById("countdown-container").classList.add("hidden");
    document.getElementById("countdown-gif").classList.add("hidden");

    document.body.style = '';
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `
    ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
  `;
}, 1000);
