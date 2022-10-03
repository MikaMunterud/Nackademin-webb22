//Hej
//Vad gör ni? 
//lägga in fetch här
const elForm = document.querySelector("#nameForm");

function getMember(event){

fetch("members.json").then(response => response.json()).then(data => {
    data.map(person=> console.log(person));

})

//använd filter för att få ut rätt person.
//i html skapa en ruta där användaren kan skriva in vilket namn man vill få ut
//se till så att det inskrivna namnet och det hämtade namet har .toLowerCase så att rätt namn kan hittas

event.preventDefault();
}
elForm.addEventListener("submit", getMember)