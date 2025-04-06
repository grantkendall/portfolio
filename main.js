// Switching between projects
const projectList = document.querySelectorAll("li");
const projects = document.querySelectorAll(".project");

projectList.forEach(name => {
    name.addEventListener("click", () => {
        const targetName = name.getAttribute("data-project");
        
        projects.forEach(project => {
            project.classList.remove("active");
        });

        const targetProject = document.getElementById(targetName)
        if (targetProject) {
            targetProject.classList.add("active");
        }
    });
});

// Gallery logic
// if -> project is 'active'...
projects.forEach(project => {
    const thumbs = document.querySelectorAll(".thumb");
    const fullImg = document.querySelector(".gallery-img");
        
    thumbs.forEach(img => {
        img.addEventListener("click", () => {
            console.log(img.src);
            fullImg.src = img.src;
        })
    });
});