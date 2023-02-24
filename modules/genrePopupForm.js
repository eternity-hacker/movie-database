import { genreForm } from "./selectors.js"
import { movies } from "./insertGenres.js"
const fileListStatus = [{ name: undefined }];
export default function () {
  //add event listener to footer button
  genreForm.open.addEventListener("click", function (event) {
    //display add-movie-popup once clicked
    genreForm.popup.style.display = "flex";
    genreForm.open.parentElement.style.display = "none"
  })
  //add event listener to exit-form (x)
  genreForm.close.addEventListener("click", function (event) {
    //reset form 
    genreForm.newGenreInput.value = ""
    genreForm.movieTitleInput.value = ""

    //reset form display properties
    genreForm.newGenreInput.style.display = "none"
    genreForm.genres.style.display = "block"
    genreForm.addGenreBtn.style.display = "block"
    //exit out of add-movie-popup once clicked
    genreForm.popup.style.display = "none"
    genreForm.open.parentElement.style.display = "block"
    //resets back to normal after exit
    genreForm.genres.value = ""
    //resets detailBox
    genreForm.poster.status.success.style.visibility = "hidden"

    //resets status
    genreForm.poster.detailsBox.style.display = "none"
    genreForm.poster.preview.src = "./images/upload-button.png"
  })
  //add event listener to genreForm.poster.uploadBtn
  genreForm.poster.uploadBtn.addEventListener("change", function () {
    fileListStatus.push(genreForm.poster.uploadBtn.files[0]);
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
  //add event listener to trashCan and then add-movie-popup goes away and camera icon is back and text-box with trash can and check button goes away.
  genreForm.poster.status.trash.addEventListener("click", function () {
    genreForm.poster.detailsBox.style.display = "none"
    genreForm.poster.preview.src = "./images/upload-button.png"

  })
  genreForm.addGenreBtn.addEventListener("click", function () {
    //change the display model of the genre select dropdown to none
    genreForm.genres.style.display = "none"
    genreForm.newGenreInput.style.display = "block"
    //focus the genreInputElement
    genreForm.newGenreInput.focus()

    genreForm.newGenreInput.style.cursor = "text"
    //add placeholder text to inform user to input a new genre
    genreForm.newGenreInput.placeholder = "Input new Genre..."
    //once plus icon clicked it goes away
    genreForm.addGenreBtn.style.display = "none"
    //change the font-weight to bolder
    genreForm.newGenreInput.style.fontWeight = "900"
    genreForm.newGenreInput.style.fontSize = "20px"
  })
  //submits the new movie to the local database
  genreForm.submitMovieBtn.addEventListener("click", function () {
    const movieGenres = Object.keys(movies)
    const genreSelected = movieGenres.includes(genreForm.genres.value)

    //runs only when user selects genre from dropdown and provides a movie and uploads poster
    if (genreSelected && genreForm.movieTitleInput.value && genreForm.newGenreInput.value === "") {
      //verify that user selected a poster
      if (fileListStatus[0].name !== checkFileExistence()) {

        //add new movie to database
        movies[genreForm.genres.value].push(genreForm.movieTitleInput.value)
        console.log("Movie added to database", movies)
        //reset form 
        genreForm.newGenreInput.value = ""
        genreForm.movieTitleInput.value = ""

        //reset form display properties
        genreForm.newGenreInput.style.display = "none"
        genreForm.genres.style.display = "block"
        genreForm.addGenreBtn.style.display = "block"

        //resets back to normal after exit
        genreForm.genres.value = ""

        //resets detailBox
        genreForm.poster.status.success.style.visibility = "hidden"

        //resets status
        genreForm.poster.detailsBox.style.display = "none"
        genreForm.poster.preview.src = "./images/upload-button.png"
      } else {
        console.log("upload a movie poster")
      }
    }
    // runs only when user inputs custom genre and adds a movie
    else if (genreForm.newGenreInput.value && genreForm.movieTitleInput.value) {
      //checks if genre already exists
      if (movieGenres.includes(genreForm.newGenreInput.value)) {
        console.log("The genre already exists")
        movies[genreForm.newGenreInput.value].push(genreForm.movieTitleInput.value)
        console.log(movies)
      }
      //adds genre if it doesn't exist
      else {
        movies[genreForm.newGenreInput.value] = [genreForm.movieTitleInput.value]
        console.log("Added new genre & movie")
      }

      //reset form 
      genreForm.newGenreInput.value = ""
      genreForm.movieTitleInput.value = ""

      //reset form display properties
      genreForm.newGenreInput.style.display = "none"
      genreForm.genres.style.display = "block"
      genreForm.addGenreBtn.style.display = "block"

      //resets back to normal after exit
      genreForm.genres.value = ""

      //resets poster after exit
    } else {
      console.log("Please select a genre, and provide a movie title")
    }
  })
}

function checkFileExistence() {
  try {
    const fileName = genreForm.poster.uploadBtn.files[0].name
    console.log("This try block runs")
    return fileName
  }
  catch (error) {
    console.error("The file name was undefined because the file object does not exist")
    console.log("This catch block runs")
    return undefined
  }
}


