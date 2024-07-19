// await is used to maintain ordrer/sequence
const p1= new Promise((resolve,reject)=>{
    console.log('promise1')
    setTimeout(()=>{
       resolve("resolve1")
    },10000)
})
const p2 = new Promise((resolve,reject)=>{
    console.log("promise2");
    setTimeout(()=>{
      resolve("resolve2")
    },10000)
});
async function handlePromise(){
    console.log("hii");
    console.log(await(p1));
    console.log("await2");
    console.log(await (p2));
}
handlePromise();

console.log('nitish');










