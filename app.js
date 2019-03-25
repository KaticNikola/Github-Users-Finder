const github = new GitHub ;
const ui = new UI;

const searchUser =  document.getElementById('searchUsers');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;t 
    if(userText !== ''){
        github.getUser(userText)
            .then( data =>{
                if(data.profile.message === "Not Found") {
                    ui.showAlert("User Not Found", "alert alert-danger");
                } else {
                    ui.showProfile(data.profile);js
                    ui.showRepos(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
})