import { insertGenres } from "./modules/insertGenres.js";
import navigateGenres from "./modules/navigateGenres.js";
import genrePopupForm from "./modules/genrePopupForm.js";
import { genreForm } from "./modules/selectors.js"

//genreForm is an object therefore in order to use it in the console I had to attach it to the window Object seen below.
window.genreForm = genreForm

//1. populates supported genres to the home page select.  
//2. populated supported genres to the popup forms select
insertGenres()
//allows the users to navigate different genres and their associated movies
navigateGenres()
//allows users to add a new movie to the database
genrePopupForm()













