//document.addEventListener("DOMContentLoaded", (e) => {
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  
  function onMovieChange(movie){
    let data = movies[movie]
    let title = data.title 
    
    let titleDiv = document.getElementById('title')
    titleDiv.innerHTML = title 
    
    let directorDiv = document.getElementById('director')
    directorDiv.innerHTML = data.director  
    
    let genreDiv = document.getElementById('genre')
    genreDiv.innerHTML = data.genre 
    
    let filmRatingDiv = document.getElementById('filmRating')
    filmRatingDiv.innerHTML = data.filmRating 
    
    let posterImg = document.getElementById('poster')
    posterImg.src = data.poster
    
    let descriptionDiv = document.getElementById('description')
    descriptionDiv.innerHTML = data.description
    
    let audienceScoreDiv = document.getElementById('audienceScore')
    audienceScoreDiv.innerHTML = data.audienceScore 
    
    let castDiv = document.getElementById('cast')
    let startingString = ''
    
    for (let castMember of data.cast) {
       startingString += "<li>" + castMember.role + ": " + castMember.actor + "</li>"
    }
    castDiv.innerHTML = startingString
    
    const reviewsDiv = document.getElementById('reviews')
    startingString = ''
    for (let review of data.reviews) {
       startingString += "<li>" + review.username + ": " + review.content + "</li>"
    }
    reviewsDiv.innerHTML = startingString
  }
  
  titanicButton.addEventListener('click', () => onMovieChange('Titanic'))
  terminatorButton.addEventListener('click',() => onMovieChange('Terminator 2'))
  
  onMovieChange('Titanic')
  
  
  
  
  

//});


  // script tag should always be at the end of the body 
  // once the dom has fully loaded 
  // invoking a function here will make sure it happens on page load

// with addEventListener always find the button you want to interact with 
// then add the event listener 
// 1. find out which button they pressed 
// 2. get the data for that movie 
// 3. replace the template values with the real ones 

// anonymous functions - 
// () => console.log() is same thing as saying function.blah(){console.log()}