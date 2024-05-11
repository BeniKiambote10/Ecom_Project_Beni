
//make the navbar sticky //
const header = document.querySelector("nav");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})



function toggleMenu() {
    let navMenu = document.querySelector('.navmenu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}


//used dom to get the sidebar used onclick so when it is pushed the sidebar displays flex//

function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}


//this function is for showing the search box when the search icon is pushed and making it dissapear again//

function showSearchBox() {
    const searchBox = document.querySelector(".searchBoxCon");
    const searchIcon = document.querySelector(".nav_search");


    if (searchBox.style.display === "flex") {
        searchBox.style.display = "none";
        searchIcon.style.display = "flex"; // Show the search icon when hiding the search box
    } else {
        searchBox.style.display = "flex";
        searchIcon.style.display = "none"; // Hide the search icon when showing the search box
    }
}


