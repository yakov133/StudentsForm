const prompt = require('prompt-sync')();
var myArgs = process.argv.slice(2);




function ruond(){
    return Math.floor( Math.random() * 13+1) * (Math.random()<0.5? 1: -1)
}

function playGame() {
    const firstName = myArgs.slice(0,1);
    const secondtName = myArgs.slice(1);
    console.log(`Hey there ${firstName} And ${secondtName} GOOD LUCK!!!\n`);
    
    let odd=0,even=0,randomNum;

    for(let i=1; i< 6; i++){
        randomNum=ruond();
        ( randomNum%2 )? ++odd : ++even
        
        console.log(`Round #${i} random number is ${randomNum}, ${randomNum%2 ? firstName:secondtName} scored!`);
        console.log(`Status: ${firstName} ${odd}, ${secondtName} ${even}\n`);
    }

    if((even == Math.floor(5/2)+1 ) || ( odd == Math.floor(5/2)+1 ) )
    {
        if(even>odd){
            console.log(`${secondtName} Wins!\n`);
        }
        else{
            console.log(`${firstName} Wins!\n`);
        }
        i = 5;
    }
    
}
playGame()