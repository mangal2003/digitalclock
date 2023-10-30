setInterval(() => {
  var currentDate = new Date();
  var time = document.getElementById("time");
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var currentSecond = currentDate.getSeconds();
  var second = document.getElementById(`second${currentSecond}`);

  if (currentSecond == 59) {
    location.reload(true);
  }

  if (Math.floor(currentHour / 10) === 0) {
    var hour1zero = document.querySelectorAll(".hour1zero");
    hour1zero.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 1) {
    var hour1one = document.querySelectorAll(".hour1one");
    hour1one.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 2) {
    var hour1two = document.querySelectorAll(".hour1two");
    hour1two.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 3) {
    var hour1three = document.querySelectorAll(".hour1three");
    hour1three.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 4) {
    var hour1four = document.querySelectorAll(".hour1four");
    hour1four.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 5) {
    var hour1five = document.querySelectorAll(".hour1five");
    hour1five.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 6) {
    var hour1six = document.querySelectorAll(".hour1six");
    hour1six.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 7) {
    var hour1seven = document.querySelectorAll(".hour1seven");
    hour1seven.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 8) {
    var hour1eight = document.querySelectorAll(".hour1eight");
    hour1eight.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }
  if (Math.floor(currentHour / 10) === 9) {
    var hour1nine = document.querySelectorAll(".hour1nine");
    hour1nine.forEach((element) => {
      element.classList.add("highlight");
    });
    //  ;
  }

  if (currentHour % 10 === 0) {
    var hour2zero = document.querySelectorAll(".hour2zero");
    hour2zero.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 1) {
    var hour2one = document.querySelectorAll(".hour2one");
    hour2one.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 2) {
    var hour2two = document.querySelectorAll(".hour2two");
    hour2two.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 3) {
    var hour2three = document.querySelectorAll(".hour2three");
    hour2three.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 4) {
    var hour2four = document.querySelectorAll(".hour2four");
    hour2four.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 5) {
    var hour2five = document.querySelectorAll(".hour2five");
    hour2five.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 6) {
    var hour2six = document.querySelectorAll(".hour2six");
    hour2six.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 7) {
    var hour2seven = document.querySelectorAll(".hour2seven");
    hour2seven.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 8) {
    var hour2eight = document.querySelectorAll(".hour2eight");
    hour2eight.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentHour % 10 === 9) {
    var hour2nine = document.querySelectorAll(".hour2nine");
    hour2nine.forEach((element) => {
      element.classList.add("highlight");
    });
  }

  if (Math.floor(currentMinute / 10) === 0) {
    var minute1zero = document.querySelectorAll(".minute1zero");
    minute1zero.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 1) {
    var minute1one = document.querySelectorAll(".minute1one");
    minute1one.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 2) {
    var minute1two = document.querySelectorAll(".minute1two");
    minute1two.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 3) {
    var minute1three = document.querySelectorAll(".minute1three");
    minute1three.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 4) {
    var minute1four = document.querySelectorAll(".minute1four");
    minute1four.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 5) {
    var minute1five = document.querySelectorAll(".minute1five");
    minute1five.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 6) {
    var minute1six = document.querySelectorAll(".minute1six");
    minute1six.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 7) {
    var minute1seven = document.querySelectorAll(".minute1seven");
    minute1seven.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 8) {
    var minute1eight = document.querySelectorAll(".minute1eight");
    minute1eight.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (Math.floor(currentMinute / 10) === 9) {
    var minute1nine = document.querySelectorAll(".minute1nine");
    minute1nine.forEach((element) => {
      element.classList.add("highlight");
    });
  }

  if (currentMinute % 10 === 0) {
    var minute2zero = document.querySelectorAll(".minute2zero");
    minute2zero.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 1) {
    var minute2one = document.querySelectorAll(".minute2one");
    minute2one.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 2) {
    var minute2two = document.querySelectorAll(".minute2two");
    minute2two.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 3) {
    var minute2three = document.querySelectorAll(".minute2three");
    minute2three.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 4) {
    var minute2four = document.querySelectorAll(".minute2four");
    minute2four.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 5) {
    var minute2five = document.querySelectorAll(".minute2five");
    minute2five.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 6) {
    var minute2six = document.querySelectorAll(".minute2six");
    minute2six.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 7) {
    var minute2seven = document.querySelectorAll(".minute2seven");
    minute2seven.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 8) {
    var minute2eight = document.querySelectorAll(".minute2eight");
    minute2eight.forEach((element) => {
      element.classList.add("highlight");
    });
  }
  if (currentMinute % 10 === 9) {
    var minute2nine = document.querySelectorAll(".minute2nine");
    minute2nine.forEach((element) => {
      element.classList.add("highlight");
    });
  }

  second.classList.add("blue");
  setTimeout(() => {
    second.classList.remove("blue");
  }, 1000);
}, 1000);
