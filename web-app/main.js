const userListElement = document.getElementById('user-list');

fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(users => {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    users.forEach(user => {
      const { login, avatar_url, repos_url } = user;

      const userElement = document.createElement('div');
      userElement.classList.add('user');

      const avatarElement = document.createElement('img');
      avatarElement.src = avatar_url;

      const loginElement = document.createElement('a');
      loginElement.href = repos_url;
      loginElement.textContent = login;

      userElement.appendChild(avatarElement);
      userElement.appendChild(loginElement);

      userContainer.appendChild(userElement);
    });

    userListElement.appendChild(userContainer);
  })
  .catch(error => {
    console.log('Error:', error);
  });
