
function checkSelect() {
    var grid = document.getElementById("todo");
    var check = grid.getElementsByTagName("INPUT");
    var checked =  0;
    // promise
    let myPromise = new Promise(function(myResolve, myReject) {
    //Loop 
    for (var i = 0; i < check.length; i++) {
      // if loop
        if (check[i].checked) {
            checked++;
            if(checked==24){
                alert(" Congrats 5 Tasks have been successfully completed");
                 myResolve("Successfully completed 5 tasks");
                $(".list").toggle(this.disabled);
            }
            //   else if(checked>=6){
            //   alert("Cannot access more than 5 task");
             
            //  }  
            else {
              myReject("Error");
           }
        }
       
    }
   });
  }

// function checkSelect(){
//      return new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
//     var grid = document.getElementById("todo");
//      var check = grid.getElementsByTagName("INPUT");
//      var checked =  0;
//      for (var i = 0; i < check.length; i++) {
  
//     if(check[i].checked){
//         checked++;
//         if(checked==5)
//         resolve("done");
//     }
//     else{
//         reject("error:some error occured"  );
//     }


// }
// }
    
//   });


// function checkSelect() {
//     var grid = document.getElementById("todo");
//     var check = grid.getElementsByTagName("INPUT");
//     var checked =  0;
  
  
//   let myPromise = new Promise(function(myResolve, myReject) {
    
//     for (var i = 0; i < check.length; i++) {
//   // The producing code (this may take some time)
//   if (check[i].checked) {
//                checked++;
//     if (checked == 5) {
//     //   myResolve("OK");
//       myResolve("Successfully completed 5 tasks");
//       alert("Successfully completed 5 tasks");
//     }
//       // else if(checked>=6){
//       //                 alert("Cannot access more than 5 task");
                     
//       //                 }  

//     // else {
//     //   myReject("Error");
//     // }
// }

// }
//   });
  
 
//  }