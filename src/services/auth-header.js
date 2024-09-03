export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user);
  
    if (user && user.token) {
        console.log(user.token);
        return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }