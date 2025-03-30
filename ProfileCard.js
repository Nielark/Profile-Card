document.addEventListener("DOMContentLoaded", function() {
    //* MODAL DISPLAY
    document.querySelector(".about-me").addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");
    
        modal.classList.toggle("display-modal");
        overlay.classList.toggle("display-overlay");
    });
    
    //* MODAL CLOSE
    document.querySelector(".btn-OK").addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");
    
        modal.classList.toggle("display-modal");
        overlay.classList.toggle("display-overlay");
    });
})