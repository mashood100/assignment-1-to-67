// chapter 33 to 44

//task 1
// function power (a,b){
//     result = a**b
//     return result
// }
 
// task 2
// input = +prompt("enter year")

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// alert(leapyear(input))


// // task 3




// function area(a,b,c){
  
//     function Side (){
//     result = ( a + b + c ) / 2
//     return result
//      }
//      S = Side();
    
//     result = S*(S-a)*(S-b)*(S-c)
//     return result
// }

// alert(area(1,4,4))


// task 4


// function marksheet(sub1,sub2,sub3){

    
// function perc(){
//     perc= (sub1 + sub2 + sub3)/3
//     return perc
// }
// function averge(){
//     averge = (sub1 + sub2 + sub3)/3
//     return averge
// }

//     document.write("Subject 1 : " + sub1 + "<br> Subject 2 : " + sub2 +"<br> Subject 3 : " + sub3 + "<br>"  )
//     document.write("Perctage = " + perc().toFixed(2) + "%  <br>")
//     document.write("average marks = " + averge().toFixed(0) )
// }
// marksheet(73,22,98)

// task 6

// sentance = "helle , welcome to javascript"

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

// alert(removeVowels(sentance))

// task 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// alert (findOccurrences());

// task 8

// function converter(km){
//      meter = km*1000 ; foot = km *3280.84 ; inch = 39370.1
//      document.write(`Km = ${km}<br>Meter = ${meter}<br>Foot = ${foot}<br>Inch = ${inch}` )
// }
// converter(34);

// // task 9
// function overTime(){

//     var hour = +prompt("Enter no of hours empoly work")
//     var  overtimePay;
//   if( hour > 40){
//      var overtime = hour - 40
//      var overtimePay = overtime * 12 

//      alert(`your overtime pay is ${overtimePay} rupess`)
//   }   
//   else{
//        alert("You have to work more than 40 hr to get overtime pay ")
//   }
// }

// overTime()

// task 10
// var amount = +prompt("Enter cash amount ")
// var hundered = Math.floor(amount / 100)
// var fifty = Math.floor((amount%100)/50)
// var ten =  Math.floor((((Amount % 100) % 50) / 10))
// alert(`You will have ${hundered} notes of hundred , ${fifty} notes of fifty and ${ten}`)




// chapter 49  to 52

// Task 1

// var modal = document.getElementById('id01');

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// function submit(){
//      email = document.getElementById('email');
//      password = document.getElementById('password');
//      alert(` email: ${email}
//       password ${password}`)
// }

//     Task 2

// function showMore() {
//       var dots = document.getElementById("dots");
//       var moreText = document.getElementById("more");
//       var btnText = document.getElementById("myBtn");
//       if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//       } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//       }
//     }


// task 3 


function deleteRow(r) {
  {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("MyTable").deleteRow(i);
  }
}
function editRow(r) {
  {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("MyTable").editRow(i);
  }
}


