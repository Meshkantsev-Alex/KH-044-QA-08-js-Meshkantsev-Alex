//Create your own example with increment/decrement, 
//count it manually and then run program and verify your value. 
//Example has to contain more then 5 increment operation, more then 5 decrement operations.

//let firstName = Alex;

for (let i=0; i<5; i++) {
    
    console.log('Hello, %s. You have called me %d times.', 'Alex', i+1);
  }

  console.log('')

for (let i=5; i>0; i--) {
    if (i>1){
    console.log('Hello, %s. You have %d days left.', 'Alex', i);
    }
    else 
    console.log('Hello, %s. You have one day left.', 'Alex');
  }