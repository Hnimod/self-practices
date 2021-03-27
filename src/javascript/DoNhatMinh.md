```
function balanced(string) {
  const isPadlindrome = string === string.split('').reverse().join('');
  if (isPadlindrome) return true;

  const middleIndex = Math.floor(string.length / 2) - 1;
  const leftString = string.substring(0, middleIndex + 1);
  let rightString = string.substring(middleIndex + 2, string.length);

  if (string.length % 2 === 0) {
    rightString = string.substring(middleIndex + 1, string.length);
  }

  const WEIGHT = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let leftWeight = 0;
  for (const char of leftString) {
    leftWeight += WEIGHT[char];
  }

  let rightWeight = leftWeight;
  for (const char of rightString) {
    rightWeight -= WEIGHT[char];
    if (rightWeight < 0) return false;
  }

  if (rightWeight !== 0) return false;
  return true;
}
```
