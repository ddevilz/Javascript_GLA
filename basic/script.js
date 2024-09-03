{
  function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  console.log(reverseString("hello"));
}
{
  function findLargestNumber(arr) {
    return Math.max(...arr);
  }

  console.log(findLargestNumber([1, 5, 3, 9, 2]));
}
{
  function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  console.log(isPalindrome("madam"));
  console.log(isPalindrome("hello"));
}
{
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  console.log(factorial(5));
}
{
  function fibonacci(n) {
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence;
  }

  console.log(fibonacci(7));
}
{
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  console.log(binarySearch([1, 3, 5, 7, 9], 7));
  console.log(binarySearch([1, 3, 5, 7, 9], 4));
}
{
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
}
{
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}

{
  function areAnagrams(str1, str2) {
    const normalize = (str) => str.toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
  }

  console.log(areAnagrams("listen", "silent"));
  console.log(areAnagrams("hello", "world"));
}
{
  function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  }

  console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
{
  function areAnagrams(str1, str2) {
    let lowerStr1 = "";
    let lowerStr2 = "";

    for (let i = 0; i < str1.length; i++) {
      lowerStr1 +=
        str1[i] >= "A" && str1[i] <= "Z"
          ? String.fromCharCode(str1.charCodeAt(i) + 32)
          : str1[i];
    }

    for (let i = 0; i < str2.length; i++) {
      lowerStr2 +=
        str2[i] >= "A" && str2[i] <= "Z"
          ? String.fromCharCode(str2.charCodeAt(i) + 32)
          : str2[i];
    }

    if (lowerStr1.length !== lowerStr2.length) {
      return false;
    }

    let charCount = {};
    for (let i = 0; i < lowerStr1.length; i++) {
      let char = lowerStr1[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    for (let i = 0; i < lowerStr2.length; i++) {
      let char = lowerStr2[i];
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }

    return true;
  }

  console.log(areAnagrams("listen", "silent"));
  console.log(areAnagrams("hello", "world"));
}
{
  function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
