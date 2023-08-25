let filterButtons = document.querySelectorAll(".filter-btn")
let storeItems = document.querySelectorAll(".item")

//looping through every button

filterButtons.forEach((button)=>{

    //adding click event listner to the buttons 

    button.addEventListener("click",(e)=>{

        // getting the dataset value using the "e"

        let currentFilter = e.target.dataset.filter

        //looping through the all items 

        storeItems.forEach((item)=>{

            // if the dataset value present in the item then display the item else dont show
            
            if(currentFilter === "all"){
                item.style.display = "block"
            }else{
                if(item.classList.contains(currentFilter)){
                    item.style.display = "block"
                }else{
                    item.style.display = "none"
                }
            }
        })
    })
})