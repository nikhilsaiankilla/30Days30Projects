const accessKey = "3Ls10jHmH-k2o5o2wIbSJVjxbVFI_pnbKcjYaSWS-30" 

const inputBox = document.querySelector(".input-box")

const formE1 = document.querySelector("form")

const searchResults = document.querySelector(".search-results")

const showMoreBtn = document.querySelector(".showmore-btn")

let page = 1;

let inputData = ""
async function searchImage(){

    inputData = inputBox.value;

    //calling api using inputValue, page number and accesskey 

    let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    //storing api response 

    let response = await fetch(URL)

    //converting response into json format

    const data = await response.json()

    //picking only results array

    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = ""
    }

    results.map((result) => {

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)

    })

    page++

    if(page > 1){
        showMoreBtn.style.display = "block"
    }
}


formE1.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1;
    searchImage()
})

showMoreBtn.addEventListener("click",()=>{
    searchImage()
})