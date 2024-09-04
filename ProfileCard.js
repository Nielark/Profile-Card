document.addEventListener("DOMContentLoaded", function() {
    const skillContainer = document.querySelector(".show-skill");
    const skillToggleBtn = document.querySelector(".skill-toggle-btn");

    var showSkill = false;

    skillToggleBtn.addEventListener("click", () => {
        showSkill = !showSkill;

        if(showSkill){
            skillContainer.style.transform = "translateY(0px)";
            skillToggleBtn.style.top = 0;
            skillToggleBtn.style.borderRadius = "0 0 20px 20px";
            skillToggleBtn.style.backgroundColor = "white";
        }
        else {
            skillContainer.style.transform = "translateY(500px)";
            skillToggleBtn.style.top = "-4%";
            skillToggleBtn.style.borderRadius = "20px 20px 0 0";
            skillToggleBtn.style.backgroundColor = "gray";
        }
    });
})