/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 * 
 * hit 可能是=> _it/h_t/hi_， 给这三处拼接26个小写字母
 * 查找字母在wordList是否出现过，出现代表可替换一个字母
 * 放入队列后继续同样的去处理下一个字母
 * 
 * 时间复杂度: O(26 * n^2)
 * 空间复杂度: O(n)
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList)
  const queue = []
  queue.push([ beginWord, 1 ])

  while (queue.length) {
    const [ word, level ] = queue.shift()
    // 终止条件，当出现和结果相同的单词时
    if (word === endWord) return level

    for (let i = 0; i < word.length; i++) {
      // 根据小写字母的ASCII码值 拼接出不同的单词
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
        // 比较单词列表中有无吹出现过
        if (wordSet.has(newWord)) {
          // 出现则加入队列
          queue.push([newWord, level + 1])
          // 从set中删除 防止重复读
          wordSet.delete(newWord)
        }
      }
    } 
  }

  return 0
};
// @lc code=end

