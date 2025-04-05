//your JS code here. If required.
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const rememberCheckbox = document.getElementById('checkbox');
// const submitBtn = document.getElementById('submit');
// const existingBtn = document.getElementById('existing');

// Check localStorage on load
window.onload  = function() {
	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");
      
      if (savedUsername && savedPassword) {
        document.getElementById("existing").style.display = "inline-block";
      }
};
// Submit behavior
document.getElementById("loginForm").addEventListener("submit",function (e) {
	e.preventDefault();
	const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
	 const remember = document.getElementById("checkbox").checked;

	 alert("Logged in as " + username);

	if(rememberCheckbox.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		 document.getElementById("existing").style.display = "inline-block";
	}
	else
	{
		localStorage.removeItem("username");
        localStorage.removeItem("password");
       document.getElementById("existing").style.display = "none";
	}
	
});
// Login as existing user
document.getElementById("existing").addEventListener("click", function () {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert("Logged in as " + savedUsername);
      }
});














