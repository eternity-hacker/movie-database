

const homeDropdown = document.querySelector("#select-genre");
const popupDropdown = document.querySelector("#genre-box select")
 
const movies = {
  comedy: ["17-again", "bruce-almighty", "the-proposal"],
  drama: ["good-will-hunting", "lean-on-me", "the-blind-side"],
  thriller: ["lucky-number-slevin", "memory", "the-code"]
}
 
const genreList = Object.keys(movies)

export default function insertGenres () {
    for (let i = 0; i < genreList.length; i++) {
        //create a new option element for our home dropdown list
        const homeOptionElement = document.createElement("option")
        console.log(homeOptionElement)
        //create a new option element for our popup dropdown list
        const popupOptionElement = document.createElement("option")
        //adds genre name to the textContent property of the newly created optionElement.
        homeOptionElement.textContent = genreList[i]
        homeOptionElement.className = "genre"
        //adds genre name to the textContent of popup
        popupOptionElement.textContent = genreList[i]
        //populate the home select element with the newly created option element.
        homeDropdown.add(homeOptionElement)
        //populate the popup genre select element
        popupDropdown.add(popupOptionElement)
    }
}
