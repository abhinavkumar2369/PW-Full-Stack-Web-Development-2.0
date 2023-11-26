// Initialize an empty map
const userMap = new Map();

// Function to add a new user record
function addUser(name, age, email) {
  userMap.set(name, { name, age, email });
}

// Function to update user information
function updateUser(name, newEmail, newAge) {
  if (userMap.has(name)) {
    const user = userMap.get(name);
    user.email = newEmail;
    user.age = newAge;
    userMap.set(name, user);
    console.log(`User with name ${name} updated.`);
  } 
  else {
    console.log(`User with name ${name} not found.`);
  }
}

// Function to delete a user record
function deleteUser(name) {
  if (userMap.has(name)) {
    userMap.delete(name);
    console.log(`User with name ${name} deleted.`);
  } 
  else {
    console.log(`User with name  ${name} not found.`);
  }
}

// Displaying the initial Data
console.log(userMap)

// Adding & Displaying Data 
addUser("abhinav",19,"abhinavkumar50362@gmail.com")
console.log(userMap)

// Updating with existing and non-existing [USER NAME]
updateUser("abhinav",23,'abhinav123@gmail.com')
updateUser("aryan",88,'aryan123@gmail.com')
console.log(userMap)

// Deleting [USERNAME]
deleteUser("abhinav")
console.log(userMap)
