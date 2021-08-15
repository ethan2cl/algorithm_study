/**
 * 因为丑数只包含质因数 2, 3, 5，所以对于下个丑数来说，一定是前面某个丑数乘 2、乘 3 或者乘 5 所得。
 * 准备三个指针 ptr2、ptr3、ptr5，它们指向的数只能乘 2、3 和 5。
 * 在循环过程中，每次选取 2 * res[ptr2]、3 * res[ptr3] 和 5 * res[ptr5]这三个数中结果最小的数，并且将对应的指针向前移动。
 * 有效循环是 n 次，当循环结束后，res 数组中就按从小到大的顺序保存了丑数。
 */
function nthUglyNumber(n: number): number {
  const res = new Array(n)
  res[0] = 1
  let [ptr2, ptr3, ptr5] = [0, 0, 0]
  // 说明前ptr2个丑数*2也不可能产生比i更大的丑数了
  // 所以移动ptr2
  for (let i = 1; i < n; i++) {
    res[i] = Math.min(res[ptr2] * 2,res[ptr3] * 3, res[ptr5] * 5)
    if (res[i] === res[ptr2] * 2) {
      ++ptr2;
    }
    if (res[i] === res[ptr3] * 3) {
      ++ptr3;
    }
    if (res[i] === res[ptr5] * 5) {
      ++ptr5;
    }
  }
  return res[n - 1];
};