// ARRAYS ---------------------------------------------
// eslint-disable-next-line
function hourglassSum(arr) {
  let max =
    arr[0][0] +
    arr[0][1] +
    arr[0][2] +
    arr[1][1] +
    arr[2][0] +
    arr[2][1] +
    arr[2][2];

  for (let i = 0; i < 4; i++) {
    let sum;
    for (let j = 0; j < 4; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (sum > max) max = sum;
    }
  }

  return max;
}
// eslint-disable-next-line
function rotateLeft(d, arr) {
  let realRotate = d;
  if (d > arr.length) realRotate = d % arr.length;
  const temp = arr.slice(0, realRotate);
  arr.splice(0, realRotate);
  return arr.concat(temp);
}
// eslint-disable-next-line
function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - i - 1 > 2) {
      console.log('Too chaotic');
      return;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) bribes++;
    }
  }
  console.log(bribes);
}
// eslint-disable-next-line
function longestSubarray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let dic = new Set();
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      dic.add(arr[j]);
      console.log(dic, count);
      if (Array.from(dic).length > 2) {
        if (j - i > max) max = j - i;
        break;
      }

      if (!arr[j + 1]) {
        if (j - i + 1 > max) max = j - i + 1;
      }

      if (arr[j] === arr[j + 1]) {
        count++;
      } else {
        count = 0;
      }

      if (count > 1) {
        if (j - i + 1 > max) max = j - i + 1;
        break;
      }
    }
  }
  return max;
}
// eslint-disable-next-line
function filledOrders(order, k) {
  let total = 0;
  let count = 0;
  const ordersLength = order.length;
  const sortedOrders = order.sort();

  for (let i = 0; i < ordersLength; i++) {
    if (total + sortedOrders[i] <= k) {
      if (total <= k && i === ordersLength - 1) return ordersLength;

      total += sortedOrders[i];
      count++;
    } else {
      return count;
    }
  }
}

// STRING ---------------------------------------------
// eslint-disable-next-line
function isPalindrome(s) {
  return s.split('').reverse().join('') === s;
}
// eslint-disable-next-line
function superReducedString(s) {
  let rerun = true;
  let sArr = s.split('');

  while (rerun) {
    for (let i = 0; i < sArr.length; i++) {
      rerun = false;
      if (sArr[i] === sArr[i + 1]) {
        sArr.splice(i, 2);
        if (sArr.length === 0) return 'Empty String';
        rerun = true;
        break;
      }
    }
  }

  return sArr.join('');
}
// eslint-disable-next-line
function camelcase(s) {
  let count = 0;
  const lower = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === lower[i].toUpperCase()) count++;
  }

  return count + 1;
}
// eslint-disable-next-line
function minimumNumber(n, password) {
  const numbers = '0123456789';
  const lower_case = 'abcdefghijklmnopqrstuvwxyz';
  const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const special_characters = '!@#$%^&*()-+';
  const result = [0, 0, 0, 0];

  for (const letter of password) {
    if (numbers.includes(letter)) {
      result[0]++;
    } else if (lower_case.includes(letter)) {
      result[1]++;
    } else if (upper_case.includes(letter)) {
      result[2]++;
    } else if (special_characters.includes(letter)) {
      result[3]++;
    }
  }

  const require = result.filter((el) => el === 0).length;
  if (n + require < 6) return 6 - n;

  return require;
}
// eslint-disable-next-line
function alternate(s) {
  let chars = new Set();
  for (const char of s) {
    chars.add(char);
  }
  chars = Array.from(chars);
  if (chars.length === 0) return 0;

  let max = 0;
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      const temp = s
        .split('')
        .filter((el) => el === chars[i] || el === chars[j]);
      console.log(temp);
      let valid = true;
      for (let k = 0; k < temp.length - 1; k++) {
        if (temp[k] === temp[k + 1]) {
          valid = false;
          break;
        }
      }
      if (valid) {
        if (temp.length > max) max = temp.length;
      }
    }
  }

  return max;
}
// eslint-disable-next-line
function caesarCipher(s, k) {
  let res = [];
  k = k % 26;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      res.push(s[i]);
      continue;
    }

    if (charCode <= 90) {
      if (charCode + k > 90) {
        res.push(String.fromCharCode(64 + (charCode + k - 90)));
      } else {
        res.push(String.fromCharCode(charCode + k));
      }
    } else {
      if (charCode + k > 122) {
        res.push(String.fromCharCode(96 + (charCode + k - 122)));
      } else {
        res.push(String.fromCharCode(charCode + k));
      }
    }
  }

  return res.join('');
}
// eslint-disable-next-line
function marsExploration(s) {
  const mess = 'SOS'.repeat(s.length / 3);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== mess[i]) count++;
  }
  return count;
}
// eslint-disable-next-line
function hackerrankInString(s) {
  const temp = 'hackerrank'.split('').reverse();
  for (const char of s) {
    if (char === temp[temp.length - 1]) temp.pop();
  }
  if (temp.length === 0) return 'YES';
  return 'NO';
}
// eslint-disable-next-line
function pangrams(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  s = s.toLowerCase();
  for (const char of s) {
    if (alphabet.includes(char))
      alphabet = alphabet.filter((el) => el !== char);
  }
  if (alphabet.length === 0) return 'pangram';
  return 'not pangram';
}
// eslint-disable-next-line
function weightedUniformStrings(s, queries) {
  let weight = [];
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    weight.push((s.charCodeAt(i) - 96) * count);
    if (s[i] !== s[i + 1]) {
      count = 1;
    } else {
      count++;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    if (weight.includes(queries[i])) {
      queries.splice(i, 1, 'Yes');
    } else queries.splice(i, 1, 'No');
  }

  return queries;
}
// eslint-disable-next-line
function separateNumbers(s) {
  if (s.startsWith('0')) {
    console.log('NO');
    return;
  }
  if (s.length === 1) {
    console.log('NO');
    return;
  }

  let cases = 1; //Math.floor(s.length / 2);
  let rerun = true;

  while (rerun) {
    let res = [];
    let i = 0;
    for (i; i <= s.length; ) {
      const curr = s.slice(i, i + cases);
      let next = s.slice(i + cases, i + cases + cases);
      if (!next && res.length !== 0) {
        console.log(`YES ${res[0]}`);
        return;
      }

      if (String(Number(curr) + 1).length > next.length) {
        cases++;
        next = s.slice(i + cases - 1, i + cases + cases - 1);
        if (String(Number(curr) + 1) === next) {
          res.push(curr);
          i = i + cases - 1;
        } else break;
      } else {
        if (Number(curr) + 1 === Number(next)) {
          res.push(curr);
          console.log(res, i, cases);
          i = i + cases;
        } else {
          cases++;
          break;
        }
      }
    }

    if (cases > Math.floor(s.length / 2)) rerun = false;
  }

  console.log('NO');
}

// SORTING --------------------------------------------
// eslint-disable-next-line
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIndex]) minIndex = j;
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}
// eslint-disable-next-line
function inserttionSort(arr) {
  let key, j;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}
// eslint-disable-next-line
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// eslint-disable-next-line
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}
// eslint-disable-next-line
function mergeSort(array) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}
// eslint-disable-next-line
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);
  const pivot = arr[start];
  let pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};
// eslint-disable-next-line
const quickSort = (arr, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);
  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};
// eslint-disable-next-line
function heapSort(array) {
  let size = array.length;
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(array, size, i);
  }
  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0);
  }
  return array;
}
// eslint-disable-next-line
function heapify(array, size, i) {
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && array[left] > array[max]) max = left;
  if (right < size && array[right] > array[max]) max = right;

  if (max !== i) {
    let temp = array[i];
    array[i] = array[max];
    array[max] = temp;

    heapify(array, size, max);
  }
}

// console.log(heapSort([2, 6, 5, 3, 8, 7, 1, 0]));
// function bucketSort() {}
// function countingSort() {}
// function radixSort() {}
// function shellSort() {}

// SEARCHING ------------------------------------------
// eslint-disable-next-line
function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
// eslint-disable-next-line
function depthFirstSearch(start, target) {
  console.log('Visiting Node ' + start.value);
  if (start.value === target) {
    console.log("Found the node we're looking for!");
    return start;
  }

  for (let i = 0; i < start.children.length; i++) {
    const result = depthFirstSearch(start.children[i], target);
    if (result != null) {
      return result;
    }
  }

  console.log(
    'Went through all children of ' +
      start.value +
      ", returning to it's parent."
  );
  return null;
}

// function breadthFirstSearch() {}
// function levelOrderSearch() {}

// LINKED LIST ----------------------------------------
// eslint-disable-next-line
function printLinkedList(head) {
  if (!head) return;
  let node = head;

  while (node) {
    console.log(node.data);
    node = node.next;
  }
}
// eslint-disable-next-line
function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data, null);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  return head;
}
// eslint-disable-next-line
function insertNodeAtHead(head, data) {
  if (!head) {
    head = new SinglyLinkedListNode(data);
    return head;
  } else {
    const newHead = new SinglyLinkedListNode(data);
    newHead.next = head;
    return newHead;
  }
}
// eslint-disable-next-line
function insertNodeAtPosition(head, data, position) {
  if (!head) {
    head = new SinglyLinkedListNode(data);
    return head;
  }

  let currNode = head;
  let currPosition = 0;
  let prevNode;
  const newNode = new SinglyLinkedListNode(data);

  while (currNode) {
    prevNode = currNode;
    currNode = currNode.next;
    currPosition++;

    if (currPosition === position) {
      prevNode.next = newNode;
      newNode.next = currNode;
      return head;
    }
  }

  if (currPosition < position) {
    prevNode.next = newNode;
  }

  return head;
}
// eslint-disable-next-line
function deleteNode(head, position) {
  let currPosition = 0;
  let currNode = head;
  let prevNode;

  if (!head) return null;
  if (position === 0) {
    if (head.next) return head.next;
    return null;
  }

  while (currNode) {
    if (currPosition === position) {
      currNode = currNode.next;
      prevNode.next = currNode;
      return head;
    }

    prevNode = currNode;
    currNode = currNode.next;
    currPosition++;
  }

  return head;
}
// eslint-disable-next-line
function reversePrint(head) {
  const result = [];
  let node = head;

  if (!head) return;

  while (node) {
    result.push(node.data);
    node = node.next;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}
// eslint-disable-next-line
function reverse(head) {
  const refArr = [];
  let node = head;
  while (node) {
    refArr.push(node);
    node = node.next;
  }

  if (refArr.length === 0) return;
  if (refArr.length === 1) return refArr[0];

  for (let i = refArr.length - 1; i > 0; i--) {
    refArr[i].next = refArr[i - 1];
    refArr[i - 1].next = null;
  }
  return refArr[refArr.length - 1];
}
// eslint-disable-next-line
function compareLists(llist1, llist2) {
  let node1 = llist1;
  let node2 = llist2;

  if ((!node1 && node2) || (node1 && !node2)) return 0;
  while (node1 && node2) {
    if (node1.data !== node2.data) return 0;
    node1 = node1.next;
    node2 = node2.next;
  }
  if (!node1 && !node2) return 1;
  return 0;
}
// eslint-disable-next-line
function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let node1 = head1;
  let node2 = head2;
  let dummyNode = new SinglyLinkedListNode(-1);
  let tail = dummyNode;

  while (node1 || node2) {
    if (node1 && !node2) {
      tail.next = node1;
      tail = node1;
      node1 = node1.next;
    } else if (!node1 && node2) {
      tail.next = node2;
      tail = node2;
      node2 = node2.next;
    } else {
      if (node1.data <= node2.data) {
        tail.next = node1;
        tail = node1;
        node1 = node1.next;
      } else {
        tail.next = node2;
        tail = node2;
        node2 = node2.next;
      }
    }
  }
  return dummyNode.next;
}
// eslint-disable-next-line
function getNode(head, positionFromTail) {
  let dataArr = [];
  let node = head;

  while (node) {
    dataArr.push(node.data);
    node = node.next;
  }

  return dataArr.reverse()[positionFromTail];
}
// eslint-disable-next-line
function removeDuplicates(head) {
  let node = head;
  const dataArr = [];
  const dataSet = new Set();
  const dummyNode = new SinglyLinkedListNode(-1);
  let tail = dummyNode;

  while (node) {
    dataArr.push(node.data);
    node = node.next;
  }

  for (const data of dataArr) {
    dataSet.add(data);
  }

  for (const data of dataSet) {
    const newNode = new SinglyLinkedListNode(data);
    tail.next = newNode;
    tail = newNode;
  }

  return dummyNode.next;
}
// eslint-disable-next-line
function findMergeNode(headA, headB) {
  let nodeA = headA;

  while (nodeA) {
    let nodeB = headB;
    while (nodeB) {
      if (nodeA === nodeB) return nodeA.data;
      nodeB = nodeB.next;
    }
    nodeA = nodeA.next;
  }

  return null;
}

// ALGORITHMS -----------------------------------------
// eslint-disable-next-line
function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
        sum2 += arr[i][arr.length - 1 - i];
      }
    }
  }

  return Math.abs(sum1 - sum2);
}
// eslint-disable-next-line
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (const val of arr) {
    if (val > 0) {
      positive++;
    } else if (val === 0) {
      zero++;
    } else negative++;
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
// eslint-disable-next-line
function staircase(n) {
  let space = ' ';
  let step = '#';

  for (let i = 1; i <= n; i++) {
    console.log(`${space.repeat(n - i)}${step.repeat(i)}`);
  }
}
// eslint-disable-next-line
function birthdayCakeCandles(candles) {
  let count = 0;
  let max = 0;
  for (const candle of candles) {
    if (candle > max) {
      count = 0;
      max = candle;
    }
    if (candle === max) {
      count++;
    }
  }
  return count;
}
// eslint-disable-next-line
function timeConversion(s) {
  let hour = s.split(':')[0];
  const minute = s.split(':')[1];
  const second = s.split(':')[2].slice(0, 2);
  const surfix = s.split(':')[2].slice(2);

  if (surfix === 'AM') {
    if (hour === '12') hour = '00';
    return `${hour}:${minute}:${second}`;
  }

  if (Number(hour) < 12) hour = String(Number(hour) + 12);
  return `${hour}:${minute}:${second}`;
}
// eslint-disable-next-line
function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) continue;
    if (grades[i] % 5 > 2) grades[i] = grades[i] + 5 - (grades[i] % 5);
  }

  return grades;
}
// eslint-disable-next-line
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOranges = 0;

  for (const apple of apples) {
    const distance = a + apple;
    if (distance >= s && distance <= t) countApples++;
  }

  for (const orange of oranges) {
    const distance = b + orange;
    if (distance >= s && distance <= t) countOranges++;
  }

  console.log(countApples);
  console.log(countOranges);
}
// eslint-disable-next-line
function sockMerchant(n, ar) {
  let dic = {};
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    if (ar[i] in dic) {
      pairs++;
      delete dic[ar[i]];
    } else {
      dic[ar[i]] = 1;
    }
  }
  return pairs;
}
// eslint-disable-next-line
function countingValleys(steps, path) {
  let sea = 0;
  let valley = 0;
  path = path.split('');

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      sea++;
    } else {
      sea--;
    }

    if (sea === 0) {
      if (path[i] === 'U') {
        valley++;
      }
    }
  }

  return valley;
}
// eslint-disable-next-line
function jumpingOnClouds(c) {
  let jumps = 0;
  let index = 0;

  while (index < c.length - 1) {
    if (index + 2 > c.length || c[index + 2] === 1) {
      index = index + 1;
    } else index = index + 2;
    jumps++;
  }

  return jumps;
}
// eslint-disable-next-line
function repeatedString(s, n) {
  let count = 0;

  for (const letter of s) {
    if (letter === 'a') count++;
  }
  count = count * Math.floor(n / s.length);
  if (n % s.length !== 0) {
    let remainString = s.slice(0, n % s.length);
    for (const letter of remainString) {
      if (letter === 'a') count++;
    }
  }

  return count;
}
// eslint-disable-next-line
function simpleArraySum(ar) {
  let sum = 0;
  for (const val of ar) {
    sum += val;
  }
  return sum;
}
// eslint-disable-next-line
function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    if (x1 !== x2) {
      return 'NO';
    } else return 'YES';
  }
  if (v1 > v2 && x1 >= x2) return 'NO';
  if (v1 < v2 && x2 >= x1) return 'NO';

  let jumps = 1;
  while (x1 + v1 * jumps !== x2 + v2 * jumps) {
    if (v1 > v2) {
      if (x1 + v1 * (jumps + 1) > x2 + v2 * (jumps + 1)) return 'NO';
    } else {
      if (x1 + v1 * (jumps + 1) < x2 + v2 * (jumps + 1)) return 'NO';
    }
    jumps++;
  }

  return 'YES';
}
// eslint-disable-next-line
function getTotalX(a, b) {
  const minA = Math.min(...a);
  const minB = Math.min(...b);
  let res = [];
  let multi = 1;

  while (minA * multi <= minB) {
    if (a.filter((el) => (minA * multi) % el !== 0).length === 0) {
      if (b.filter((el) => el % (minA * multi) !== 0).length === 0) {
        res.push(minA * multi);
      }
    }

    multi++;
  }
  console.log(res);
  return res.length;
}
// eslint-disable-next-line
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let res = [0, 0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      res[0]++;
      max = scores[i];
    } else if (scores[i] < min) {
      res[1]++;
      min = scores[i];
    }
  }

  return res;
}
// eslint-disable-next-line
function countTeams(skills, k, l, r) {
  const qualifiedPlayers = [];
  function calc(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res = res * i;
    }
    return res;
  }

  for (const skill of skills) {
    if (skill >= l && skill <= r) {
      qualifiedPlayers.push(skill);
    }
  }

  if (k > qualifiedPlayers.length) {
    return 0;
  } else {
    let teamCount = 0;
    for (let i = k; i <= qualifiedPlayers.length; i++) {
      const nC = calc(qualifiedPlayers.length);
      const rC = calc(i);
      const nrC = calc(qualifiedPlayers.length - i);
      teamCount += nC / (rC * nrC);
    }
    return teamCount;
  }
}
// eslint-disable-next-line
function carParkingRoof(cars, k) {
  const max = Math.max(...cars);
  let min = max;
  for (let i = 1; i <= max; i++) {
    if (!cars.includes(i)) continue;
    let count = 0;
    for (let j = i; j <= max; j++) {
      if (cars.includes(j)) count++;
      if (count === k) {
        if (j - i + 1 < min) min = j - i + 1;
        break;
      }
    }
  }
  return min;
}
