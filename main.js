const workflows = document.querySelector('.nav-workflows');
const usd = document.querySelector('.nav-usd');
const workflowsDropdown = document.querySelector('.nav-workflows-dropdown-cont');
const usdDropdown = document.querySelector('.nav-usd-dropdown-cont');
const bodyCont = document.querySelector('body');
const bodyArrow = document.querySelector('.header-body-arrow');
const bigImgItems = document.querySelector('.big-img-items');
const usdMobile = document.querySelector('.nav-usd-mobile');
const usdDropdownMobile = document.querySelector('.nav-usd-dropdown-cont-mobile');
const mobileNavCont = document.querySelector('.mobile-nav-cont');
const mediaQuery = window.matchMedia('(max-width: 1150px)');
const mediaQuery2 = window.matchMedia('(min-width: 1149px');
const mediaQuery3 = window.matchMedia('(min-width: 768px');
const mobileNavX = document.querySelector('.mobile-nav-box-x');
const mobileNavBoxCont = document.querySelector('.mobile-nav-box-cont');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mainCont = document.querySelector('.main-cont');
const shopDropDown = document.querySelector('.mobile-nav-shop-dropdown-cont');
const shopDropDownButton = document.querySelector('.nav-shop');
const shopDropDownHeader = document.querySelector('.mobile-nav-shop-dropdown-header');
const mobileShopDropDownButton = document.querySelector('.mobile-nav-shop');


let currentPos;

/*
window.document.addEventListener('scroll', () => {
    currentPos = window.pageYOffset;
    console.log(currentPos);
})
*/

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function handleMediaQueryChange(e) {
  if (e.matches) {
    mobileNavCont.classList.remove('hidden2');
    mobileNavCont.style.transition = "all 0.5s";
  }
}

function handleMediaQueryChange2(e) {
  if (e.matches) {
    mobileNavBoxCont.classList.add('hidden2');
    mobileNavCont.classList.add('hidden2');
    mobileNavCont.style.transition = "all 0s";
    mainCont.classList.remove('disabled');
  }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);
mediaQuery2.addEventListener('change', handleMediaQueryChange2);
/*mediaQuery3.addEventListener('change', handleMediaQueryChange3);*/

bodyArrow.addEventListener('click', () => {
    bigImgItems.scrollIntoView({behavior: 'smooth'});
})

document.addEventListener("click", (evt) => {
    const flyoutEl = workflows;
    const flyoutEl2 = usd;
    const flyoutEl3 = usdMobile;
    const flyoutEl4 = mobileNavMenu;
    const flyoutEl5 = mobileNavBoxCont;
    const flyoutEl6 = mobileNavX;
    const flyoutEl7 = shopDropDownButton;
    const flyoutEl8 = shopDropDown;
    const flyoutEl9 = shopDropDownHeader;
    const flyoutEl10 = mobileShopDropDownButton;
    let targetEl = evt.target; // clicked element      
    do {
        if(targetEl == flyoutEl) {
            workflowsDropdown.classList.toggle('hidden2');
            usdDropdown.classList.add('hidden2');
            return;
        }
        if(targetEl == flyoutEl2) {
            usdDropdown.classList.toggle('hidden2');
            workflowsDropdown.classList.add('hidden2');
            return;
        }
        if(targetEl == flyoutEl3) {
            usdDropdownMobile.classList.toggle('hidden2');
            return;
        }
        if(targetEl == flyoutEl4) {
            mobileNavBoxCont.classList.remove('hidden2');
            mainCont.classList.add('disabled');
            return;
        }
        if(targetEl == flyoutEl5) {
            mobileNavBoxCont.classList.remove('hidden2');
            mainCont.classList.add('disabled');
            return;
        }
        if(targetEl == flyoutEl6) {
            mobileNavBoxCont.classList.add('hidden2');
            mainCont.classList.remove('disabled');
            return;
        }
        if(targetEl == flyoutEl7) {
            shopDropDown.classList.remove('hidden2');
            mainCont.classList.add('disabled');
            return;
        }
        if(targetEl == flyoutEl8) {
            shopDropDown.classList.remove('hidden2');
            mainCont.classList.add('disabled');
            return;
        }
        if(targetEl == flyoutEl9) {
            shopDropDown.classList.add('hidden2');
            mainCont.classList.remove('disabled');
            return;
        }
        if(targetEl == flyoutEl10) {
            shopDropDown.classList.remove('hidden2');
            mainCont.classList.add('disabled');
            return;
        }

        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    workflowsDropdown.classList.add('hidden2');
    usdDropdown.classList.add('hidden2');
    usdDropdownMobile.classList.add('hidden2');
    mobileNavBoxCont.classList.add('hidden2');
    mainCont.classList.remove('disabled');
    shopDropDown.classList.add('hidden2');
});