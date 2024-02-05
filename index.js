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

    
    
   
   const cancelbt = document.createElement("button");
    boxel.append(cancelbt);
    cancelbt.textContent = "X";
    cancelbt.addEventListener("click", () => {
     boxel.style.display = "none"
   })
    

   boxel.addEventListener("click", () => {
     boxel.style.backgroundColor = "rgb(86, 129, 86)";
     boxel.textContent ="✓" + jssearchel.value 
    
   })
    
    return boxel;
    
    
}




    
 





