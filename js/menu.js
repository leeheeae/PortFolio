const menuBoxToggle = (e) => {
    e.currentTarget.classList.toggle("active");
};
const jobItemHover = (e) => {
    e.currentTarget.classList.add("acitve");
};
const jobItemLeave = (jobItem) => {
    console.log(jobItem);
};

document.querySelector(".menu-btn").addEventListener("click", menuBoxToggle);
const jobItem = document.querySelectorAll(".job-list li");

for (let item in jobItem) {
    item.addEventListener("mouseover", jobItemHover);
}
