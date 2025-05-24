// Create one function which return temperature of multiple cities


let tempCal= async()=>{
    let pune = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("44");
        },1000);
    });
    
    let Nashik = new Promise((resolve,reject)=>{  
        setTimeout(() => {
            resolve("45");
        }, 1000);
    });

    let p=await pune;
    let n=await Nashik;

    return [p,n]
};

let result = tempCal()
    result.then((r)=>
    {
        console.log(r);
    });
