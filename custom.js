//let name="ram"
//alert(name);

//let x=20
//let y=30

//alert(x+y)

//let name="ram"
//let address="kathmandu"

//document.getElementById("info").innerHTML="<h1> Hello  "+name+" from  "+address+"</h1>"

//setInterval(function(){
//   alert("K xa siddhu bhai")
//},2000);

//function demo_clock(){
    //let date = new Date();
    //let time=date.toLocaleTimeString();
     //document.getElementById("info").innerHTML=time;
//}
//setInterval(demo_clock,1000);

//let x=20
//let y=30
//let z=x+y;
//console.log(z);

// let x=10
// let y=20
// let add = x+y;
// let sub =x-y
// let mul = x*y;

// console.log(add);
// console.log(sub);
// console.log(mul);

// let box="";
// for(let i=1; i<=10; i++){
//     box += "<div class='box'>"+i+"</div>";
// }
// document.getElementById("container").innerHTML = box

// function addNumber(){
//     let num1=parseInt(document.getElementById('fn').value);
//     let num2=parseInt(document.getElementById('ln').value);
//     let result = num1 + num2;
//     document.getElementById('result').value = result;
// }

function gaf(){
    let question= confirm("Do you love me?")
    if(question){
        let name = prompt("what is your name cutie?")
        if(name=="")
           alert("name required bad cutie") 
    }else{
        alert("Kasto xuchi")
    }
    
}

gaf();