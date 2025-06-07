let start=document.querySelector("#start");
let end=document.querySelector("#end");
let primenum=document.querySelector("textarea");
let btn=document.querySelector("button");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i= start.value; i<=end.value;i++){
        let m=0;
        for(let j=1;j<=i;j++)
        {
            if(i%j==0){
                m++;
            }
        }
        if(m==2){
            primenum.value=primenum.value+i+", ";
        }
    }
})