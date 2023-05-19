const repoListElement = document.getElementById('repo-list');

fetch('https://api.github.com/users/mojombo/repos')
  .then(response => response.json())
  .then(repos => {
    const repoContainerElement = document.createElement('div');
    repoContainerElement.classList.add('repo-container');

    repos.forEach(repo => {
      const { name, owner, html_url } = repo;

      const repoElement = document.createElement('div');
      repoElement.classList.add('repo');

      const repoNameElement = document.createElement('a');
      repoNameElement.href = html_url;
      repoNameElement.target = '_blank';
      repoNameElement.textContent = name;

      const ownerElement = document.createElement('p');
      ownerElement.textContent = `Owner: ${owner.login}`;

      repoElement.appendChild(repoNameElement);
      repoElement.appendChild(ownerElement);

      repoContainerElement.appendChild(repoElement);
    });

    repoListElement.appendChild(repoContainerElement);
  })
  .catch(error => {
    console.log('Error:', error);
  });
