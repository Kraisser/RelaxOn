;let materialsModalModule = (function() {
	function modalFun() {

		let dspContainers;

		this.openModal = function() {
			document.body.insertAdjacentHTML(`beforeend`, `<div class="modalWindow"></div>`);

		}

		this.init = function() {
			dspContainers = document.querrySelectorAll(`.dspPages`);
			dspContainers.addEventListener(`click`, matModal.openModal());
		}
	}

	return {
		modalLogicInit: function() {
			const matModal = new modalFun();
			matModal.init();
		}
	}
}());