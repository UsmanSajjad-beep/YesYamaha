const navbar = document.getElementById('nav');
const logo = document.getElementById('logo');
const anchor = document.querySelectorAll('#anchor');
const sections = document.querySelectorAll('.section')

document.addEventListener('scroll', () => {
        navbar.classList.toggle('nav-active', window.scrollY > 0);
        logo.classList.toggle('logo-active', window.scrollY > 0);
        anchor.forEach(anchors => anchors.classList.toggle('anchor-active', window.scrollY > 0))
    
});


window.onscroll = () => {
        sections.forEach(sector => {
                let top = window.scrollY;
                let windowOffet = sector.offsetTop;
                let heightofOffset = sector.offsetHeight;
                let id = sector.getAttribute('id');

                if (top >= windowOffet && top < windowOffet + heightofOffset) {
                        anchor.forEach(links => {
                                links.classList.remove('active');
                                if (links.getAttribute('href').includes(id)) {
                                        links.classList.add('active')
                                }
                        })
                }
        })
}
