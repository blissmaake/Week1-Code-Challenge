
// call readline
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
// Requesting Marks from the users
input.question("Enter students marks: ", function (mark){ 
    let marks = parseInt(mark, 10);

 // Checking the condition for the providing the 
  // grade to student based on percentage
    if (isNaN(marks) || marks > 100){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
    }else{
        if (marks > 79) {
            process.stdout.write("A\n");    
        } else if (marks > 60) {
            process.stdout.write("B\n");    
        } else if(marks > 49) {
            process.stdout.write("C\n");
        } else if(marks > 40) {
            process.stdout.write("D\n");
        }else{
            process.stdout.write("E\n");
        }
    } 
    input.close();
});