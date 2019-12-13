console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    const ul = document.querySelector('ul')
    const dropDown = document.getElementById('breed-dropdown')
    fetch(imgUrl).then(function(x) {return x.json()}).then(function(j) {
        j.message.forEach(function(dog) {
            let newImg = document.createElement('img')
            newImg.src = dog
            document.body.insertAdjacentElement('beforeend', newImg)
        })
    })
    fetch(breedUrl).then(function(x) {return x.json()}).then(function(js) {
        // debugger
        // console.dir(js)
        Object.entries(js.message).forEach(function([key, value]) {
            if (value.length > 0) {
                console.log(key)
                value.forEach(function(item){
                    let newLi = document.createElement('li')
                    newLi.dataset.filterKey = key[0]
                    // debugger
                    newLi.innerText = item + ' ' + key
                    newLi.addEventListener('click', function(e){
                        newLi.style.color = "red"
                        // debugger
                    })
                    ul.appendChild(newLi)
                })
            } else {
                let newLi = document.createElement('li')
                newLi.dataset.filterKey = key[0]
                newLi.innerText = key
                newLi.addEventListener('click', function(e){
                    newLi.style.color = "red"
                })
                ul.appendChild(newLi)
            }
        })

    })

    dropDown.addEventListener("change", function (e) {
        console.dir(e)
        let breedCollection = document.querySelectorAll('ul > li')
        breedCollection.forEach(function(dogLi) {
            if (dogLi.dataset.filterKey == e.target.value) {
            dogLi.style.display = "list-item"
            } else {
                dogLi.style.display = "none"
            }
        })
    })
})