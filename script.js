// Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

// Search Lessons by ID
function searchLessons() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let lessons = document.querySelectorAll(".lesson");

    lessons.forEach(lesson => {
        if (lesson.id.replace(/-/g, " ").includes(input)) {
            lesson.style.display = "block";
        } else {
            lesson.style.display = "none";
        }
    });
}

