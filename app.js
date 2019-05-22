// INIT Github
const github = new Github;
// INIT UI
const ui = new UI;

// Search Input
const searchUser = document.querySelector('#searchUser');

// Add Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUsers(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show an Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Clear Alert
          ui.clearAlert();
          // Show the Profile
          ui.showProfile(data.profile);
          // Shoe the repos
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile 
    ui.clearProfile();
  }
})