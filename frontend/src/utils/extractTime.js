const extractTime = (time)=>{
  const timestamp = new Date(time);
  const hour = timestamp.getHours();
  const minute = timestamp.getMinutes();
  const period = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${formattedHour}:${
    minute < 10 ? "0" : ""
  }${minute} ${period}`;

  return formattedTime;
}
export default extractTime;