function fibonacci(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  return fibSequence;
}

const n = 10;
const fibonacciSequence = fibonacci(n);

console.log(fibonacciSequence);
