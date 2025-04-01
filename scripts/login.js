document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('data/credentials.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);
            if (user) {
                const baseUrl = window.location.origin;

                if (baseUrl.includes("srsahoo30.github.io")) {
                    window.location.href = "/projectcircuitech/dashboard";
                } else {
                    window.location.href = "/dashboard";
                }
            } else {
                document.getElementById('error-message').textContent = 'Invalid username or password';
            }
        })
        .catch(error => console.error('Error fetching credentials:', error));
});