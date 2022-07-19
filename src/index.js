module.exports = function reverse (n) {
  const nString = n.toString();
  // console.log(nString);
  const splitString = nString.split('');
  // console.log(splitString);
  const revString = splitString.reverse();
  // console.log(revString);
  if (nString[0] != '-') {
    return revString.join('');
  } else {
    const absRevString = revString.pop();
    return revString.join('');
  }
}
// console.log(module.exports(-251))