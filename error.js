const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const pincode = document.getElementById('pincode');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const contactValue = contact.value.trim();
	const emailValue = email.value.trim();
    const pincodeValue = pincode.value.trim();
	const addressValue = address.value.trim();

	
	if(fnameValue === '') {
		setErrorFor(fname, 'Firstname cannot be blank');
	} else {
		setSuccessFor(fname);
	}
    if(lnameValue === '') {
		setErrorFor(lname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	if(contactValue === '') {
		setErrorFor(contact, 'Contact cannot be blank');
	} else {
		setSuccessFor(contact);
	}
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(pincodeValue === '') {
		setErrorFor(pincode, 'Pincode cannot be blank');
	} else {
		setSuccessFor(pincode);
	}
	if(addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
	} else {
		setSuccessFor(address);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
