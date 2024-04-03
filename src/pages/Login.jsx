import {useAuth} from "../provider/authProvider.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("this is a test token");
        navigate("/", { replace: true });
    };

    setTimeout(() => {
        handleLogin();
    }, 7 * 1000);

    return <>Login Page</>;
};

export default Login;