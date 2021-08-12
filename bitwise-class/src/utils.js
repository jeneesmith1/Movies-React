export async function getMoviesBySearchTerm(string) {
    const URL = `http://www.omdbapi.com/?apikey=98934049&type=movie`; // Will return a 404
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      throw Error(response.statusText);
    }
  }
  
  getMoviesByTitle('batman');


export async function getMoviesDetailsById(imdbId) {
    const URL = `http://www.omdbapi.com/?apikey=98934049&i={imdbId}`; // Will return a 404
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      throw Error(response.statusText);
    }
  }
  
  getMoviesDetailsById('tt0832266'); 