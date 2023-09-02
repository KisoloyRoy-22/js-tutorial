// console.log("Hello World");
// let a = {
//     name: "Sobuj",
//     marks: [23, 25, 22, 21, 20]
// }
// let b = {
//     name: "Neil",
//     marks: [26, 25, 22, 22, 20]
// }
// const {name, marks} = a
// console.log(name)

// const cont = document.querySelector(".cont")
// console.log(cont.textContent)

// const footer = document.querySelector(".footer")
// footer.textContent = `<h3>FOOTER</h3>`

// function btnClicked(){
//     console.log("I am clicked!!")
// }

let i=0;
let sum=0;
let a=[];
function getRandom(){
    i++
    let n=Math.round(Math.random()*13);
    a[i-1]=n;
    console.log(n);
    sum+=n;
    if(sum==21){
        document.getElementById("output").textContent=`You have own the game with `+ i + ` Cards drawn & your sum is ` + sum;
        document.getElementById("cards").textContent=`Cards : `+a
        i=0;
        sum=0;
        a=[];
    }
    else if(sum<21 && sum>0){
        document.getElementById("output").textContent=`Continue!! `+i + ` Cards drawn & your sum is ` + sum;
        document.getElementById("cards").textContent=`Cards : `+a
    }
    else if(sum>21){
        document.getElementById("output").textContent=`You have lost the Game! Retry!!! `+i + ` Cards drawn & your sum is ` + sum;
        document.getElementById("cards").textContent=`Cards : `+a
        i=0;
        sum=0;
        a=[];
    }
}
function clr(){
    i=0;
    sum=0;
    a=[];
    document.getElementById("output").textContent=`Cards Drawn = 0`
    document.getElementById("cards").textContent=`Cards : `
}


// setTimeout(()=>{
//     console.log("Hello 1")
// },0)                            // fetching

// console.log("hello 2") // process 

// async function abc(){
//     const response = await fetch("https://websp.in/posts",{
//         method: GET,
//         credentials: true
//     })


//     return (
//         <className></className>
//     )
// }