
let count = 0
function increment() {

    count += 1
    //let countEl = document.getElementById("counter-el")

    document.getElementById("counter-el").textContent = count

}

function save() {
    
    let spa = " - "
 let saved = count +  spa
 document.getElementById('save-el').textContent += saved 
 document.getElementById("counter-el").textContent = 0
 count =0
}



function welcome(){
	let name = "cornelius"
let greeting = "Hello " 
let last = "thanks for visiting us"

myGreeting = (greeting + " " + name + " " + last)
document.getElementById('welcome-btn').textContent = myGreeting

}

