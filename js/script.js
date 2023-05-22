//---Menu

function Burger(burger, menu) {
    burger = burger;
    menu = menu;
    let isOpen = false;

    if(!burger || !menu) {
        throw new Error("text");
    }

    this.getIsOpen = function() {
        return isOpen;
    }

    const getScrollbarWidth = () =>
          window.innerWidth - document.documentElement.clientWidth;

    menu.querySelectorAll('.menu__link').forEach(function(elem) {
        elem.addEventListener('click', function() {
            if (isOpen) this.close();
        }.bind(this))
    }.bind(this))

    this.open = function() {
        const scrollWidth = getScrollbarWidth();
        burger.classList.add('_active');
        menu.classList.add('_active');
        document.body.classList.add('_lock');
        isOpen = true;
        document.body.style.paddingRight = scrollWidth + 'px';
    }

    this.close = function() {
        burger.classList.remove('_active');
        menu.classList.remove('_active');
        document.body.classList.remove('_lock');
        isOpen = false;
        document.body.style.paddingRight = 0 + 'px';
    }

    this.toggle = function() {
        isOpen ? this.close() : this.open();
    }

    burger.addEventListener('click', function(event) {
        this.toggle();
    }.bind(this))
}

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

const burgerMenu = new Burger(burger, menu);

//---Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}

//---Swiper

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	},
});

//---Gallery

const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1, 
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}

//---Modal

 // Получаем модальное окно
 let modal = document.getElementById("myModal");

 // Получаем кнопку, открывающую модальное окно
 let btn = document.getElementById("submitBtn");

 // Получаем элемент <span>, который используется для закрытия модального окна
 let span = document.getElementsByClassName("close")[0];

 // Когда пользователь нажимает кнопку, открывается модальное окно
 btn.addEventListener("click", function() {
   modal.style.display = "block";
 });

 // Когда пользователь нажимает на <span> (x), закрывается модальное окно
 span.addEventListener("click", function() {
   modal.style.display = "none";
 });

 // Когда пользователь щелкает вне модального окна, оно закрывается
 window.addEventListener("click", function(event) {
   if (event.target == modal) {
	 modal.style.display = "none";
   }
 });