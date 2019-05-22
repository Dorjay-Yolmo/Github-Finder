class Github {
  constructor() {
    this.client_id = 'fb8e0f3510c5fb5d3f39';
    this.client_secret = 'e61d970e42aa52de36fdb52fe0453acb9e9013a5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

}