const menuBtn = document.querySelector('.menu_icon')
const menu = document.querySelector('.menu_list')

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.toggle('active')
            menu.classList.toggle('active')
        })
    })
}
// scroll плавный переход с секции на секцию
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})
//  горит название секции в навбаре, когда мы переходим именно на ту секцию
const createSelectedSection = (root) => {
	const nav = root.querySelector('nav');

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
					let id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).classList.add('active');
				}
			})
		}, {}).observe(s);
	})
}

createSelectedSection(document.querySelector('#page'))
