class user {
    constructor() {
    }

    vaildateUsername(username) {
        return username.includes('@') ? false : true;
    }

    validatePassword(password) {
        return password.length >= 8 ? true : false;
    }

    async signUp(n, e, u, p, m, d) {
        //check if username is submiting valid username and password
        let isValidated = this.vaildateUsername(u) && this.validatePassword(p);
        if (isValidated) {
            // now we can store the data

            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;
            console.log(this)

            // now userData is stored and now we can send it to server show we can register our new user

            const register_api = 'https://masai-api-mocker.herokuapp.com/auth/register'

            const response = await fetch(register_api, {
                method: 'POST',
                // mode: 'cors',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const result = await response.json()
            console.log(result)


        } else {
            console.log('username or password is not valid')
        }
    }

    async login(u, p) {

        try {
            const login_data = {
                username: u,
                password: p,
            }

            const login_api = 'https://masai-api-mocker.herokuapp.com/auth/login'

            const response = await fetch(login_api, {
                method: 'POST',
                // origin: '*',
                // mode: 'cors',
                body: JSON.stringify(login_data),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': 'https://masai-api-mocker.herokuapp.com'
                }
            })

            const data = await response.json()
            console.log(data, 'skjdf')
            return data
        }
        catch (err) {
            console.log('err:', err)
        }
    }

    async profileDetail(username, token) {
        try {
            const profile_api = `https://masai-api-mocker.herokuapp.com/user/${username}`

            const response = await fetch(profile_api, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            let data = await response.json()
            console.log(data, 'data')
            // console.log(username, token)

        }
        catch (err) {
            console.log('err:', err)
        }


    }
}

let person = new user()

let Register = () => {
    const reg_form = document.querySelector('#reg_form')
    const name = reg_form.name.value;
    const email = reg_form.email.value;
    const username = reg_form.username.value;
    const password = reg_form.password.value;
    const mobile = reg_form.mobile.value;
    const description = reg_form.description.value;


    person.signUp(name, email, username, password, mobile, description)
    // console.log(person)
}

let Login = async () => {
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value

    let { token } = await person.login(username, password)
    person.profileDetail(username, token)
}