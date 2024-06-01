// var helmoo = document.getElementById("helmoo")
// console.log("helmoo" ,helmoo)

// function addtod(){
//     var firstParents = document.getElementById("firstParents")
// }
function addTodo() {
        var todoParent = document.getElementById("todoParent")
         // 1.get input
        var todoInput = document.getElementById("todoInput")
            if (todoInput.value.length < 3) {
                alert("NOT AXCESS OF TODO APP       ")
                return
            }
            // console.log("todoInput", todoInput.value)
    
        var li  = document.createElement("li")
        li.innerHTML = todoInput.value
        // console.log("li",li)
        todoParent.appendChild(li)
        todoInput.value = ""   
        var eidButt = document.createElement("button")
        eidButt.setAttribute("onclick", "editTodo(this)")
        eidButt.innerHTML = "Edit value"
        var deleButt = document.createElement("button")
        deleButt.innerHTML = "DELETE VALUE"
        deleButt.setAttribute("onclick" , "editmee( this)")
        
        
        
        
        // console.log("eidButt",deleButt )
    
    
        li.appendChild(eidButt)
        li.appendChild(deleButt)
            
}



function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    // console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}

function editmee(ele){
    console.log("editmee" , ele.parentNode)
    ele.parentNode.remove()
}









function editTodo(ele) {

    var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
    console.log(editVal)
    ele.previousSibling.nodeValue = editVal

}



