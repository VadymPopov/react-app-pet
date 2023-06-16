import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { register } from 'redux/auth/operations';

const nameRegExp = "";
const emailRegExp = "";

  const initialValues = {
    name:'',
    email:'',
    password:'',
};

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3).matches(nameRegExp,'Enter valid name').required(),
    email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
    password: Yup.string().min(6).required(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

   const handleSubmit = (values, actions) => {
            dispatch(
            register({
                name: values.name,
                email: values.email,
                password: values.password,
    })
  );
  actions.resetForm();
};

    return (
        <Formik
            initialValues={initialValues}  
            validationSchema={RegisterSchema} 
            onSubmit={handleSubmit}> 

            <Form>
                <p>Log in with email</p>
                <FormField>
                Name
                <Field  name="name" />
                <ErrorMessage name='name' component='span'/>
                </FormField>

                <FormField>
                Email
                <Field  name="email" />
                <ErrorMessage name='email' component='span'/>
                </FormField>

                <FormField>
                Password
                <Field  name="password" />
                <ErrorMessage name="password" component='span'/>
                </FormField>

                <button type="submit">Register</button>
                <p>Already have an account? <a>Log In</a></p>
             </Form>
    
     </Formik>)
};  

export default RegisterForm;