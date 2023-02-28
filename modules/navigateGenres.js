import { movie } from "./selectors.js"
import { movies } from "./insertGenres.js";

//state management variables (what users clicks on is active)
let usersActiveGenre = undefined;
let usersActiveMovies = undefined;
let usersActiveBtnIndex = 0;
export default function navigateGenres() {
    //adds a click event listener to each option element.
    for (let i = 0; i < movie.genres.children.length; i++) {
        // check if option element has a value
        if (movie.genres.children[i].value) {
            movie.genres.children[i].addEventListener("click", function (event) {
                // resets the highlighted button to #1
                if (usersActiveBtnIndex > 0) {
                    movie.showcaseBtns.children[usersActiveBtnIndex].classList.remove("highlight")
                }
                // resetting state management
                usersActiveBtnIndex = 0;
                usersActiveGenre = event.target.value;
                usersActiveMovies = movies[usersActiveGenre]

                //injectiong the first movie poster (0 represents 1st movie of array)
                if (typeof movies[usersActiveGenre][0] === "string") {
                    //injects a business supported movie
                    movie.poster.src = `./images/${usersActiveGenre}/${movies[usersActiveGenre][0]}.webp`
                }
                else {
                    movie.poster.src = movies[usersActiveGenre][0].poster
                }

                // reset all buttons to hidden 
                for (let i = 0; i < movie.showcaseBtns.children.length; i++) {
                    movie.showcaseBtns.children[i].classList.add("hidden")
                }
                //this code looks at how many movies are in the chosen genre and displays that many buttons
                for (let i = 0; i < usersActiveMovies.length; i++) {
                    movie.showcaseBtns.children[i].classList.remove("hidden")
                }
                // adding highlight class to the first button when user selects a new genre
                movie.showcaseBtns.children[0].classList.add("highlight")
            })
        }
    }
    movie.showcaseBtns.addEventListener("click", function (event) {
        // removing previously hightlighted button
        movie.showcaseBtns.children[usersActiveBtnIndex].classList.remove("highlight")
        // reassign the active button index (textContent - 1 = back to index not length)
        usersActiveBtnIndex = event.target.textContent - 1
        // Add highlighted class to the targeted button
        event.target.classList.add("highlight")
        //if expressions evaluates to a string of a movie title then run this code
        if (usersActiveMovies[usersActiveBtnIndex] === "string") {
            //this is the file path to the movie poster image
            movie.poster.src = `./images/${usersActiveGenre}/${usersActiveMovies[usersActiveBtnIndex]}.webp`
            //if not a string then run this code-+
        } else {
            movie.poster.src = usersActiveMovies[usersActiveBtnIndex].poster
        }
    })
}