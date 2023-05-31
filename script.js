let isActive = false;

function Toggle () {
    if (isActive) {
        document.querySelector(selectors, '.hamburger').className = 'hamburger';
        document.querySelector(selectors, '.shadow').className = 'shadow';
        document.querySelector(selectors, '.mobile-nav').className = 'mobile-nav';
        isActive = false;
    } else {
        //Activate Toggle
        document.querySelector(selectors, '.hamburger').className = 'hamburger active';
        document.querySelector(selectors, '.shadow').className = 'shadow active';
        document.querySelector(selectors, '.mobile-nav').className = 'mobile-nav';
        isActive = true;
        
    }
}