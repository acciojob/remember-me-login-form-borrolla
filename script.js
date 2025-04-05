//your JS code here. If required.
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Check localStorage on load
window.onload  = function() {
	const savedUsername = localStorage.getItem('username');
	const savedPassword = ;pcalStorage.getItem('password');

	if (savedUsername && savedPassword) {
        existingBtn.style.display = 'inline-block';
      } else {
        existingBtn.style.display = 'none';
      }
};
// Submit behavior
document.getElementById('loginForm').addEventListener('submit',function (e) {
	e.preventDefault();
	const username = usernameInput.value;
      const password = passwordInput.value;

	alert(`Logged in as ${username}`);

	if(rememberCheckbox.checked){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		 existingBtn.style.display = 'inline-block';
	}
	else
	{
		localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
	}
	
});
// Login as existing user
existingBtn.addEventListener('click', function () => {
	const savedUsername = localStorage.getItem('username');
	if(savedUsername){
		alert(`Logged in as ${savedUsername} `);
	}
});














