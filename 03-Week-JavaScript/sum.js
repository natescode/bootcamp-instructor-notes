function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n-1)
}

console.log(sum(9));

function sum2(n){
    return .5*n^2+.5*n;
}

const sumLambda = n => .5*n^2+.5*n;
