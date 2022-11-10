var countDownDate = new Date("Feb 15, 2023 03:34:21").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  Alpine.store(
    "timer",
    "Available for - " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s "
  );
  Alpine.store("timeLeft", distance);
  if (distance < 0) {
    clearInterval(x);
    Alpine.store("timer", "Expired");
  }
}, 1000);
