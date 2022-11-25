// function khaled() {
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var error = document.getElementById("error");
//     var text = "" ;

//     if (username.length < 5) {
//         text = ("please enter valid username");
//         error.innerHTML = text;
//         return false ;
//     } else if (email. indexOf("@") == -1 &&  email.length < 10) {
//         text = ("please enter valid email");
//         error.innerHTML = text;
//         return false ;
//     }else if (isNaN(phone) || phone.length !== 11) {
//         text = ("please enter valid phone");
//         error.innerHTML = text;
//         return false ;
//     } else {
//        alert ("done");
//         return true;
//     }
    
// }


// var x=5;
//     y=5;
//     z=4;
//     document.getElementById("demo").innerHTML=(x===y)   + "<br>"+ (x===z) ;

//     var cars = ["Saab", "Volvo", "BMW"];
//     document.getElementById("demo1").innerHTML = cars[2] ;

//     var MyInfo={FristName:"khaled",LastName:"refat"};
//         document.getElementById("demo2").innerHTML=MyInfo.LastName;


//         var myage= "10"+"20";
//         document.getElementById("demo3").innerHTML=myage;

//         var myAge1 = 5 + 4 + "Osama";
//         var myAge2 = "Osama" + 5 + 4 ; 
//         document.getElementById("demo3").innerHTML=myAge1;
//         document.getElementById("demo4").innerHTML=myAge2;

// var a= [1,2,3] .pop(4);

//     document.getElementById("demo5").innerHTML=a++;
// var text=50;
// var yourage=prompt("text");
// if (yourage ==50){
//     alert("1111111111111good1111111111111111");

// }
// else{
//     alert("bad");
// }



// var myprice = "50"; //Data Type <= string
// if (myprice === 50){//Data Type <= Nummer
// alert("Good")}
//  else { alert("Bad");} 

// function sayHi(){
//     var m="ggg";


// alert("halo"+' '+ m);
// }



//  var date =new Date ();
//  alert(date);

// الســـاعـــــــــــــــــــــه

 function showtime(){
    var date=new Date();
        houres=new Date().getHours();
        min =new Date().getMinutes();
        sec=new Date().getSeconds();
     var  time = houres+ ':' + min + ':' +sec;

   var newtime= document.getElementById("clock").innerHTML=time;
    setTimeout(showtime,1000);
}
showtime();








// الساعه ديجيتال

    
// function shotime(){
// var data=new Date();
//     houres=data.getHours();
//     min=data.getMinutes();
//     sec=data.getSeconds();
//     date= data.getDate();
//     manth=data.getMonth();
//     years=data.getFullYear();

//     houress="";
//     houresss="";
//     minn="";
//     secc="";
//     // ------------------------------
//         if(date<10){
//             datee="0"+date;
//         }else{
//             datee=date;
//         }
//         if(manth<10){
//             manthh="0"+manth;
//         }else{
//             manthh=manth;
//         }
// // ------------------------------------
//     if(houres > 12){
//         hourss= houres - 12  ;
//         houress= ' pm ' +hourss ;
//     }else if (houres = 12){
//         houress=" pm "+'' +houres  ;
//     }else{
//         houress="am"+' ' +houres  ;
//     }
    
//     if(houres<10){
//         houresss="0"+houress;
//     }else{
//         houresss=houress;
//     }
//     if(min<10){
//         minn="0"+min;
//     }else{
//         minn=min;
//     }
//     if(sec<10){
//         secc="0"+sec;
//     }else{
//         secc=sec;
//     } 
// // -----------------------------------------------------------
//     mydatee= datee +  ':' +manthh+ ':' + years  ;

//     mydate='     '+houress+':'+ minn +':'+secc  ;
//     document.getElementById("clockk").innerHTML=mydatee;
//     document.getElementById("clock").innerHTML=mydate;

//     setTimeout(shotime,1000);
// }shotime()

//  الساعه ديجيتال باستخدام ال switch

// function shotime(){
// var data=new Date();
//     houres=data.getHours();
//     min=data.getMinutes();
//     sec=data.getSeconds();
//     houress="";
//     houresss="";
//     minn="";
//     secc="";

//     switch(houres){
//         case'houres>12':
//         houress="pm" + " " + 24 - houres;
//         break;
//         case'houres=12' :
//         houress="pm" + " " + houres;

//         default:
//         houress="am" + " " + houres;
//     }


//     switch(houres){
//         case'houres<10':
//          houresss="0"+houress;
//         break;
//         default:
//          houresss=houress;
//     }
//     switch(min){
//             case'min<10':
//              minn="0"+min;
//             break;
//             default:
//              min=min;
//     }       
//     switch(sec){
//                 case'sec<10':
//                  secc="0"+sec;
//                 break;
//                 default:
//                  secc=sec;
//     }
//     mydate=houress+':'+ minn +':'+secc ;
//     document.getElementById("clock").innerHTML=mydate;
//     setTimeout(shotime,1000);
// }shotime()














