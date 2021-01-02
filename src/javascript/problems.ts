////////////////////////////////////////////////////////////////////
// const word = 'dda' | 'sad';
// const map = ['dad', 'add', 'sad', 'bad', 'badminton', 'hand', 'ass'];
// 'dda' => ['add', 'dad']
export const wordMatches = (word: string, map: string[]): string[] => {
  let result = [];
  const matchWord = word.split('').sort().join('');
  console.log(matchWord);
  for (let str of map) {
    if (str.length === word.length) {
      if (str.split('').sort().join('') === matchWord) {
        result.push(str);
      }
    }
  }
  return result;
};

////////////////////////////////////////////////////////////////////
export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

////////////////////////////////////////////////////////////////////
export const reverseInt = (int: number): number => {
  let k = 1;
  if (int < 0) k = -1;
  const result = Number(String(Math.abs(int)).split('').reverse().join(''));
  return result * k;
};

////////////////////////////////////////////////////////////////////
export const capitalizeLetters = (str: string): string => {
  const result = [];
  for (let word of str.split(' ')) {
    const wordResult = word.split('');
    wordResult[0] = wordResult[0].toUpperCase();
    result.push(wordResult.join(''));
  }
  return result.join(' ');
};

////////////////////////////////////////////////////////////////////
// 'javascript' => 'a'
export const maxCharacter = (str: string): string => {
  const map: any = {};
  let max: number = 0;
  let strArr = str.split('');
  if (strArr.length === 0) return '';

  for (const char of strArr) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
      if (map[char] > max) {
        max = map[char];
      }
    }
  }

  for (const key of Object.keys(map)) {
    if (map[key] === max) return key;
  }

  return '';
};

////////////////////////////////////////////////////////////////////
export const fizzBuzz = (): void => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

////////////////////////////////////////////////////////////////////
// 'Hello there, my name is Minh' => ['Hello', 'there']
export const logestWord = (sen: string): string[] => {
  let result: string[] = [];
  let max: number = 0;
  const wordCount: { [key: string]: number } = {};

  for (const word of sen.replace(',', '').split(' ')) {
    wordCount[word] = word.length;
    if (word.length > max) max = word.length;
  }

  console.log(wordCount);
  for (const key of Object.keys(wordCount)) {
    if (wordCount[key] === max) {
      result.push(key);
    }
  }

  return result;
};

////////////////////////////////////////////////////////////////////
// ([1,2,3,4,5,6,7], 3) => [[1,2,3],[4,5,6], [7]]
export const chunkArray = (arr: number[], len: number): any[] => {
  let result: any[] = [];
  for (let i = 0; i * len < arr.length; i++) {
    result.push(arr.slice(i * len, i * len + len));
  }
  return result;
};

////////////////////////////////////////////////////////////////////
// [[1,2,3],[4,5,6],[7]] => [1,2,3,4,5,6,7]
export const flatternArray = (arr: any[]): number[] => {
  return arr.reduce((accumulator: number[], currentValue: number[]) =>
    accumulator.concat(currentValue)
  );
};

////////////////////////////////////////////////////////////////////
// 'ABAZDC', 'BACBAD' => 'ABAD'
// 'AGGTAB', 'GXTXAYB' => 'GTAB'
// 'aaaa', 'aa' => 'aa'
export const longestSequence = (str1: string, str2: string): string => {
  const arr1 = str1.split('');
  let map: { [key: string]: number } = {};
  let max: number = 0;

  for (let i = 0; i < arr1.length; i++) {
    let sequence: string[] = [];
    let arr2 = str2.split('');
    for (let j = i; j < arr1.length; j++) {
      if (arr2.length === 0) break;

      if (arr2.indexOf(arr1[j]) !== -1) {
        sequence.push(arr1[j]);
        arr2 = arr2.slice(arr2.indexOf(arr1[j]) + 1);
      }
    }
    map[sequence.join('')] = sequence.length;
    if (sequence.length > max) max = sequence.length;
  }

  console.log(map);
  for (const key of Object.keys(map)) {
    if (map[key] === max) return key;
  }

  return 'error';
};

////////////////////////////////////////////////////////////////////
// 'c', 'occurent' => 2
export const occurent = (char: string, str: string): number => {
  let strArr = str.split('');
  strArr = strArr.filter((el) => el === char);
  return strArr.length;
};

////////////////////////////////////////////////////////////////////
// [1,2,3,3,4,5,4] => [3,4]
export const findDuplicate = (arr: number[]): number[] => {
  let result: number[] = [];
  const map: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

////////////////////////////////////////////////////////////////////
// 12258 => ['abbeh', 'aveh', 'abyh', 'lbeh', 'lyh']
// [1,2,2,5,8] => ['1:2:2:5:8', '12:2:5:8', '1:22:5:8', '1:2:25:8', '12:25:8']
const wordMap: { [key: string]: number } = {
  a: 1,
  b: 2,
  e: 5,
  h: 8,
  l: 12,
  v: 22,
  y: 25,
};
const wordMapHelper = (arr: string[]): string => {
  const tempArr: string[] = [];
  for (const str of arr) {
    for (const key of Object.keys(wordMap)) {
      if (wordMap[key] === Number(str)) tempArr.push(key);
    }
  }
  return tempArr.join('');
};

export const alphabetOrderTranslate = (num: number): string[] => {
  let result: string[] = [];
  let arrNum: any[] = [];
  let pushArr: any[];

  arrNum.push(String(num).split(''));
  result.push(arrNum[0].join(':'));

  for (let i = 1; i < String(num).split('').length / 2; i++) {
    const tempArr = [];
    for (const arr of arrNum) {
      for (let j = 0; j < arr.length; j++) {
        if (Number(arr[j] + arr[j + 1]) < 26) {
          pushArr = arr.slice();
          pushArr.splice(j, 2, arr[j] + arr[j + 1]);
          tempArr.push(pushArr);
        }
      }
    }
    arrNum = tempArr.slice();
    arrNum.forEach((arrStr) => {
      if (!result.includes(arrStr.join(':'))) {
        result.push(arrStr.join(':'));
      }
    });
  }

  const translate: any[] = [];
  const final: string[] = [];
  for (const str of result) {
    translate.push(str.split(':'));
  }
  for (let i = 0; i < translate.length; i++) {
    final.push(wordMapHelper(translate[i]));
  }

  return final;
};
