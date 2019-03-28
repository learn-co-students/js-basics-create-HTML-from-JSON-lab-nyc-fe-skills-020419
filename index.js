// document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
//1. Find out which button they click

const titanicButton = document.getElementById('Titanic')
const terminatorButton = document.getElementById('Terminator 2')


function onMovieChange(movie){
  
  let titanicInfo = movies[movie]
  let titanicTitle = titanicInfo.title
  let titlediv = document.getElementById('title')
  let directordiv = document.getElementById('director')
  let genrediv = document.getElementById('genre')
  let ratingdiv = document.getElementById('filmRating')
  let moviePic = document.getElementById('poster')
  let movieDes = document.getElementById('description')
  let score = document.getElementById('audienceScore')
  let movieCast = document.getElementById('cast')
  let reviews = document.getElementById('reviews')
  titlediv.innerHTML = titanicTitle
  directordiv.innerHTML = titanicInfo.director
  genrediv.innerHTML = titanicInfo.genre
  ratingdiv.innerHTML = titanicInfo.filmRating
  moviePic.src = titanicInfo.poster
  movieDes.innerHTML = titanicInfo.description
  score.innerHTML = titanicInfo.audienceScore
  
  let castString = ''
  for (let castMember of titanicInfo.cast) {
    castString += '<li>' + castMember.role + ' : ' + castMember.actor + '</li>'
  }
  movieCast.innerHTML = castString
  
  let reviewString = ''
  for (let opinion of titanicInfo.reviews) {
    reviewString += '<li>' + opinion.username + ' : ' + opinion.content + '</li>'
  }
  reviews.innerHTML = reviewString
}

terminatorButton.addEventListener('click',() => onMovieChange('Terminator 2'))
titanicButton.addEventListener('click', () => onMovieChange('Titanic')) 

onMovieChange('Titanic')

  



//2. Get info for that movie
//3. Replace the info on the page with the info for that movie.
  
  
// });
