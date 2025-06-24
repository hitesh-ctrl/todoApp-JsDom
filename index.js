let todos=[]
let div=document.createElement("div")
div.setAttribute("id","todos")
document.querySelector("body").append(div)
const add=()=>{
    
    let inp=document.querySelector("input").value.trim()
    if (inp !== "") { 
        todos.push(inp);
        render();
    }
}

const del=(i)=>{
    todos.splice(i,1)
    render()
}

const render=()=>{
    
        document.getElementById("todos").innerHTML=""
        for(let i=0;i<todos.length;i++){
            let el=document.createElement("div");
            
            let spel=document.createElement("span")
            spel.innerText=todos[i]

            let btn=document.createElement("button")
            btn.innerText="delete"
            btn.onclick=()=>{del(i)}
            
            
            let editBtn=document.createElement("button")
            editBtn.innerText="Edit"
            
            editBtn.onclick=()=>{
                let editInp=document.createElement("input")
                editInp.type="text"
                editInp.value=todos[i]

                let saveBtn=document.createElement("button")
                saveBtn.innerText="Save"
                saveBtn.onclick=()=>{
                    let updatedtxt=editInp.value.trim();
                    if(updatedtxt !== ""){
                        todos[i]=updatedtxt;
                    
                    }
                    render()
                }
                
                el.replaceChild(editInp, spel);
                el.replaceChild(saveBtn,editBtn)
            }
            div.append(el)
            el.append(spel,btn,editBtn)
            
        
        }
        document.querySelector("input").value=""
    }
