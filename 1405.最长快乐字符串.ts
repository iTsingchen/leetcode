/*
 * @lc app=leetcode.cn id=1405 lang=typescript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
function longestDiverseString(a: number, b: number, c: number): string {
  // if (a === 0 && b === 0 && c === 0) return "";

  // let min = Math.min(a, b, c);
  // let max = Math.max(a, b, c);
  // let mid = a + b + c - min - max;

  // const counts = [a, b, c];
  // const charts = ["a", "b", "c"];

  // const min_index = counts.indexOf(min);
  // const mid_index =
  //   min !== mid ? counts.indexOf(mid) : counts.indexOf(mid, min_index + 1);
  // const max_index =
  //   mid !== max ? counts.indexOf(max) : counts.indexOf(max, mid_index + 1);

  // const min_chart = charts[min_index];
  // const mid_chart = charts[mid_index];
  // const max_chart = charts[max_index];

  // const arr3: string[] = [];
  // while (min !== 0) {
  //   arr3.push(max_chart, mid_chart, min_chart);
  //   min -= 1;
  //   mid -= 1;
  //   max -= 1;
  // }

  // const arr2: string[] = [];
  // while (mid !== 0) {
  //   arr2.push(max_chart, mid_chart);
  //   mid -= 1;
  //   max -= 1;
  // }

  // let idx = arr3.length - 1;
  // while (max >= 3 && idx >= 2) {
  //   arr3.splice(idx, 0, max_chart.repeat(2));
  //   arr3.splice(idx - 1, 0, max_chart);

  //   max -= 3;
  //   idx -= 3;
  // }

  // if (idx !== -1) {
  //   if (max === 1) {
  //     arr3.splice(2, 0, max_chart);
  //   } else if (max === 2) {
  //     arr3.splice(2, 0, max_chart.repeat(max));
  //   }

  //   return arr3.join("") + arr2.join(""); // max 已经消耗完毕
  // }

  // idx = arr2.length - 1;
  // while (max > 0 && idx >= 1) {
  //   arr2.splice(idx, 0, max_chart);

  //   max -= 1;
  //   idx -= 2;
  // }

  // if (max > 0 && idx === -1) {
  //   arr2.push(max_chart.repeat(Math.min(max, 2)));
  // }

  // return arr3.join("") + arr2.join("");

  /*****贪心算法*****/
  const tuples: Array<[number, string]> = [
    [a, "a"],
    [b, "b"],
    [c, "c"],
  ];

  const res: string[] = [];

  while (true) {
    tuples.sort(([c1], [c2]) => c2 - c1);

    let needBreak = true;

    for (let i = 0; i < tuples.length; i++) {
      const [count, chart] = tuples[i];

      if (count === 0) {
        break;
      }

      if (res.at(-1) === chart && res.at(-2) === chart) {
        continue;
      }

      res.push(chart);
      tuples[i][0] -= 1;
      needBreak = false;
      break;
    }

    if (needBreak) {
      break;
    }
  }

  return res.join("");
}
// @lc code=end
