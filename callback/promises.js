// promise is an object that produce a single value in future either a sucess or faliure
// indicates eventual completion or failure of an operation

const p = new Promise((resolve,reject)=>{
    console.log('hi');
     let i =2;
     setTimeout(()=>{
         console.log('line 8 new');
         resolve('nitish');
     }, 2000);
     console.log('line9');
    //  if(i%2==0){
    //     resolve("even");
    //  }else{
    //     reject("odd");
    //  }
});
console.log('hi2');

p.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });

p.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });


/*
1. normal promises
2. the promise creation function excutes the simple sync statement
3. promises always return a promise
4. the promise creation function excutes the simple sync statement only once







