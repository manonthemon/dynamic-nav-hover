const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
this.classList.add('trigger-enter')
setTimeout(() => this.classList.add('trigger-enter-active'), 150)
background.classList.add('open')

const dropdown = this.querySelector('.dropdown')

const dropdownCords = dropdown.getBoundingClientRect() //Get coordinates of the dropdown
const navCords = nav.getBoundingClientRect() //Gets coordinates of nav in case it's not on top of page

const cords = {
    height: dropdownCords.height,
    width: dropdownCords.width
}

background.style.setProperty('width', `${cords.width}px`);
background.style.setProperty('height', `${cords.height}px`);

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))