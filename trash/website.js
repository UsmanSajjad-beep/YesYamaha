console.log(`hello`);

//window.alert(`ALERT`);

document.getElementById(`myid`).textContent = `Hello`

let x = 10;

//let username;

//username = window.prompt(`What is your username`);
//console.log(username);

let name;
document.getElementById(`mysubmit`).onclick = function(){
    name = document.getElementById(`myname`).value;
    document.getElementById(`myh1`).textContent = `Hello ${name}`;
}
let anything = `    myname`
console.log(anything.trim());

hello(goodbye)

function hello (callback){
    console.log(`hello`);
    callback()
}

function goodbye (){
    console.log(`goodbye`);
}

const person1 = {
    firstname: "spongebob",
    lastname: "squarepants",
    job: "fry cook",
}

const person2 = {
    firstname: "patrick",
    lastname: "star",
    age: 30,
}
const {firstname, lastname ,job="unemployed"} = person1
console.log(firstname)
console.log(lastname)
console.log(job)

function outer (){
    let username = 'anything'
    function inner (){
        console.log(username)
    }

    inner();
};
outer();
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top > offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
