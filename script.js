let userscore=0;
let comp_score=0;

const comp=()=>{
    const options=["rock","paper","scissor"];
     const random=Math.floor(Math.random()*3);
    return options[random];

}

const user_scorepara=document.querySelector("#user_score");
const comp_scorepara=document.querySelector("#com_score");
const showwinner=(userwin ,com_choice,user_choice)=>{
    if(userwin){ 
        userscore++;
        user_scorepara.innerText=userscore;
    let heading_result=document.querySelector('#result');
    heading_result.innerText=`you won your ${user_choice} beats computer ${com_choice}`;
    heading_result.style.backgroundColor="green";
    heading_result.style.color="white";
}
       

    else { 
        comp_score++;
        comp_scorepara.innerText=comp_score;
    
    let heading_result=document.querySelector('#result');
    heading_result.innerText=`you lost computer ${com_choice} beats your ${user_choice}`;
    heading_result.style.backgroundColor="red";
    heading_result.style.color="white";
    }
}



const comparing=(com_choice,user_choice)=>{
    
    if(com_choice===user_choice){
        console.log("match has drawn");
        let heading_result=document.querySelector('#result');
        heading_result.innerText="Match drawn";
        heading_result.style.backgroundColor="blue";
        heading_result.style.color="white";
        

    }else {
        let userwin=true;
        if(user_choice==="rock"){
        userwin=com_choice==="paper" ? false :true;
        }
        else if(user_choice==="paper"){
        userwin=com_choice==="scissor" ? false :true;

        }else if(user_choice==="scissor"){
        userwin=com_choice==="rock" ? false:true;

                    }
                    showwinner(userwin,com_choice,user_choice);
    }
    

}
const gaming=(user_choice)=>{
    console.log("user choice is "+user_choice);
    const  com_choice=comp();
    console.log("computer choice is "+com_choice);
    const winner=comparing(com_choice,user_choice);
    

}



const choices=document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        gaming(user_choice);
    })
})

