import {useEffect} from "react";
import {login} from "../../api/api.ts";


const Login = () => {
    useEffect(() => {
        login({ // функция логин это сервисный уровень
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1, //время действия токена
        });
    }, [])

    return (
        <div>

        </div>
    );
};

export default Login;