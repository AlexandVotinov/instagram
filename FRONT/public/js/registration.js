const inputs = document.getElementsByTagName('input');

register_submit.addEventListener('click', function(event){
    event.preventDefault();
    register();
})

async function register(){
    let user = {
        email: register_email.value,
        name: register_name.value,
        nickname: register_nickname.value,
        password: register_first_password.value,
    }
    let response = await fetch('http://localhost:3100/auth/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    });
    const json = await response.json();
    console.log(json);
}

