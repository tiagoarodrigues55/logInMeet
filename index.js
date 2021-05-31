const LogInMeet = require('./index2')

let date_ob = new Date();
let hours = date_ob.getHours() < 10 ? `0${date_ob.getHours()}`: date_ob.getHours() 
let minutes = date_ob.getMinutes() < 10 ? `0${date_ob.getMinutes()}`: date_ob.getMinutes() 

 const time = `${hours}:${minutes}`
 var weekday = date_ob.getDay();
 const weekdays = ["seg", "ter", "qua", "qui", "sex"]
 const room = "uxr-mrzt-tho"
const email = "tiago.rodrigues@alunoviva.com.br"
// const email = "tiago.americano.03@gmail.com"
const password = "Tiago2003";
const classes = [
  {subject:"Mat", start:"20:00", finish:"20:13", day:"seg", room:"gws-huqm-dji"},
  {subject:"Mat", start:"8:20", finish:"9:23", day:"ter", room:"gws-huqm-dji"},
  {subject:"Mat", start:"9:55", finish:"10:58", day:"qui", room:"gws-huqm-dji"},
  {subject:"LP", start:"11:00", finish:"12:03", day:"qui", room:"uxr-mrzt-tho"},
]
for(let i of classes){
  if(i.day === weekdays[weekday-1]){
  if(Number(time.replace(':',''))>Number(i.start.replace(':','')) && Number(time.replace(':',''))<Number(i.finish.replace(':',''))){
    LogInMeet(i.room, i.finish, email, password)
  }else{
    console.log(Number(time.replace(':','')), Number(i.start.replace(':','')), Number(time.replace(':','')),Number(i.finish.replace(':','')))
  }
  }else{
    console.log(weekdays[weekday])
  }
}
