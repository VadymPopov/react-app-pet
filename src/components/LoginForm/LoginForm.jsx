import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './LoginForm.styled';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logIn } from 'redux/auth/operations';

const initialValues = {
    email:'',
    password:'',
};

const LoginSchema = Yup.object().shape(
    {
        email: Yup.string().min(10).required(),
        password: Yup.string().min(6).required(),
    }
);
const LoginForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        dispatch(
        logIn({
            email: values.email,
            password: values.password,
      })
    );
        // navigate("/recipes", { replace: false });
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}  
            validationSchema={LoginSchema} 
            onSubmit={handleSubmit}> 

            <Form>
                <p>Log in with email</p>
                <FormField>
                Email
                <Field  name="name" />
                <ErrorMessage name='name' component='span'/>
                </FormField>

                <FormField>
                Password
                <Field  name="image" />
                <ErrorMessage name='image' component='span'/>
                </FormField>

                <button type="submit">Log In</button>
                <p>Don't have an account? <a>Join now</a></p>
             </Form>
    
     </Formik>)
};  

export default LoginForm;