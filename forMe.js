alert("welcome Sami in your location");
let name = prompt("اخل اسمك:");
let age =prompt("ادخل عمرك");
let city =prompt("مدينتك:");

alert("اهلا بك يا " + name + " من مدينة " + city + " عمرك هو " + age);

document.write("hello");

function getDate(){
    let date = document.getElementById("btnDate");
    let dateNow = new Date();
    date.innerText = dateNow.toString();
}


function showInfoUser(){
    let info = document.getElementById("infoUser");

    info.innerText = "الاسم: " + name + "\n  العمر: " + age + "\n المدينة: " + city ;
    info.style.display = "block";
}


function newBox(){
    let data = document.getElementById("myBox");

    let newp = document.createElement("p");

    newp.style.color = "red";
    newp.style.font = "100";
    newp.innerText = "الاسم: " + name + "\n  العمر: " + age + "\n المدينة: " + city ;
    data.appendChild(newp);

}


var fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Mango";
fruits[3] = "Orange";
fruits[4] = "Blueberry";

for(i = 0 ; i <fruits.length ;i++){
    document.write(fruits[i]);
    document.write("<br>");
}

fruits.pop();
for(i = 0 ; i <fruits.length ;i++){
    document.write(fruits[i]);
    document.write("<br>");
}

fruits.shift();
for(i = 0 ; i <fruits.length ;i++){
    document.write(fruits[i]);
    document.write("<br>");
}