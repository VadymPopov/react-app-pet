import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage } from './RecipeForm.styled';
import * as Yup from 'yup';
import { addRecipe } from "redux/recipesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialValues = {
    name:'',
    image:'',
    time: 0,
    servings: 0,
    calories: 0,
    difficulty: 'easy',
    ingredients: '',
    instructions: '',
}

const RecipeSchema = Yup.object().shape(
    {
        name: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
        image: Yup.string().min(3, 'Too short').required('Required'),
        time:Yup.number().positive('> 0').required('Required'),
        servings:Yup.number().positive('> 0').required('Required'),
        calories:Yup.number().positive('> 0').required('Required'),
        difficulty:Yup.string().oneOf(['easy', 'medium', 'hard']).required('Required'),
    }
);
const RecipeForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        dispatch(addRecipe(values));
        navigate("/recipes", { replace: false })
    }

    return (
        <Formik initialValues={initialValues}  
        validationSchema={RecipeSchema} 
        onSubmit={(values,actions)=>{
            handleSubmit(values)
            actions.resetForm();
}}> 
             <Form>
                <FormField>
                Name
                <Field  name="name" />
                <ErrorMessage name='name' component='span'/>
                </FormField>
                <FormField>
                Image
                <Field  name="image" />
                <ErrorMessage name='image' component='span'/>
                </FormField>
                <FormField>
                Time
                <Field  name="time" type='number' />
                <ErrorMessage name='time' component='span'/>
                </FormField>
                <FormField>
                Servings
                <Field  name="servings" type="number" />
                <ErrorMessage name='servings' component='span'/>
                </FormField>
                <FormField>
                Calories
                <Field  name="calories" type='number' />
                <ErrorMessage name='calories' component='span'/>
                </FormField>
                <FormField>
                Difficulty
                <Field as='select' name='difficulty'>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </Field>
                <ErrorMessage name='difficulty' component='span'/>
                </FormField>
                <FormField>
                    <Field as='textarea' name='ingredients' placeholder='Ingredients...' style={{resize:"none"}}>
                    </Field>
                </FormField>
                <FormField>
                    <Field as='textarea' name='instructions' placeholder='Instructions...' style={{resize:"none"}}>
                    </Field>
                </FormField>
                <button type="submit">Submit your recipe</button>
             </Form>
    
     </Formik>)
};  

export default RecipeForm;