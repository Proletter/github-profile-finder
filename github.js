class Github {
constructor(){
this.client_id = "ff472103f8a6c37e423d";
this.client_secret = "06b8ced7dff99181078a344bf1cbd259010bab7d";
}
async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profile = await profileResponse.json();
    return {
        profile
    }
}

}




