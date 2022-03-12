//Sign UP

const newUser = document.getElementById("newUser");

if (newUser) {
  newUser.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.userPass.value != e.target.passConfirm.value) {
      alert("Password and Confirm Password did not match");
    } else {
      const signUp = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: e.target.userName.value,
          email: e.target.userEmail.value,
          userContact: e.target.userContact.value,
          pass: e.target.userPass.value,
          confirmPass: e.target.passConfirm.value,
        }),
      };

      fetch(`${window.location.origin}/api/v1/users/signup`, signUp)
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "error") {
            alert(data.message);
          }
          if (data.status == "success") {
            window.location.href = `${window.location.origin}/login`;
          }
        });
    }
  });
}

// //Login
const userLogin = document.getElementById("login");
if (login) {
  userLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const userLogin = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: e.target.userName.value,
        pass: e.target.userPass.value,
      }),
    };
    fetch(`${window.location.origin}/api/v1/users/login`, userLogin)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "error") {
          alert(data.message);
        }
        if (data.status == "success") {
          window.location.href = `${window.location.origin}/`;
          console.log(data);
          localStorage.setItem("token", data.token);
        }
      });
  });
}
