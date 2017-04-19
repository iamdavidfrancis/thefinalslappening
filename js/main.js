$(document).ready(function() {
  var countdownDate = new Date(2018, 9, 01, 20, 0, 0); // YYYY, MM (0 indexed), DD, HH, MM, SS
  
  function getRemainingTime(end) {
    var t = (Date.parse(end) - Date.parse(new Date())) / 1000;
    var seconds = Math.floor(t % 60);
    var minutes = Math.floor( (t / 60) % 60);
    var hours = Math.floor( (t / (60*60)) % 24);
    var days = Math.floor( (t / (60*60*24)) % 365);
    var years = Math.floor( t / (60*60*24*365));
    
    return {
      total: t,
      years: years,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
  
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  
  setInterval(function() {
    var remaining = getRemainingTime(countdownDate);
    
    var remainingString = "";
    
    if (remaining.years) {
      remainingString += remaining.years;
      remainingString += " Year";
      if (remaining.years > 1) {
        remainingString += "s";
      }
      remainingString += " ";
    }
    
    if (remaining.days) {
      remainingString += remaining.days;
      remainingString += " Day";
      if (remaining.days > 1) {
        remainingString += "s";
      }
      remainingString += " ";
    }
    
    remainingString += pad(remaining.hours, 2);
    remainingString += ":";
    remainingString += pad(remaining.minutes, 2);
    remainingString += ":";
    remainingString += pad(remaining.seconds, 2);

    $("#countdown").text(remainingString);
  }, 1000);
});
