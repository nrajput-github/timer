//node timer1.js 10 3 5 15 9 

//process.stdout.write('\x07');

//'use strict';

for (let j = 2; j < process.argv.length; j++) {
    
  let duration = process.argv[j];
  if (duration < 0 || isNaN(duration)) {
    console.log("Inavlid number")
   return;
  }
  setTimeout(() => console.log('*') , duration*1000);
 // setTimeout(() => process.stdout.write('\x07') , duration*1000);
}
