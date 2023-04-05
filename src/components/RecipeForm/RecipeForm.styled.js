import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError } from "formik";

export const FormField = styled.label`
display: flex;
gap: 4px;
flex-direction: column;
`;

export const Form = styled(FormikForm)`
width: 400px;
padding: 8px;
border:1px solid #2a2a2a;
display: flex;
gap: 10px;
flex-direction: column;
margin-bottom: 10px;
`;

export const ErrorMessage = styled(FormikError)`
color: tomato;
`;