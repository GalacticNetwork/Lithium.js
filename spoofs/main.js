const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
 if(event.code === "Enter") {
        search();
    }	
});
function search() {
  window.location.replace("/");
  
} 