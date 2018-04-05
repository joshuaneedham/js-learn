fetch('https://api.github.com/users/joshuaneedham')
  .then(res => res.json())
  .then(json => console.log(json))
