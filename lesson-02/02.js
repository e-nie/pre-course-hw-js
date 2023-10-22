function factorial(n) {
    // debugger
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1); //4.3.2.1
       //5,4,3,2,1;
    }
}

console.log(factorial(5));

// 1 ) return 5 * factorial(5 - 1); 5 остается//120
// 2 ) return 4 * factorial(4 - 1); 4 остается//24
// 3 ) return 3 * factorial(3 - 1); 3 остается//6
// 4 ) return 2 * factorial(2 - 1); 2 остается //2
// 5 ) return 1 * factorial(1 - 1); 1 остается

//
// const [state,setState] = useState([1,2,3,4])
//
// const quarterFunc = (number) => number ** 2
//
// const handler = (number) => {
//     setState(quarterFunc(number))
// }
