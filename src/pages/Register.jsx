import { Helmet } from 'react-helmet';
import { RegisterForm } from './RegisterForm';

export default function Register() {
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <RegisterForm/>
        </div>)
};


