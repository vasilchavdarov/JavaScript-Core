function getFibonator() {
    let first = 0;
    let second = 1;
    let temp = 0;
    return function () {
        temp = first + second;
        first = second;
        second = temp;

        return first
    }
}

let fib = getFibonator();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
fib();
