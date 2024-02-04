const jssearchel = document.querySelector("#js-search-el")
const jssearchbt = document.querySelector("#js-search-bt")
const addlist =  document.querySelector("#js-list")


jssearchbt.addEventListener("click", () => {
  
      joblist()
      
    
   })


   
const joblist = () => {

    const boxel = document.createElement("div");
    boxel.classList.add("box");
    boxel.textContent = jssearchel.value 
    addlist.append(boxel)

    
    const editbt = document.createElement("button");
    boxel.append(editbt);
    editbt.textContent = "edit";
    editbt.addEventListener("click", () => {
     boxel.style.display = "none"
   })
   
   const cancelbt = document.createElement("button");
    boxel.append(cancelbt);
    cancelbt.textContent = "X";
    cancelbt.addEventListener("click", () => {
     boxel.style.display = "none"
   })
    

   boxel.addEventListener("click", () => {
     boxel.style.backgroundColor = "rgb(86, 129, 86)";
     boxel.textContent =    "sucssses";
   
   })
    
    return boxel;
    
    
}




    
 





