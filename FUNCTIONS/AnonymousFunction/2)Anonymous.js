//!  Anonymous Function

//!syntax :-
        //  let/var/const  identifier = function(parameter)
        //       {
        //        statements...
        //        return value
        //       }
        //     identifier(values);
        //      console.log(identifier)


//!
  let demo=function(a){
    return "this is a funtion with parameters and also return type"
  }
  console.log(demo(3));
//!

let demo1=function(a){
    console.log("this is a funtion with parameters and also return type");
  }
  let y=demo1(5);
  console.log(y);