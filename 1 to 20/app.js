// ============chapter 1
// task 1
alert("Error "+ "\n \n " +"Please Enter Correct Password");
//task 2
alert("Hello user happy coding"+ "\n \n " +"welcome to Js world");
// task 3
alert("welcome to js world");
// task 4
alert("Hello user happy coding"+ "\n \n " +"welcome back");
// task 5
confirm("Prevent this page from creating additional dialogs");

//====================chapter 2

var username = prompt("Enter Your Name");
var my_name = "Mashood Hussain";
var message = "Hello World";

alert(message);

//Student bio data 

name = "Jhone Doe";
age = 18;
course = " Certified mobile and web";

alert(name);
alert(age);
alert(course);

// script display pizza
var var1 = "pizza";
var var2 = "pizz";
var var3 = "piz";
var var4 = "pi";
alert(var1 + "\n" + var2 + "\n" + var3 + "\n" + var4 );
 // email

 email = "mashoodhussain100@gmail.com";

 alert("My email is" + email);
 
 //book
 book ="A smarter way to learn JavaScript";
 
 alert ("I'm tring to learn new book which is " + book);

 // write on page

 document.write(" Write a script to display this in browser through JS");

 //
 var end = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
 alert(end);
 

 // ========  chapter 3

var age = 18;
alert("I'm " + age + " year old")

// page visit

var n = 12;
alert("You visit this site " + n + " times");

//birth year

var birth_year = 2001;

document.write("My Birth Year is " + birth_year +" <br>" + "Data type of My birthday declearation is Number");

// xyz store

var name = "Jone Doe"
var quantity = 34;
var product = "Shirts"

document.write("<br> <br> <b>"+ name + "<b> ordered <b> "+quantity+"<b> <b> "+product+ " <b> from xyz.com"  );

//==================== chaptre 4

//question 1
var var1 = 23 , var2 = 212 , var3 = 34;
// quwstion 2

// illegal variable

// var 1stname ="";
// var brainly-in ="";
// var @gmail = "";
// var 2nd = "";
// var %per = "";


// legal variable

var $dollar = 34;
var first_name ="Mashood";
var _user = "";
var buyer = "Student";

document.write("<h2> Rule of nameing  javascript <h2>");

document.write("<h4> Variables must begin with a Number, $ or_. For example $name, _name or name <br> Variable names can only contain number, $,alphabate and _.For example $my_1stVariable");
document.write("<br> Variable name should be case sensitive <br> js variable should not be js key words")


// chapter ===== 5

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
var multi = num1 * num2;
var subt  = num1 - num2;
var division = num1 / num2;
var module = num1 % num2;


document.write("The Sum of "+ num1 +" and " +num2 + " is " +sum + "<br>");

document.write("The multi of "+ num1 +" and " +num2 + " is " +multi + "<br>");

document.write("The subt of "+ num1 +" and " +num2 + " is " +subt + "<br>");

document.write("The division of "+ num1 +" and " +num2 + " is " +division + "<br>");

document.write("The module of "+ num1 +" and " +num2 + " is " +module + "<br> <br>");

var c;

document.write("The value after Decleration is " + c + "<br>");

c =5;
document.write("The value after decleration is  "+ c +"<br>");

c= ++c;
document.write("The value after increment is  "+ c +"<br>");

c= c+7
document.write("The value after adition is is  "+ c +"<br>");
c=--c;
document.write("The value after discriminent is  "+ c +"<br> <br>");


// question 4

var ticket = 600,
    quantity = 5,
    total = ticket*quantity;

document.write("<br>The cost of  "+ quantity +" movie ticket is " + total +  "PKR <br> <br>");
//table
for(var i = 1 ; i <=10 ; i++ ) {
   var total= 4*i
    document.write("4 X " + i + " = " + total + "<br>" )

}

// temp converter
 var C = 25;
 var F = C*9/5;
 
document.write("<br>"+C+"C is " +F+ "F")
var F = 70;
var C = (F-32)*5/9;
 document.write("<br>"+F+"F is " +C+ "C");

 document.write("<br> <br> <h1> Shopping Cart <h1> ");

 var item1 = 650,
     item2 = 100,
     quantity1= 3,
     quantity2 = 7;


var total_bill = (item1*quantity1) + (item2*quantity2)+100;

document.write("<h4>Price of Item1 = " + item1 + "<br> Price of item2 = " + item2 + "<br> Quantity Of  = " + quantity1 + "<br> Quantity Of item 2 = " + quantity2 +"<br> Shipping Charges 100rs <br> total price "+ total_bill);

var t_marks = 980;
var ob_mark = 804;
var perc = ob_mark/t_marks;

document.write("<br> <br> <h1> Marksheet <h4> ");
document.write("<br> Total marks = "+ t_marks + "<br> ob_mark = "+ ob_mark + "<br> Percentage = " + perc);

document.write("<br> <br> <h1> Currency Conventer <h4> ");
//currency converter
var dollar = 10,
    riyal = 28,
    pkr_to_dol = dollar * 104.80,
    pkr_to_riy = riyal *  25,
    total_pkr = pkr_to_dol + pkr_to_riy;


document.write("Total Currency in PKR = "+total_pkr);

// MAth expersetion

var num = 45,
    answer = ((num + 5) * 10)/2

// birth Calculator

 var current = 2020,
    birth_year = 2001,
    age = current - birth_year;
    document.write("<br> <br> <h1> Age Converter <h4> ");
    document.write("<br> Current age: " + current + "<br> Birth year: " + birth_year + "<br> Age: " +age)
    

// geometer 

var circle = 20,
    radius = 2 * 3.142,
    area = 3.142*(radius)**2;
    
    document.write("<br> <br> <h1> Geometer <h4> "); 
    document.write("<br> circle: "+ circle + "<br> radius: " + radius + "<br> Area: " + area );


//sanke calculator

var snacke = "chocolate chips",
    current_age = 15,
    max_age = 65,
    snacke_perday = 3,
    total_chips = (max_age-current_age)*365*3

 document.write("<br> <br> <h1> The life time supply Calculator <h4> "); 
    document.write("<br> You will need:  "+ total_chips + " to last you untill the age of  " + max_age );




//============ chapter 6 - 9

var a = 10;
document.write("The value of a is " + a);
document.write("<br>........................................")
a = ++a;
document.write("<br> <br> The value of a after a++ is : " +a);
document.write("<br> Now the value of is : " +a);

a = a++;
document.write("<br> <br> The value of a after ++a is : " +a);
document.write("<br> Now the value of is : " +a);

a =--a;
document.write("<br> <br> The value of a after --a is : " +a);

document.write("<br>  Now the value of is : " +a);

//2

var a = 2, b = 1;

document.write("<br> <br> Value of a: "+ a);
document.write("<br>  Value of b: "+ b);

var result = --a - --b + ++b + b--;
//            1  -   0 +   1 + 1   

document.write("<br>  result: "+ a +"<br><br>");

//greeting msg

user = prompt("Hello users what's your name","user")
alert("Hello, "+user)

//multipication table
user_num = +prompt("Enter number For multiplication Table","5")
for(var i = 1 ; i <=10 ; i++ ) {
    var total= user_num*i
     document.write(user_num+" X " + i + " = " + total + "<br>" )
 
 }

 // marksheet
// subject_1 = prompt("Enter 1st Subject  name");
// subject_2 = prompt("Enter 2nd Subject  name");
// subject_3 = prompt("Enter 3rd Subject  name");

// obt_mark1 = +prompt("Enter 1st Subject  obtain marks");
// obt_mark2 = +prompt("Enter 2nd Subject  obtain marks");
// obt_mark3 = +prompt("Enter 3rd Subject  obtain marks");


 document.write("<table>");
 document.write("<th>Marksheet</th>");
 document.write("<tr> <td> subject </td> <td> obtain marks </td>  <td> total marks </td>         </tr> ");
 document.write("<tr>");
 document.write("<td> 5 </td>")
 
 document.write("<td>4</td>");


 document.write("</tr>");
 document.write("<table>")


 /// ===================== chapter 9--11

// city name 
var city =  prompt("What's your city name ", "karachi");

if( city  === "karachi"){


alert("welcome to the city of ligth")

} 
else{
    alert("WELCOME To "+ city)
}
// gender
var gender =  prompt("What's your gender ");

if(  gender === "male"){


    alert("Good Morning Sir")
    
    } 
else if( gender === "female") {
        alert("Good Morning ma'ma ")
    }

// signal

var signal =  prompt("What's the color of signal ");

if ( signal === "red"){
    alert("YOU SHOULD STOP")
}
else if ( signal === "green"){
    alert("YOU SHOULD walk")
}
else if ( signal === "yellow"){
    alert("YOU SHOULD ready for walk")
}
// fuel checker

var fuel = +prompt("Enter you fuel")

if ( fuel <= 0.25){
    alert("Please refill your tank")
}
else {
    alert("You SHOULD have enough petrol")
}

// task 6 

var obt_mark1 = +prompt("Enter 1st Subject  obtain marks");
var obt_mark2 = +prompt("Enter 2nd Subject  obtain marks");
var obt_mark3 = +prompt("Enter 3rd Subject  obtain marks");

var mark_obt = obt_mark3 + obt_mark3 + obt_mark3;
var total = 300;
var perc = (mark_obt/total)*100;
var grade;
var remark;
if ( perc >= 80){
    grade = " A-One "
    remark = "Excellent"
}
else if ( perc <= 80 && perc >=70){
    grade = " A "
    remark = "Good"
}
else if ( perc <= 60 && perc >=50){
    grade = " A "
    remark = "You should Improve"
}

else if ( perc <= 50 ){
    grade = " Fail "
    remark = "Fail"
}

document.write("<h2> Marksheet </h2>");
document.write("<br> Obtain Mark: "+ mark_obt);
document.write("<br> Total Marks:  "+ total);
document.write("<br> Grade: "+ grade);
document.write("<br> Percentage: "+ perc);
document.write("<br> Remarks: "+remark);

// task 7 
var secret_no = 6;
var user = +prompt("guess the secret no");
if ( user == secret_no){
 alert("Bingo you guess the right no")   
}
else if(user == secret_no+1){
    alert ("Close enough to the correct answer”")
}
else{
    alert("You guess is wronge")
}
// task 8

var user_input = +prompt("enter No")

if ((user_input % 3) == 0){
    alert("your no is divisble by 3")
}
else {
    alert("Your no is not divisible by 3")
}
// task 9

var user_input = +prompt("enter No to Check  it's even or odd")

if ((user_input % 2) == 0){
    alert("your no is even")
}
else {
    alert("Your no is odd")
}

//10

var temp = +prompt("Enter today's temp ");

if ( temp > 40) {
    
alert("too hot outside")

}
else if ( temp > 30 && temp <40){

    alert("TODAY weather is normal")
}

else if ( temp > 20 && temp <30){

    alert("TODAY weather is cool")
}
else if ( temp > 30 && temp <40){

    alert("OMG! TODAY weather is so cool")
}
// 11

var first_num= +prompt("Enter 1st no");

var sec_num= +prompt("Enter 2nd no");

var operater = prompt("Enter operater")

if (operater === "+"){
    first_num+secret_no
}


else if (operater === "*"){
    first_num*secret_no
}

else if (operater === "/"){
    first_num/secret_no
}

else if (operater === "-"){
    first_num - secret_no
}

// chapter 12 to 13

//task 1
num1 = +prompt("enter first number");
num2 = + prompt("enter 2nd number");

if (num1 > num2){


    alert("First number is biger then 2nd")
}
else if ( num1 < num2){
    alert(" 2nd number is bigger then first one")
}
else{
    alert("both are equal")
}

// task 3
 var num = +prompt("enter number to check")
if (num > 0){


    alert("number is Positive")
}
else if ( num < 0){
    alert(" number is negative")
}
else{
    alert("number is zero")
}
// task 4
var char = prompt("Enter vowel to check")
if (char.length == 1) {
   
    if( char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u" ){

        alert("it id vowel")
    }

    else {
        alert("its not vowel")
    }

    
  }
// task 5 

var password = prompt("enter password");

var confirm_ = prompt("confirm password")

if ( password == confirm_ ) {
    alert(" you inter correct passwoed")
}
else{
    alert("incorrect password " )
}

// task 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
alert(greeting)


// ================ chapter 14 --- 16
// task 1
var student_ = {};
//task 2
var student_ =[];
// task 3
var arr_str =["hello"]
// task 4
var arr_num = [34,43,23];
// task 5
var arr_bool = [true,false]
//task 6
var arr_mix = ["juice",true,32];

// task 7

var education = ["SSC","HSC","BCS","BS","B COm", "master","M-phill"];

// task 8

var student_name = ["Mashood","hamza","hussain"];
var student_num = [320,280,430];

document.write("score of " + student_name[0] + " is " + student_num[0] + "percentage  " +(student_num[0]/500)*100);
document.write("score of " + student_name[1] + " is " + student_num[1] + "percentage  " +(student_num[1]/500)*100);
document.write("score of " + student_name[2] + " is " + student_num[2] + "percentage  " +(student_num[2]/500)*100);


// ===================chapter 17

for(var i = 1; i<=10 ; i++ ){
    document.write(i + "<br>")
}

// task 3

var input =  +prompt("Enter No you want multiplicatio;n table of")
var len = +prompt(" enter the length of the table ");
for(var i = 0 ; i <=len.length ; i++ ) {
    var total= input*i
     document.write(input + " X " + i + " = " + total + "<br>" )
 
 }

 // task 4
