// taking functions as input in typescript

function fun(fn: () => void){
    setTimeout(fn, 1000)
}

fun(()=>{
    console.log("hello")
})