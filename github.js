class GitHub{
    constructor(){
        this.client_id = "139ae155dd5f9e1e7e1b";
        this.client_secret = "f4e98ff0ebb4ce229570eec0fced3288e64213e7";
        this.repo_count = 5;
        this.repo_sort = "created: asc"
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return{
            // profile : prifile,
            profile,
            repos
        }
    }
}
