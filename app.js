
  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".sidebar ul li");
    
    listItems.forEach(function(item) {
      item.addEventListener("click", function() {
        // Remove active class from all list items
        listItems.forEach(function(li) {
          li.classList.remove("active");
        });
        
        // Add active class to the clicked list item
        this.classList.add("active");
      });
    });
  });
