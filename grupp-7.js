const elForm = document.querySelector("#nameForm");

function getMember(event) {
  document.querySelector("#output").innerHTML = "";
  const value = document.querySelector("#name").value;

  fetch("members.json")
    .then((response) => response.json())
    .then((data) => {
      // Prints all information of the searched person
     
      const result = data.filter(
        (person) =>
          person.firstname.toLowerCase() === value.trim().toLowerCase()
      );
      if (result.length > 0) {
        // console.log(Object.keys(result[0]));
        Object.keys(result[0]).map((k) => {
          if (k === "image") {
            document.querySelector("#image").src = result[0].image;
          } else {
            document.querySelector(
              "#output"
            ).innerHTML += `<span>${k}: </span>${result[0][k]}<br>`;
          }
        });
      }

      /*
      //  print all person by key{firstname,lastname,..}
      data.map((person) => {
         document.querySelector(
           "#output"
         ).innerHTML += `${value}: ${person[value]}<br>`;
       });
      result.map((person) => console.log(person));
      */
      
      /** 
      ** when using this function, you can enter a firstname and the program will print out the
      ** fullname and image.
      
         const result = data.filter(
        (d) => d.firstname.toLowerCase() === value.trim().toLowerCase()
      );
      if (result.length > 0) {
        document.querySelector(
          "#output"
        ).innerHTML = `<span>**information**</span><br>${result[0].firstname} ${result[0].lastName}<br>`;
        document.querySelector("#image").src = result[0].image;
      }
    */

    });

  event.preventDefault();
}
elForm.addEventListener("submit", getMember);