document.addEventListener("DOMContentLoaded", function() {
    //make sure arrow is clickable//
    const scrollArrow = document.querySelector('.scroll-down');
    const secondSection = document.querySelector('#second-section');

    //check if the elements exist//
    if (scrollArrow && secondSection) {
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault(); //prevent default arrow behavior
            secondSection.scrollIntoView({ behavior: 'smooth'});

            //rotate arrow up after click
            scrollArrow.computedStyleMap.transform = "translateX(-50%) rotate(180deg)";
        });
    }else {
        console.error("scroll arrow or second section not found");
    }
});