/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
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

class MyQueue {
  private inStack = new Stack<number>();
  private outStack = new Stack<number>();

  private in2out() {
    while (!this.inStack.empty()) {
      this.outStack.push(this.inStack.pop());
    }
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.empty()) {
      this.in2out();
    }

    return this.outStack.pop();
  }

  peek(): number {
    if (this.outStack.empty()) {
      this.in2out();
    }
    return this.outStack.top();
  }

  empty(): boolean {
    return this.inStack.empty() && this.outStack.empty();
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
