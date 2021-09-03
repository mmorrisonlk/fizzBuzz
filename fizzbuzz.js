var fizzBuzz = function(n) {
    let i = []
    for (let s = 1; s < n; s++) {
        let evaluation
        if (s % 3 === 0 && s % 5 === 0) {
            evaluation = "Fizz Buzz"
            i.push(evaluation)
        }
        else if(s % 5 === 0 ) {
            evaluation = "Buzz"
            i.push(evaluation)
        }
        else if (s % 3 === 0) {
            evaluation = "Fizz"
            i.push(evaluation)
        }
        else {
            i.push(s)
        }
    }
    console.log(i)
};

fizzBuzz(20)