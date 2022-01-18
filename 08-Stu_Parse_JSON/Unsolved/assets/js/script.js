const requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

async function getRequests() {
  const response = await fetch(requestUrl)
  const data = await response.json();
  console.log('Github Repo Issues \n----------');
  for (let i = 0; i < data.length; i++) {
    const issue = data[i];
    console.log(issue.url);
    console.log(issue.user.login);
  }
}

getRequests()
