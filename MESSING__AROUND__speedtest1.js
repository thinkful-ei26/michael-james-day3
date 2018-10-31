'use strict';
var Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
/*add test func's to suite here */
suite.add('speed1Check', speedTest);
suite.add('speed2Check', speedTest2);
suite.add('speed3Check', speedTest3);
suite.add('speed4Check', speedTest4);
//suite.add("Simple", function(){
  //  return console.log("Hello World");
//});

//Benchmark.prototype.times.elapsed
//suite's keynames are: 0,1,name,options,length,events,running.
suite.on('cycle', function(event){
  console.log(String(event.target)+ " Time: "+ event.target.times.elapsed + " seconds");
});
suite.on('complete', function(){
  console.log("Fastest is: " + this.filter('fastest').map("name"));
});
suite.run({"async": true});
/* test functions below this line */
function speedTest(sizeOfTestArray){
    let k = sizeOfTestArray;
    let myTestingArray = [];
    for(let i = 0; i< k; i++){
    myTestingArray.push(i);
  }
  return myTestingArray;
}
function speedTest2(sizeOfTest2Array){
  const pagesArray = [...Array(sizeOfTest2Array)].map((page, i) => i + 1); 
  return pagesArray;
}
function speedTest3(sizeOfTest3Array){
  let Test3Array;
  for(let i = 0; i< sizeOfTest3Array; i++){
    Test3Array.push(i);
  }
  return Test3Array;
}
function speedTest4(sizeOfTest4Array){
  let test4Array;
  for(const key in sizeOfTest4Array){
    test4Array.push(key);

  }
  return test4Array;
}
