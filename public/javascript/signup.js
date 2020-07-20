async function signupFormHandler(event) {
	const username = document.querySelector('#username').value.trim();
	const email = document.querySelector('#email').value.trim();
	const password = document.querySelector('#password').value.trim();
	if (username && email && password) {
		const response = await fetch('/api/users', {
			method: 'post',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		// check the response status
		if (response.ok) {
			const res = await response.json();
			document.location.assign('/');
		} else {
			console.log("Something went wrong");
		}
	}
}

document.querySelector('#signup').addEventListener('click', signupFormHandler);
document.querySelector('#signup-form').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    event.preventDefault();
    signupFormHandler(e);
  }
});
