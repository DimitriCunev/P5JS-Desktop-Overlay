let lastcode = require('fs').readFileSync('code.js','utf8')


    try {
        eval(lastcode)
        
        console.log('yo')
    } catch (error) {
        function setup(){
            createCanvas(windowWidth,windowHeight)
            textAlign(LEFT, TOP)
        }
        function draw(){
            clear()
            fill('rgb(255,0,0)')
            text(error,15,15)
        }
    }

setInterval(()=>{
    code = require('fs').readFileSync('code.js','utf8')
    if(code!=lastcode){
        location.reload(); 
    }
},1000)
