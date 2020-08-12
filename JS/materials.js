;let materialsModalModule = (function() {
	function modalFun() {

		let dspContainers;

		this.openModal = function() {
			document.body.insertAdjacentHTML(`beforeend`, `<div class="modalWindow"></div>`);

		}

		this.resizeModalWindow = function() {
			
		}

		this.init = function() {
			dspContainers = document.querySelectorAll(`.dspPages`);
			console.log(dspContainers[0]);
			for (let i = 0; i < dspContainers.length; i++) {
				console.log(i);
				dspContainers[i].addEventListener(`click`, () => this.openModal());
			}
		}
	}

	return {
		modalLogicInit: function() {
			const matModal = new modalFun();
			matModal.init();
		}
	}
}());

materialsModalModule.modalLogicInit();