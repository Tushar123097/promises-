let promise = new Promise(function(resolve, reject){
   let isClean = true;

   if(isClean)
    {
 resolve("Room is clean");
   }else{
    reject("Room is dirty")
   }
});

promise
.then(function(random){
    console.log(random);
})
.catch(function(error){
    console.log(error);
});