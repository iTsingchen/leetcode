/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
class Stack<T> {
  private data: T[] = [];

  push(x: T) {
    this.data.push(x);
  }

  pop(): T {
    return this.data.pop();
  }

  top(): T {
    return this.data[this.data.length - 1];
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}

interface Scope {
  str: string;
  num: number;
}
function decodeString(s: string): string {
  const stack = new Stack<Scope>();

  const NUMBERS = "0123456789";
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";

  // let numberStr = "";
  // let letterStr = "";
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === "[") {
  //     stack.push({ num: +numberStr, str: letterStr });
  //     numberStr = "";
  //     letterStr = "";
  //   } else if (s[i] === "]") {
  //     const { num, str } = stack.pop();
  //     letterStr = str + letterStr.repeat(num);
  //   } else if (NUMBERS.includes(s[i])) {
  //     numberStr += s[i];
  //   } else {
  //     letterStr += s[i];
  //   }
  // }

  let pos = 0;
  let num = 0;
  let str = "";
  while (pos < s.length) {
    if (LETTERS.includes(s[pos])) {
      const regexp = /[a-z]+/;
      const [part] = s.slice(pos).match(regexp)!;

      str += part;
      pos += part.length;
    } else if (s[pos] === "[") {
      stack.push({ num, str });
      str = "";
      num = 0;
      pos += 1;
    } else if (s[pos] === "]") {
      const scope = stack.pop()!;
      str = scope.str + str.repeat(scope.num);
      pos += 1;
    } else if (NUMBERS.includes(s[pos])) {
      const end = s.indexOf("[", pos);
      num = +s.slice(pos, end);
      pos = end;
    }
  }

  return str;
}
// @lc code=end
