// GitHub repository information
const username = 'InterfaceGuy';
const repoName = 'Noosphere';

// Get the submodules container element
const submodulesContainer = document.getElementById('submodules');

// Fetch the repository contents from the GitHub API
fetch(`https://api.github.com/repos/${username}/${repoName}/contents/`)
  .then(response => response.json())
  .then(data => {
    // Filter out the sub-directories (sub-modules)
    const submodules = data.filter(item => item.type === 'dir').map(item => item.name);

    // Loop through the submodules array and create a paragraph for each sub-module
    submodules.forEach(submodule => {
      const paragraph = document.createElement('p');
      paragraph.textContent = submodule;
      submodulesContainer.appendChild(paragraph);
    });
  })
  .catch(error => {
    console.error('Error fetching repository contents:', error);
  });