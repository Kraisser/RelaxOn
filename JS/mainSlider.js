;let sliderModule = (function() {
	function sliderModuleFun () {

		let that = this,
			controlNext = null,
			controlPrev = null,
			intervalSec = 0,
			interval = null,
			curSlide = 0,
			slidesCollection = null,
			pause = false;

		this.startInterval = function() {
			interval = setInterval(this.moveSlide, intervalSec, false);
		}

		this.stopInterval = function() {
			clearInterval(interval);
		}

		this.addLinks = function() {
			for (let i = 0; i < slidesCollection.length; i++) {
				dotsContainer.insertAdjacentHTML(`beforeend`, `<div class="slideDot" data-slide-num="${i}"></div>`);
			}
			
		}

		this.addEvents = function() {
			controlNext.addEventListener(`click`, () => this.moveSlide(true));
			controlPrev.addEventListener(`click`, () => this.moveSlide(false));
			document.getElementById(`sliderDivanContainer`).addEventListener(`click`, that.stopInterval);
			dotsContainer.addEventListener(`click`, (e) => this.goSlide(e));
		}

		this.goSlide = function(e) {
			if (e.target.classList.contains(`slideDot`)) {
				that.moveSlide(false, e.target.dataset.slideNum);
			}
		}

		this.moveSlide = function(direction, exactSlide) {
			slidesCollection[curSlide].classList.remove(`showSlide`);
			if (exactSlide) {
				curSlide = +(exactSlide);
			} else {
				curSlide = ((direction ? curSlide - 1 : curSlide + 1) + slidesCollection.length) % slidesCollection.length;
			}
			slidesCollection[curSlide].classList.add(`showSlide`);
		}

		this.init = function(interval) {
			slidesCollection = document.querySelectorAll(`.slideDivan`)
			intervalSec = interval * 1000;
			controlNext = document.getElementById(`prevControl`);
			controlPrev = document.getElementById(`nextControl`);
			dotsContainer = document.getElementById(`dotsContainer`);
			this.addLinks();
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