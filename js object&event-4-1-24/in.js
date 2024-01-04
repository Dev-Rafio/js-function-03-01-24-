
// js object

var myInfo={

name:'Rafio',
address:"dhaka",
phoneNo:"01747784310",
sum:78,

}
console.log(myInfo.phoneNo,myInfo.address);


//function object
function printr(name,address, phone,sum){
this.name=name;
this.address=address;
this.phone;
this.sum;
}
var print= new printr("rafio","dhaka","0176846");
console.log(print.name);



//js Events

function Printlen() {
  document.write("HeLlo everyone' How are you ?")
}


function Nm() {
  document.getElementById("id2").innerHTML= Date();
}


function ClickMe(){
  document.getElementById("ID1").innerHTML = Date()

}


