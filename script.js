const toDoInput = document.getElementById("toDoInput")
const btn = document.getElementById("btn")
const list = document.querySelector(".list-group") // <ul></ul>

btn.addEventListener("click", () => {
    // on regular function
    // this.parentElement.remove()
    // console.log(this.parentElement.remove)

    // console.log(toDoInput.value);

    const list_item = document.createElement("li") // <li></li>
    list_item.classList.add("list-group-item", "d-flex", "justify-content-between")

    const span = document.createElement("span")
    span.innerText = toDoInput.value

    list_item.append(span)

    const div = document.createElement("div")

    const checkBtn = document.createElement("button")
    checkBtn.classList.add("btn", "btn-light", "btn-sm")
    checkBtn.innerHTML = '<i class="fa-solid fa-check text-success"></i>'

    checkBtn.onclick = function () {
        // span
        this.parentElement.previousSibling.style.textDecoration = "line-through"
        // li
        this.parentElement.parentElement.classList.add("bg-success")

        this.remove()
    }

    const trashBtn = document.createElement("button")
    trashBtn.classList.add("btn", "btn-light", "btn-sm")
    trashBtn.innerHTML = '<i class="fa-solid fa-trash text-danger"></i>'

    div.append(checkBtn, trashBtn)
    // div.append(checkBtn) 
    // div.append(trashBtn) 

    list_item.append(div)

    list.append(list_item)

    toDoInput.value = ""
})

// Tasks
// 1. inputu sıfırlamaq üçün button (input value olduğu halda görünsün, value olmasa görünməsin)
// 2. sumbit etdikdə validasiya olunsun:
//   a. value mütləq olmalıdır
//   b. value ən az 3 simvoldan çox olmalıdır
// 3. validasiya errorları inputun aşağsında qırmızı yazılarla görünməlidir (error yoxdursa görünməsin)
// 4. silmək btn click edəndə seçilən li silinsin
// 5. list item-ları varsa listin aşağısında hamsını sil buttonu olsun və bütün itemlar silinsin
// 6. list item-ları yoxdursa list görünməsin və bootstrap alert içərisində mesaj yazılsın