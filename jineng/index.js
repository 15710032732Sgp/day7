#! /usr/bin/env node
const child_process=require('child_process');
const path=require('path');
const fs=require('fs');

var childs=childsFn()

function childsFn(){
    var child = child_process.spawn('node',['server.js']);

child.stdout.on('data',data => {
    console.log(data)
})  

child.stderr.on('data',error => {
    console.log(error)
})
return child

}
let water = fs.watch('./server.js');

water.on('change',() => {
    console.log("server.js变化")
    //把子进程child杀死
    childs.kill();
    //创建一个新的子进程
    childs=childsFn()
})
