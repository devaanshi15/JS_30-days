//1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

            //Primitive datatypes - number, string, boolean, undefined,null, symbol, bigint
            //Non-Primitive Types  - object, array, function, date, regexp, map, set



            let num = 42; // Number
            console.log(`Value: ${num}, Type: ${typeof num}`);
            
            let str = "Hello, world!"; // String
            console.log(`Value: ${str}, Type: ${typeof str}`);
            
            let isTrue = true; // Boolean
            console.log(`Value: ${isTrue}, Type: ${typeof isTrue}`);
            
            let unassigned; // Undefined
            console.log(`Value: ${unassigned}, Type: ${typeof unassigned}`);
            
            let empty = null; // Null
            console.log(`Value: ${empty}, Type: ${typeof empty}`);
            
            let sym = Symbol('unique'); // Symbol
            console.log(`Value: ${sym.toString()}, Type: ${typeof sym}`);
            
            let bigInt = BigIn