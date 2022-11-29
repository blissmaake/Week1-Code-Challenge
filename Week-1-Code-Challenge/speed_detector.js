// Call readline
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
// Prompts User to Input Speed.
input.question("Speed of the car: ", function (speed){ 
    // Input marks in base 10 Format
    let speed_of_car = parseInt(speed, 10);
    //Conditional Statements to request and output values within certain
    //conditions
    if (isNaN(speed)){
        process.stdout.write("Speed must be a numerical value\n");
        process.exit(1)
    }else{
       if (speed_of_car < 70){
        process.stdout.write("Ok!\n");
       } else{
        const demerit_points = ((speed_of_car - 70) / 5);
        Math.ceil(demerit_points);
        process.stdout.write(`Points: ${demerit_points}\n`);
            if (demerit_points >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                process.exit(0);                
            }
       }
    }
    input.close();
});