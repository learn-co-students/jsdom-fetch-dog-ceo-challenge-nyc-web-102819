document.addEventListener('DOMContentLoaded', function () {
    
    const imageUl = document.getElementById('dog-breeds')
    const dropdown = document.getElementById('breed-dropdown')
  
    // Challenge 1 ✅ 
    function addImages(json) {
        json["message"].forEach(url => {
            const imageDiv = document.getElementById('dog-image-container')
            const image = document.createElement('img')
            image.setAttribute('src', url)
            imageDiv.append(image)   
        });
    }

    fetch('https://dog.ceo/api/breeds/image/random/6')
        .then(function (response) { return response.json() })
        .then(function (json) { 
            addImages(json) 
        })


    // Challenge 2 ✅
    function addBreeds(json) {
        const dogsObject = json['message']
        
        for (const breed in dogsObject) {
            const li = document.createElement('li')
            li.textContent = breed
            imageUl.append(li)
        }
    }

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function (response) { return response.json() })
        .then(function (json) { 
            addBreeds(json) 
        })


    // Challenge 3 ✅     
    imageUl.addEventListener('click', function (e) {
        e.target.style.color = 'tomato'
    })

    
    // Challenge 4 ✅
    dropdown.addEventListener('change', function () {
        const breedsLis = document.querySelectorAll('li')

        if (dropdown.value === 'a') {
            breedsLis.forEach(breed => {
                if (breed.textContent.charAt(0) === 'a') {
                    breed.style.display = 'block'
                } else {
                    breed.style.display = 'none'
                }
            })
        }
    
        if (dropdown.value === 'b') {
            breedsLis.forEach(breed => {
                if (breed.textContent.charAt(0) === 'b') {
                    breed.style.display = 'block'
                } else {
                    breed.style.display = 'none'
                }
            })
        }

        if (dropdown.value === 'c') {
            breedsLis.forEach(breed => {
                if (breed.textContent.charAt(0) === 'c') {
                    breed.style.display = 'block'
                } else {
                    breed.style.display = 'none'
                }
            })
        }

        if (dropdown.value === 'd') {
            breedsLis.forEach(breed => {
                if (breed.textContent.charAt(0) === 'd') {
                    breed.style.display = 'block'
                } else {
                    breed.style.display = 'none'
                }
            })
        }    
    })

})
