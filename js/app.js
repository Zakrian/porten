// Меню бургер ===============================================

//Логика скрипта бургера:
//1. Получаем объект бургер
//2. Получаем меню, которое нужно открыть
//3. Вешаем обработчик события click на бургер (п.1)
//4. Добавляем (toggle) класс к меню (п.2)

const menuBurger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active-menu');
		if (menuBody) {
			menuBody.classList.toggle('_active-menu');
		}
	})
}

// Moving DOM-element =============================================================
const topHeadRight = document.querySelector('.top-header_right');

if (window.innerWidth <= 550) {
	menuBody.appendChild(topHeadRight)
}

// Animation on scroll ============================================================
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
	setTimeout(() => {
		animOnScroll();
	}, 500);
}