const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBtn.onclick = () => {
   items.classList.add("active");
   menuBtn.classList.add("hide");
   cancelBtn.classList.add("show");
}

cancelBtn.onclick = () => {
   items.classList.remove("active");
   menuBtn.classList.remove("hide");
   cancelBtn.classList.remove("show");
}

// side bar js 
document.addEventListener("DOMContentLoaded", function () {
   const openSidebarButton = document.getElementById("openSidebarButton");
   const sidebar = document.getElementById("sidebar");

   openSidebarButton.addEventListener("click", function () {
      if (sidebar.style.right === "0px" || sidebar.style.right === "") {
         sidebar.style.right = "-300px";
      } else {
         sidebar.style.right = "0px";
      }
   });
});
