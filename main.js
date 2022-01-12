maj.addEventListener('change', function (event) {
	generatePwd();
});
num.addEventListener('change', function (event) {
	generatePwd();
});
spechar.addEventListener('change', function (event) {
	generatePwd();
});
pwdLength.addEventListener('change', function (event) {
	generatePwd();
});
generate.addEventListener('click', function (event) {
	generatePwd();
});

let generatePwd = () => {
	let pwdChars = 'abcdefghijklmnopqrstuvwxyz';
	if (maj.checked) {
		pwdChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (num.checked) {
		pwdChars += '0123456789';
	}
	if (spechar.checked) {
		pwdChars += '[$&+,:;=?@#|\'<>".-^*()%!]';
	}

	let pwdLen = parseInt(pwdLength.value);
	let randPassword = Array(pwdLen)
		.fill(pwdChars)
		.map((x) => x[Math.floor(Math.random() * x.length)])
		.join('');
	document.getElementById('result').innerHTML = randPassword;
};
