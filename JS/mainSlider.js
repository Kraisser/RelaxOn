;let sliderModule = (function() {
	function sliderModuleFun () {

		let that = this,
			controlNext = null,
			controlPrev = null,
			intervalSec = 0,
			interval = null,
			curSlide = 0,
			slidesCollection = null,
			dotsCollection = null;

		this.startInterval = function() {
			interval = setInterval(this.moveSlide, intervalSec, false);
		}

		this.stopInterval = function() {
			clearInterval(interval);
		}

		this.addDots = function() {
			for (let i = 0; i < slidesCollection.length; i++) {
				if (i === 0) {
					dotsContainer.insertAdjacentHTML(`beforeend`, `<div class="slideDot activeSlideDot" data-slide-num="${i}"></div>`);
				} else {
					dotsContainer.insertAdjacentHTML(`beforeend`, `<div class="slideDot" data-slide-num="${i}"></div>`);
				}
			}
			dotsCollection = document.querySelectorAll(`.slideDot`);
			dotsContainer.style.left = `50%`;
			this.adaptiveSizing();
			
		}

		this.addEvents = function() {			
			document.getElementById(`sliderDivanContainer`).addEventListener(`click`, that.stopInterval);
			controlNext.addEventListener(`click`, () => this.moveSlide(true));
			controlPrev.addEventListener(`click`, () => this.moveSlide(false));
			window.addEventListener(`resize`, that.adaptiveSizing);
			dotsContainer.addEventListener(`click`, (e) => this.goSlide(e));
		}

		this.goSlide = function(e) {
			if (e.target.classList.contains(`slideDot`)) {
				that.moveSlide(false, e.target.dataset.slideNum);
			}
		}

		this.moveSlide = function(direction, exactSlide) {
			that.toggleClassFromSlide();
			if (exactSlide) {
				curSlide = +(exactSlide);
			} else {
				curSlide = ((direction ? curSlide - 1 : curSlide + 1) + slidesCollection.length) % slidesCollection.length;
			}
			that.toggleClassFromSlide();
		}

		this.toggleClassFromSlide = function() {
			dotsCollection[curSlide].classList.toggle(`activeSlideDot`);
			slidesCollection[curSlide].classList.toggle(`showSlide`);
		}

		this.adaptiveSizing = function() {
			sliderUl.style.height = `${sliderUl.offsetWidth / 2}px`;
			dotsContainer.style.marginLeft = `-${dotsContainer.offsetWidth / 2}px`;
		}

		this.init = function(interval) {
			slidesCollection = document.querySelectorAll(`.slideDivan`)
			intervalSec = interval * 1000;
			sliderUl = document.getElementById(`slidesUl`);
			controlNext = document.getElementById(`prevControl`);
			controlPrev = document.getElementById(`nextControl`);
			dotsContainer = document.getElementById(`dotsContainer`);
			this.addDots();
			this.addEvents();
			this.startInterval();
		}
	}

	return {
		sliderLogicInit: function(interval) {
			const slider = new sliderModuleFun();
			slider.init(interval);
		}
	}
}());