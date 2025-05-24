let promise  =new Promise((resolve,reject)=>{

    let no=13;
    if(no%2==0)
    {
        resolve("Sucess");
    }
    else{
        reject("Failed");
    }
});

promise.then((result)=>{
    console.log("Even Number "+result);
    }).catch((result)=>{
        console.log("Odd Number "+result);
    });
    