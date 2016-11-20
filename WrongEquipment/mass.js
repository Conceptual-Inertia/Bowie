let mass = function(){
  this.instr_num = 0
  this.par1 = 0
  this.par2 = 0
  this.par3 = 0
  this.con = new array()

  this.reg = new array()
  this.get = function(index){
    if (index < 0) return con[index + 1]
    if (typeof(reg[index]) == undefined) return 0
    return reg[index]
  }

  this.set = function(index, value){
    reg[index] = value
  }
}

let Eval = function(){
  this.INSTR = {
    'ADD': this.add(),
    'SUB': this.sub(),
    'MUL': this.mul(),
    'DIV': this.div(),
    'LTN': this.ltn(),
    'GTN': this.gtn(),
    'GEQ': this.ge(),
    'LEQ': this.le(),
    'EQl': this.eql(),
    'AND': this.and(),
    'OR':  this.or(),
    'NOT': this.not(),
    'INC': this.inc(),
    'DEC': this.dec(),
    'LOAD':this.loadv(),
    'PRINT': this.printv()
  }

  this.add = function(){
    set(par1, get(par2) + get(par3))
  }
  this.sub = function(){
    set(par1, get(par2) - get(par3))
  }
  this.mul = function(){
    set(par1, get(par2) * get(par3))
  }
  this.sub = function(){
    set(par1, get(par2) / get(par3))
  }
  this.ltn = function(){
    set(par1, get(par2) < get(par3))
  }
  this.leq = function(){
    set(par1, get(par2) <= get(par3))
  }
  this.gtn = function(){
    set(par1, get(par2) > get(par3))
  }
  this.geq = function(){
    set(par1, get(par2) >= get(par3))
  }
  this.eql = function(){
    set(par1, get(par2) === get(par3))
  }
  this.and = function(){
    set(par1, get(par2) & get(par3))
  }
  this.or = function(){
    set(par1, get(par2) | get(par3))
  }
  this.not = function(){
    set(par1, !get(par2))
  }
  this.inc = function(){
    set(par1, get(par1) + 1)
  }
  this.dec = function(){
    set(par1, get(par1) - 1)
  }
  this.load = function(){
    set(par1, get(par2))
  }
  this.print = function(){
    alert(get(par1))
  }
}


function eval() {
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
