console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//  fetching images
function fetchImages() {
  fetch(imgUrl).then(function (resp) {
    return resp.json()}).then(function (json) {
      addImages(json)
    })
}

//  rendering images
function addImages (json) {
  const imgDiv = document.querySelector('#dog-image-container')
  json.message.forEach(function(image) {
    let img = document.createElement('img')
    img.src = `${image}`
    imgDiv.appendChild(img)
  }) 
}

//  fetching breeds
function fetchBreeds(filter = null) {
  fetch(breedUrl).then(resp => resp.json())
    .then(function (json) {
      addBreeds(json, filter)   
    })
}

//  rendering breeds
function addBreeds (json, filter = null) {
  const breedUl = document.querySelector('#dog-breeds')
  Object.keys(json.message).forEach(function (breed) {
    if (filter && breed.startsWith(filter)) {
      // console.log(breed)
      let li = document.createElement('li')
      li.innerHTML = `${breed} <ul></ul>`
      breedUl.appendChild(li)
      if (json['message'][`${breed}`].length > 0) {
        json['message'][`${breed}`].forEach(function(subBreed) {
          let subLi = document.createElement('li')
          subLi.innerHTML = `${subBreed}`
          li.childNodes[1].appendChild(subLi)
        })
      } 
    } else if (filter === null) {
      let li = document.createElement('li')
      li.innerHTML = `${breed} <ul></ul>`
      breedUl.appendChild(li)
      if (json['message'][`${breed}`].length > 0) {
        json['message'][`${breed}`].forEach(function(subBreed) {
          let subLi = document.createElement('li')
          subLi.innerHTML = `${subBreed}`
          li.childNodes[1].appendChild(subLi)
        })
      } 
    }
  }) 
}

//  changing color
function colorChange() {
  const breedUl = document.querySelector('#dog-breeds')
  breedUl.addEventListener('click', function (e) {
    e.target.style.color === 'red' ?  e.target.style.color = '' : e.target.style.color = 'red';
  })
}

//  filter breeds
function filterBreeds() {
  const ddmenu = document.querySelector('#breed-dropdown')
  ddmenu.addEventListener('change', function() {
    console.log(ddmenu.value)
    const breedUl = document.querySelector('#dog-breeds').innerHTML = ''
    fetchBreeds(ddmenu.value)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  colorChange()
  filterBreeds()
})