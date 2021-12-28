function humanReadable (seconds) {
  let [hour, minute, second] = [0,0,0];
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;
  if(Math.floor(seconds / SECONDS_IN_HOUR)>=1){
    hour = Math.floor(seconds / SECONDS_IN_HOUR);
    seconds = seconds - (hour*SECONDS_IN_HOUR);
  }
  if(Math.floor(seconds / SECONDS_IN_MINUTE)>=1){
      minute = Math.floor(seconds/SECONDS_IN_MINUTE);
      seconds = seconds - (minute*SECONDS_IN_MINUTE);
  }
  second = seconds;
  
  hour = hour < 10 ? "0" + hour : hour.toString();
  minute = minute < 10 ? "0" + minute : minute.toString();
  second = second < 10 ? "0" + second : second.toString();
  
  return hour + ":" + minute + ":" + second;
}

console.log(humanReadable(120));