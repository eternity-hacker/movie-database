export const movie = {
 genres: document.querySelector("select"),
 poster: document.querySelector(".movie-poster"),
 showcaseBtns: document.querySelector(".movie-showcase-btns"),
}

export const genreForm = {
  popup: document.querySelector("#add-movie-popup"),
  open: document.querySelector("footer button"),
  close: document.querySelector("#exit-form"),
    
  poster: {
  uploadBtn: document.querySelector('input[type="file"]'),
  status: {
    fileName: document.querySelector(".file-name"),
    text: document.querySelector(".status-text"),
    failure: document.querySelector(".red-cross"),
    success: document.querySelector(".green-check"),
    trash: document.querySelector(".trash"),
  },
  preview: document.querySelector("#drag-n-drop-box img"),
  detailsBox: document.querySelector("#uploaded-movie-file"),
  }
}
