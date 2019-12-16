console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

    let parentNode = document.getElementById('dog-image-container')


    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        // console.log(data.message[0])
        


        data.message.forEach( img => {
            // console.log(img) 
            let childNode = document.createElement("div")
            childNode.innerHTML = `<img src="${img}">`
            parentNode.appendChild(childNode)
        
        })


    })


    // populate list of all breeds
    let breeds = document.getElementById("dog-breeds")
    let breedList = []

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => {  //console.log(data)
    

    
        for (const key in data.message) {
            //console.log(`${key}: ${data.message[key]}`)

            let breed = document.createElement("li")
            // breed.dataset.class = "breed"
            // breed.dataset.letter = key.charAt(0)
            breed.innerText = `${key}`
            breeds.appendChild(breed)

            breedList.push(key)
                    
        }

        console.log(breedList)
    
    })




    // change color of breed upon click
    breeds.addEventListener("click", function (e) {
        // console.log(e.target)
        // console.log(e.target.tagName)
        e.target.style.color = "red"
    })

    let dropDown = document.getElementById("breed-dropdown")
    console.log(dropDown.selectedIndex)

    
    dropDown.addEventListener("change", e => {
        
        console.log("Event:",e)
        console.log("Selected Index:",dropDown.selectedIndex)

        switch (dropDown.selectedIndex) {
            case 0:
                console.log("fliter by A")
                breeds = document.querySelector('#dog-breeds')
                while (breeds.firstChild) {breeds.firstChild.remove()}
                let filterListA = breedList.filter(each => each.startsWith("a"))
                filterListA.forEach(each => { 
                    let breed = document.createElement("li")
                    breed.innerText = `${each}`
                    breeds.appendChild(breed)
                })

                break;
        
            case 1:
                console.log("fliter by B")
                breeds = document.querySelector('#dog-breeds')
                while (breeds.firstChild) {breeds.firstChild.remove()}
                let filterListB = breedList.filter(each => each.startsWith("b"))
                filterListB.forEach(each => { 
                    let breed = document.createElement("li")
                    breed.innerText = `${each}`
                    breeds.appendChild(breed)
                })
                    
                

            
                break;
        
            case 2:
                console.log("fliter by C")
                
                breeds = document.querySelector('#dog-breeds')
                while (breeds.firstChild) {breeds.firstChild.remove()}
                let filterListC = breedList.filter(each => each.startsWith("c"))
                filterListC.forEach(each => { 
                    let breed = document.createElement("li")
                    breed.innerText = `${each}`
                    breeds.appendChild(breed)
                })
        
                break;
        
            case 3:
                    console.log("fliter by D")
                    breeds = document.querySelector('#dog-breeds')
                    while (breeds.firstChild) {breeds.firstChild.remove()}
                    let filterListD = breedList.filter(each => each.startsWith("d"))
                    filterListD.forEach(each => { 
                        let breed = document.createElement("li")
                        breed.innerText = `${each}`
                        breeds.appendChild(breed)
                    })
                    
                break;
        
            default:
                NULL
                break;
        }

    })


    // end of master event listener

})

