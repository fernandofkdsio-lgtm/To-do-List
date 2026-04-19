
// Textarea
const Text = document.querySelector("#text")


function TaskAdd() {

    if (Text.value.trim() == "") {
        alert("Veuillez remplir d'abord")
        return
    }

    // conteneur principal
    const task = document.createElement("div")
    task.style.display = "flex"
    task.style.transition = "0.5s"
    task.style.justifyContent = "space-between"
    task.style.alignItems = "center"
    task.style.width = "320px"
    task.style.background = "rgb(53, 53, 53)"
    task.style.height = "45px"
    task.style.marginTop = "1rem"
    task.style.marginBottom = "1rem"
    task.style.borderLeft = "4px solid rgb(0, 119, 255)"
    task.style.color = "rgb(0, 200, 255)"
    task.style.padding = "14px 10px"
    task.style.fontFamily = "sans-serif"
    task.style.fontSize = "13px"

    // bloc gauche (checkbox + texte)
    const left = document.createElement("div")
    left.style.display = "flex"
    left.style.alignItems = "center"
    left.style.gap = "10px"

    const valide = document.createElement("input")
    valide.type = "checkbox"

    const taskText = document.createElement("span")
    taskText.textContent = Text.value

    // barrer le texte seulement (pas tout le bloc)
    valide.addEventListener("click", () => {
        taskText.style.textDecoration = valide.checked
            ? "line-through"
            : "none"
    })

    left.appendChild(valide)
    left.appendChild(taskText)

    // bouton droite
    const reset = document.createElement("button")
    reset.textContent = "❌"
    reset.style.height = "20px"

    reset.addEventListener("click", () => {
        task.remove()
    })



    // assemblage
    task.appendChild(left)
    task.appendChild(reset)

    document.querySelector("#view").appendChild(task)

    Text.value = ""
    // Text.focus()
}





const buttonAdd= document.querySelector("#add")
buttonAdd.addEventListener("click", (e)=> TaskAdd(e))
