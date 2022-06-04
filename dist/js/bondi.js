// ====================================== Start Our Work ======================================
let shuffleItem = document.querySelectorAll(".our-work ul li"),
    shuffleBox = document.querySelectorAll(".our-work .row > div");

shuffleItem.forEach(item => {
  item.addEventListener("click", (e) => {
    //- Remove active class from all links
    e.target.parentElement.querySelectorAll("li").forEach(el => {
      el.classList.remove("active");
    });
    //- Add active class in clicked element
    e.target.classList.add("active");

    //- Hide all box
    shuffleBox.forEach(box => {
      box.style.transform = "scale(0)";
      setTimeout(_ => {
        box.style.display = "none";
      }, 300);
      
      if (box.classList.contains(e.target.dataset.work)) {
        
        setTimeout(_ => {
          box.style.transform = "scale(1)";
          box.style.display = "block";
        }, 300);
      }
    });
  });
});
// ====================================== End Our Work ======================================