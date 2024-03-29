class UI {
    constructor(){
        this.profile = document.getElementById("profile");

    }
    showProfile(user){
       this.profile.innerHTML =`
       <div class="card card-body mb-3">  
        <div class="row">
        <div class= "col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a> 
        </div>
        <div class="col-md-9 mt-3">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-primary">Public gists: ${user.public_gists}</span>
            <span class="badge badge-primary">Followers: ${user.followers}</span>
            <span class="badge badge-primary">Following: ${user.following}</span>
            <br/>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Created At: ${user.created_at}</li>
           </div>

        </div>
       <div
       <h3 class="page-heading mb-3">Latest Repos</h3>
       <div id="repos></div>
       `
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
    }
    
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = '';

    }
}