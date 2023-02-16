import {movie, genreForm} from "./modules/selectors.js"


const movies = {
  comedy: ["17-again", "bruce-almighty", "the-proposal"],
  drama: ["good-will-hunting", "lean-on-me", "the-blind-side"],
  thriller: ["lucky-number-slevin", "memory", "the-code"]
}

//state management variables (what users clicke on is active)
let usersActiveGenre = undefined;
let usersActiveMovies = undefined;
let usersActiveBtnIndex = 0;
 
//querySelectors made into an Object named movie, with keys and values.
//adding click event listeners to each genre inside select.
//if statement does not add event listener to a value property assign ""
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
      
      //injectiong the first movie poster (0 injects 1st movie of array)
      movie.poster.src = `./images/${usersActiveGenre}/${movies[usersActiveGenre][0]}.webp`

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

      //this is the file path to the movie poster image
      movie.poster.src = `./images/${usersActiveGenre}/${usersActiveMovies[usersActiveBtnIndex]}.webp`
    })
       
    //add event listener to genreForm.poster.uploadBtn
genreForm.poster.uploadBtn.addEventListener("change", function () {
  //get the users file in the form of a File Object.
  const file = genreForm.poster.uploadBtn.files[0];
  const readMyFile = new FileReader();
  readMyFile.readAsDataURL(file);
    
  //add event listener to readMyFile which is related to FileReader
  readMyFile.addEventListener("loadstart", function () {
    genreForm.poster.detailsBox.style.display = "flex"
    genreForm.poster.status.fileName.textContent = file.name
  })
  //add event listener to readMyFile which listens for the completed FileReader
  readMyFile.addEventListener("load", function () {
    genreForm.poster.status.success.style.visibility = "visible"
    //I am reassigning upload placeholder (hand image) with the users selected file.
    genreForm.poster.preview.src = readMyFile.result
    })
  //add event listener to readMyFile which shows the progress of the file that's being read
  readMyFile.addEventListener("progress", function (event) {
    console.log("Still reading the file", event)
  })
  //add error event listener
  readMyFile.addEventListener("error", function (event) {
    genreForm.poster.status.failure.style.visibility = visible
  })
})

  //add event listener to footer button
genreForm.open.addEventListener("click", function (event) {
      //display add-movie-popup once clicked
  genreForm.popup.style.display = "flex";
  genreForm.open.parentElement.style.display = "none"
})
      //add event listener to trashCan and then add-movie-popup goes away and camera icon is back and text-box with trash can and check button goes away.
genreForm.poster.status.trash.addEventListener("click", function () {
   genreForm.poster.detailsBox.style.display = "none"
  genreForm.poster.preview.src = "./images/upload-button.png"

    })
     //add event listener to exit-form (x)
genreForm.close.addEventListener("click", function (event) {
    //exit out of add-movie-popup once clicked
  genreForm.popup.style.display = "none"
  genreForm.open.parentElement.style.display = "block"
})
  
      







