function check() {
 var correctAnswers=0;
 if (document.getElementById("two").checked == true) 
 {
 correctAnswers++;
 }
  if (document.getElementById("four" ).checked == true) 
 {
 correctAnswers++;
 }
  if (document.getElementById("eight").checked == true) 
 {
 correctAnswers++;
 }
 
 alert ("You have "+correctAnswers+" correct answers.");
}

