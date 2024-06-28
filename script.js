const stat= document.querySelector("h5")
const btn= document.querySelector("#add")
let check = 0


btn.addEventListener("click", function () {
    if (check == 0) {
        stat.innerHTML = "Friends"
    stat.style.color = "green"
    btn.innerHTML = "Remove Friend"
    check = 1
    }

     else
     
     {
        stat.innerHTML = "Strangers"
        stat.style.color = "Red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
   
})


