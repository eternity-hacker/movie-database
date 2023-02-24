import { insertGenres } from "./modules/insertGenres.js";
import navigateGenres from "./modules/navigateGenres.js";
import genrePopupForm from "./modules/genrePopupForm.js";
import { genreForm } from "./modules/selectors.js"

//genreForm is an object therefore in order to use it in the console I had to attach it to the window Object seen below.
window.genreForm = genreForm

insertGenres()
navigateGenres()
genrePopupForm()













