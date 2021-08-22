/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 * 
 * 已经看不懂了。后面回溯这块太绕了，解决不了，需要加强练习
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  // 对应关系
  const letter: string[]= [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ]
  let left: string[] = [], result: string[] = []
  // 根据按键找到对应关系
  for(let i=0;i<digits.length;i++){
    left.push(letter[parseInt(digits[i])])
  }

  const add = (left: string[], sum: string) => { 
    let res = sum
    if (left.length) {
      let first: string = left[0]
      for (let i = 0; i < first.length; i++) {
        res += first[i]
        let tempLeft = left.shift()
        add(left, res)
        // 开始回溯
        tempLeft && left.unshift(tempLeft)
        res = res.slice(0, res.length - 1)
      }
    } else {
      if (sum.length === digits.length) {
        result.push(sum)
      }
    }
  }
  add(left, '')
  return result
};
// @lc code=end

