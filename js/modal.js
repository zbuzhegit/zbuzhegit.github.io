var modal = document.getElementById('modal');
function toggleModal(option) {
	if (option == 'show') {
		modal.style.display = 'flex'
	}else {
		modal.style.display = 'none'
	}
}

var alinaModal = document.getElementById('alinaModal');
var kabiModal = document.getElementById('kabiModal');
var kamiModal = document.getElementById('kamiModal');
var ernurModal = document.getElementById('ernurModal');
var dianaModal = document.getElementById('dianaModal');
function showModal(option) {
	if(option == 'alina'){
		alinaModal.style.display = 'flex'
	}else if (option == 'kabi') {
		kabiModal.style.display = 'flex'
	}else if (option == 'kami') {
		kamiModal.style.display = 'flex'
	}else if (option == 'ernur') {
		ernurModal.style.display = 'flex'
	}else if (option == 'diana'){
		dianaModal.style.display = "flex"
	}else {
		alinaModal.style.display = 'none';
		kabiModal.style.display = 'none';
		kamiModal.style.display = 'none';
		ernurModal.style.display = 'none';
		dianaModal.style.display = 'none'
	}
}
