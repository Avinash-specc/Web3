const { timeStamp } = require('console');
const EventEmitter = require('events');

const ud = new EventEmitter();
ud.on('greet',(name)=>{
    console.log(`Hello there 2A ${name}`)
})
ud.on('exit',(num)=>{
    console.log(`thanqu for visit ${num}`)
})

ud.emit('greet','Avinash')
ud.emit('exit',100)
ud.emit('exit',193)


class Button extends EventEmitter {
  click() {
    this.emit('click');
  }
}

const button = new Button();

button.on('click', () => {
  console.log('Button was clicked');
});

button.click();

console.log('start')
setTimeout(()=>{
    console.log('timeout')
},0)
setImmediate(()=>{
    console.log("Immediate")
})

process.nextTick(()=>{
    console.log("Next Tick")
})
console.log('exit')