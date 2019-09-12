const github = new Github;
const ui = new UI;

document.getElementById("searchUser").addEventListener('keyup', (e) =>{
    const inputText = e.target.value;
    if(inputText !== ""){
        github.getUser(inputText)
        .then(data => {
            if(data.profile.message === "Not Found"){
              ui.showAlert("User Not Found", "alert alert-danger");
            }
            else{
               ui.showProfile(data.profile);
            }
            console.log(data)
        });
      
    }
        else{
            ui.clearProfile();
        }});