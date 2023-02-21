import {movie as homeGenreDropdown, genreForm as popupGenreDropdown} from "./selectors.js"


export const movies = {
  comedy: ["17-again", "bruce-almighty", "the-proposal"],
  drama: ["good-will-hunting", "lean-on-me", "the-blind-side"],
  thriller: ["lucky-number-slevin", "memory", "the-code"],
  horror: []
}
 
const genreList = Object.keys(movies)

export function insertGenres () {
    for (let i = 0; i < genreList.length; i++) {
        //create a new option element for our home dropdown list
        const homeOptionElement = document.createElement("option")
      
        //create a new option element for our popup dropdown list
        const popupOptionElement = document.createElement("option")
        //adds genre name to the textContent property of the newly created optionElement.
        homeOptionElement.textContent = genreList[i]
        homeOptionElement.className = "genre"
        //adds genre name to the textContent of popup
        popupOptionElement.textContent = genreList[i]
        //populate the home dropdown 
        homeGenreDropdown.genres.add(homeOptionElement)
        //populate the popup dropdown
        popupGenreDropdown.genres.add(popupOptionElement)
    }
}
