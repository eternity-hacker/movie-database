const movies = {
  comedy: ["17-again", "bruce-almighty", "the-proposal"],
  drama: ["good-will-hunting", "lean-on-me", "the-blind-side"],
  thriller: ["lucky-number-slevin", "memory", "the-code"]
}

//state management variables (what users clicke on is active)
let usersActiveGenre = undefined;
let usersActiveMovies = undefined;
let usersActiveBtnIndex = 0;
 
//querySelectors made into objects assigning variables
const genres = document.querySelector("select")
const moviePoster = document.querySelector(".movie-poster")
const movieShowcaseBtns = document.querySelector(".movie-showcase-btns")
const posterUploadBtn = document.querySelector('input[type="file"]')
const fileNameBox = document.querySelector(".file-name")
const preview = document.querySelector("#drag-n-drop-box img")
const addGenreBtn = document.querySelector("footer button")
const addMoviePopup = document.querySelector("#add-movie-popup")
const exitFormBtn = document.querySelector("#exit-form")
//adding click event listeners to each genre inside select.
//if statement does not add event listener to a value property assign ""
for (let i = 0; i < genres.children.length; i++) {
  // check if option element has a value
  if (genres.children[i].value) {
    genres.children[i].addEventListener("click", function (event) {
      // resets the highlighted button to #1
      if (usersActiveBtnIndex > 0) {
       movieShowcaseBtns.children[usersActiveBtnIndex].classList.remove("highlight")
      }
      
      // resetting state management
      usersActiveBtnIndex = 0;
      usersActiveGenre = event.target.value;
      usersActiveMovies = movies[usersActiveGenre]
      
      //injectiong the first movie poster (0 injects 1st movie of array)
      moviePoster.src = `./images/${usersActiveGenre}/${movies[usersActiveGenre][0]}.webp`

      // reset all buttons to hidden 
      for (let i = 0; i < movieShowcaseBtns.children.length; i++) {
        movieShowcaseBtns.children[i].classList.add("hidden")
      }
      
      //this code looks at how many movies are in the chosen genre and displays that many buttons
      for (let i = 0; i < usersActiveMovies.length; i++) {
        movieShowcaseBtns.children[i].classList.remove("hidden")
      }

      // adding highlight class to the first button when user selects a new genre
      movieShowcaseBtns.children[0].classList.add("highlight")
       })
    } 
}

    movieShowcaseBtns.addEventListener("click", function (event) {
      // removing previously hightlighted button
      movieShowcaseBtns.children[usersActiveBtnIndex].classList.remove("highlight")
      // reassign the active button index (textContent - 1 = back to index not length)
           usersActiveBtnIndex = event.target.textContent - 1
 
     // Add highlighted class to the targeted button
      event.target.classList.add("highlight")

      //this is the file path to the movie poster image
      moviePoster.src = `./images/${usersActiveGenre}/${usersActiveMovies[usersActiveBtnIndex]}.webp`
    })
       
    //add event listener to posterUploadBtn
posterUploadBtn.addEventListener("change", function () {
  //get the users file in the form of a File Object.
  const file = posterUploadBtn.files[0];
  const readMyFile = new FileReader();
  readMyFile.readAsDataURL(file);

  //add event listener to readMyFile which is related to FileReader
  readMyFile.addEventListener("loadstart", function callback() {
    })
    //add event listener to readMyFile which listens for the completed FileReader
  readMyFile.addEventListener("load", function () {
      //I am reassigning upload placeholder (hand image) with the users selected file.
      preview.src = readMyFile.result
      console.log(preview.src)
    })
    //add event listener to readMyFile which shows the progress of the file that's being read
  readMyFile.addEventListener("progress", function (event) {
      console.log("Still reading the file", event)
    })
      })
    //add event listener to footer button
addGenreBtn.addEventListener("click", function (event) {
      //display add-movie-popup once clicked
  addMoviePopup.style.display = "flex";
  addGenreBtn.parentElement.style.display = "none"
      })
     //add event listener to exit-form (x)
exitFormBtn.addEventListener("click", function (event) {
    //exit out of add-movie-popup once clicked
  addMoviePopup.style.display = "none"
  addGenreBtn.parentElement.style.display = "block"
})
  
      







