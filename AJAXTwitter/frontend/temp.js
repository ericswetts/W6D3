function factorial (n) {
  if (n===1) return [1];
  let facs = factorial(n-1);
  facs.push(facs[facs.length-1] * (n-1));
  return facs;
}
