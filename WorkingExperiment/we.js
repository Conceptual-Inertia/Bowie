// we.js
// Stack-based VM for Bowie

// stack-related functions

let WEStack = function () {
  this.top = -1
  this.stack = []
  this.stackInit = function () {
    return new WEStack()
  }
  this.stackPush = function (elm) {
    this.stack[++(this.top)] = elm
  }
  this.stackPop = function () {
    return this.stack[(this.top)--]
  }
  this.stackFree = function () {
    for (let i = 0; i < this.stack.length; i++) {
      this.stack[i] = null
    }
  }
}

// instruction-function prototypes

let WEInstructionOps = function (stack) {
  this.WEINSTR = {
    'ADD': this.weAdd(stack),
    'MUL': this.weMul(stack),
    'DIV': this.weDiv(stack),
    'LT': this.weLt(stack),
    'GT': this.weGt(stack),
    'LE': this.weLe(stack),
    'GE': this.weGe(stack),
    'EQ': this.weEq(stack),
    'AND': this.weAnd(stack),
    'OR': this.weOr(stack),
    'NE': this.weNe(stack),
    'XOR': this.weXor(stack),
    'BOOL_IF': this.weBoolIf(stack),
    'INC': this.weInc(stack),
    'DEC': this.weDec(stack),
    'DUP': this.weDup(stack),
    'SWAP': this.weSwap(stack)
  }
  this.weAdd = function (stack) {
    stack.stackPush(stack.stackPop() + stack.stackPop())
  }
  this.weMul = function (stack) {
    stack.stackPush(stack.stackPop() * stack.stackPop())
  }
  this.weDiv = function (stack) {
    stack.stackPush(stack.stackPop / stack.stackPop())
  }
  this.weLt = function (stack) {
    stack.stackPush((stack.stackPop() < stack.stackPop()))
  }
  this.weLe = function (stack) {
    stack.stackPush((stack.stackPop() <= stack.stackPop()))
  }
  this.weEq = function (stack) {
    stack.stackPush((stack.stackPop() === stack.stackPop()))
  }
  this.weGe = function (stack) {
    stack.stackPush((stack.stackPop() >= stack.stackPop()))
  }
  this.weGt = function (stack) {
    stack.stackPush((stack.stackPop() > stack.stackPop()))
  }
  this.weAnd = function (stack) {
    stack.stackPush(stack.stackPop() & stack.stackPop())
  }
  this.weOr = function (stack) {
    stack.stackPush(stack.stackPop() | stack.stackPop())
  }
  this.weNe = function (stack) {
    stack.stackPush(!stack.stackPop())
  }
  this.weXor = function (stack) {
    stack.stackPush(stack.stackPop() ^ stack.stackPop())
  }
  this.weBoolIf = function (stack) {
    stack.stackPush((!stack.stackPop()) | stack.stackPop()) // ~p ^ q
  }
  this.weInc = function (stack) {
    stack.stackPush(++stack.stackPop)
  }
  this.weDec = function (stack) {
    stack.stackPush(--stack.stackPop)
  }
  this.weDup = function (stack) {
    let dup = stack.stackPop()
    stack.stackPush(dup)
    stack.stackPush(dup)
  }
  this.weSwap = function (stack) {
    let swapR = stack.stackPop()
    let swapL = stack.stackPop()
    stack.stackPush(swapR)
    stack.stackPush(swapL)
  }
  this.weRet = function () {
    return
  }
  this.weConst = function (stack) {
    stack.stackPush()
  }
}

function evaluate() {
  // TODO
}

function run() {
  // TODO
}

function readIn() {
  // TODO
}

function main() {
  // TODO
}
