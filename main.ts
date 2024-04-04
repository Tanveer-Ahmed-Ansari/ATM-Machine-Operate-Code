import inquirer from "inquirer";

let myBlance = 10000; //Dollar
let myPin = 1234;


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin number",
            type: "number"
        }
    ]
)

if(pinAnswer.pin === myPin){
    console.log("correct pin code");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check blance","fast cash"]

            }
        ]
    );
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );
       if( amountAns.amount < myBlance){
        myBlance -= amountAns.amount
        console.log("your remeining blance is: "  + myBlance)  

        
        }else if (amountAns.amount > myBlance){
            console.log("insufficient balance")
        }
    }
   
    else if(operationAns.operation === "check blance"){
        console.log(myBlance)

        }
        if(operationAns.operation === "fast cash"){
            let fastAmount = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "chose your amout",
                        type: "list",
                        choices: ["500","5000","10000"]
                
                    }
                ]
            )
            myBlance -= fastAmount.amount;
        console.log("your remeining blance is: "  + myBlance)  

        }
       
        }
    
else{
    console.log("incorrect pin code")
}
