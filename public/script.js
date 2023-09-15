

const navBtn = document.getElementById('navBtn');
const navMain = document.getElementById('navMain');
const navWrapper = document.getElementById('navWrapper');
const navBar = navWrapper.querySelector('#navBar');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
    navBtn.classList.toggle('bg-slate-100');
});