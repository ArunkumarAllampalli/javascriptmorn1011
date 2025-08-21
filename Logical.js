/*let a = Number(prompt("Enter a value : "));
let b = Number(prompt("Enter b value : "));
document.writeln("<h1>a = "+a+" b = "+b+"</h1>");
document.writeln(a>b?a:b);

let s1= Number(prompt("Enter sub 1  Marks : ")); // 30
let s2= Number(prompt("Enter sub 2  Marks : ")); // 50 
let s3= Number(prompt("Enter sub 3  Marks : ")); // 60
document.writeln((s1>34 && s2>34 && s3>34) ? "Hi":"Bye");


let username = prompt("Enter User Name ");
let password = prompt("Enter Password");
if(username=="admin" && password == "admin"){
    document.writeln("<h2>Login success</h2>");
}else{
    document.writeln("<h2>Invalid UserName or Passwordd</h2>");
}*/
let a = 30, b = 20, c=30,d=40,e=70;
let max = a;
if(max<b){
    max = b;
}
if(max<c){
    max = c;
}if(max<d){
    max = d;
}
if(max<e){
    max = e;
}
document.writeln("<h1> max is "+max+"</h1>")

