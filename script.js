
//PROMISES 

//GET https://icanhazdadjoke.com/ fetch a random dad joke.

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');


const setHeader = {
    headers:{
        Accept : "application/json"
    }
}

const genratejokes = () => {
    fetch(' https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json() )
    .then((data) => {
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
}

jokebtn.addEventListener('click', genratejokes);
genratejokes();


//asychronous using function******************************************





// const jokes = document.querySelector('#joke');
// const jokebtn = document.querySelector('#jokebtn');



// const genratejokes = async  () => {

//     try{
//     const setHeader = {
//         headers:{
//             Accept : "application/json"
//         }
//     }
    


//   const res = await  fetch(' https://icanhazdadjoke.com', setHeader)
//     const data = await res.json();
//         jokes.innerHTML = data.joke;
//     }catch(error){
//         console.log(`${error}`);
//     }
// }

// jokebtn.addEventListener('click', genratejokes);
// genratejokes();

