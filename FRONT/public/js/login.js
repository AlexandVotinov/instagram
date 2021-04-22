const inputs = document.getElementsByTagName('input');

login_submit.addEventListener('click', function(event){
    event.preventDefault();
    register();
})

async function register(){
    let user = {
        nickname: login_nickname.value,
        password: login_password.value,
    }
    let response = await fetch('http://localhost:3100/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    });
    const json = await response.json();
    if(json.status == 200){
        window.location = '/'
    }
}
