// Linking project name with project content
const projectList = document.querySelectorAll("li");
const projects = document.querySelectorAll(".project");

projectList.forEach(name => {
    name.addEventListener("click", () => {
        const targetName = name.getAttribute("data-project");
        
        projects.forEach(project => {
            project.classList.remove("active");
        });

        const targetProject = document.getElementById(targetName);
        if (targetProject) {
            targetProject.classList.add("active");
        };

        resetGallery();
    });
});

function resetGallery() {
    const gallery = document.querySelector(".gallery");
    const fullImg = document.querySelector(".gallery-img");
    const firstThumb = gallery.querySelector(".thumb");

    if (firstThumb) {
        fullImg.src = firstThumb.src;
    };
};

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("thumb")) {
        const fullImg = event.target.closest(".gallery").querySelector(".gallery-img");
        fullImg.src = event.target.src;
    };
});
