

//used dom to get the sidebar used onclick so when it is pushed the sidebar displays flex//\
function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}


//function for the down arrow to be clicked and scroll down the page 
function scrollDown() {
    //scrollOffset is how much the page will scroll down
    const scrollOffset = 1250; 

    // Calculate the new scroll position
    const newScrollPosition = window.pageYOffset + scrollOffset;

    // To figure out where to scroll the page, I take how much it's already scrolled and add how much more we want it to scroll.
    window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth' 
    });
}



