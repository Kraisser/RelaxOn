document.getElementById(`hamburgerIconContainer`).addEventListener(`click`, function (e) {
	e.currentTarget.classList.toggle(`open`);
	document.getElementById(`hamburgerNavMenu`).classList.toggle(`hideMenu`);
});


let scrollTimerId,
		stocksHideFlag = false;

window.addEventListener(`scroll`, function() {
	clearTimeout(scrollTimerId);
	if (document.body.clientWidth <= 700) {
		scrollTimerId = setTimeout(stocksHide, 50);
	}
});

window.addEventListener(`resize`, function() {
	if (document.body.clientWidth >= 700) {
		stocksShow();
	}
});

function stocksShow() {
	if (stocksHideFlag) {
		document.getElementById(`stocks`).style.height = `60px`;
		hamburgerTopAdopt(160);
		stocksHideFlag = false;
	}
}

function stocksHide() {
	if (pageYOffset >= 60) {
		document.getElementById(`stocks`).style.height = `0px`;		
		hamburgerTopAdopt(100);
		stocksHideFlag = true;
	} else {
		stocksShow();
	}
}

function hamburgerTopAdopt(hamburgerTop) {
	document.getElementById(`hamburgerNavMenu`).style.top = `${hamburgerTop}px`;
}

sliderModule.sliderLogicInit(2); // Интервал в секундах