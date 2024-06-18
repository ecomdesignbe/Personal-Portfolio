const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM0MjllMTk5Njk1ZDlkMjExYTAyY2RlNTFkNDgxNyIsInN1YiI6IjY2NzA0MTIyOTRkY2U4MjA2MjI2NzE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qy5udOL-epsXjYRFhxXJj-cn6xoDJLLN6kCOxezlGI0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));