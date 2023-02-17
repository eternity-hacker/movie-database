import { genreForm } from "./selectors.js"
export default function () {
    //add event listener to footer button
genreForm.open.addEventListener("click", function (event) {
      //display add-movie-popup once clicked
  genreForm.popup.style.display = "flex";
  genreForm.open.parentElement.style.display = "none"
})
    //add event listener to exit-form (x)
genreForm.close.addEventListener("click", function (event) {
    //exit out of add-movie-popup once clicked
  genreForm.popup.style.display = "none"
  genreForm.open.parentElement.style.display = "block"
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
 //add event listener to trashCan and then add-movie-popup goes away and camera icon is back and text-box with trash can and check button goes away.
genreForm.poster.status.trash.addEventListener("click", function () {
   genreForm.poster.detailsBox.style.display = "none"
  genreForm.poster.preview.src = "./images/upload-button.png"

    })
     
}

    