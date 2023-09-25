

/* 

pattern :

        * * * *
        * * * *
        * * * *
        * * * *
        * * * *


*/
const printPattern=(n)=>{
    for(let i=0;i<n;i++)
    { var str="";
        for(let j=0;j<n;j++)
        {
            str+="* ";
            
        }
        console.log(str);
    }

}






printPattern(5)