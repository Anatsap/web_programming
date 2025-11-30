import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Error  from './ErrorMessage';
import {useNavigate} from 'react-router-dom';
import {Header, Fields} from './Order.styled';
import axios from 'axios';
const BASE_URL = 'http://localhost:5001';

const ValidationSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .min(3, "Please enter last name more than 3 characters")
    .required("This field is required"),
    last_name: yup
    .string()
    .trim()
    .min(3, "Please enter last name more than 3 characters")
    .required("This field is required"),
    email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
    phone: yup
    .string()
    .matches(/^\d+$/, "Phone must contain only digits")
    .min(9, "Phone must be at least 9 digits")
    .max(13, "Phone must be at most 13 digits")
    .required("This field is required"),
    subject: yup
    .string()
    .trim()
    .min(1, "Please enter subject more than 1 character")
    .required("This field is required"),
    msg: yup
    .string()
    .trim()
    .min(1, "Please enter message more than 1 character")
    .required("This field is required"),
 });
export const Order = () => {
    const navigate = useNavigate(); 
    return(
        
    <div>
        <Header>
        <h1>Checkout</h1>
        </Header>
            <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                subject: '',
                msg: '',
            }}
            //   validate={values => {
            //     let errors = {}
            //     if (!values.first_name) {
            //       errors.name = 'First name is required'
            //     }else if(!values.last_name)  {
            //         errors.last_name = 'Last name is required'
            //     }else if(!values.phone)  {
            //         errors.phone = 'Phone is required'
            //     }else if (!values.email) {
            //       errors.email = 'E-mail is required'
            //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            //       errors.email = 'Invalid email address'
            //     } else if (!values.subject) {
            //       errors.subject = 'Subject is required'
            //     } else if (!values.msg) {
            //       errors.msg = 'The email content is empty'
            //     }
            //     console.log(errors)
            //     return errors
            //   }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    console.log(values);
                    const response = await axios.post(`${BASE_URL}/send_email`, values);
                    if (response.status === 200) {
                        actions.setStatus({ success: response.data.message || 'Email sent!' });
                        actions.resetForm();
                        navigate('/success');
                    } else {
                        actions.setStatus({ success: 'Something went wrong!' });
                    }
                } catch (err) {
                    actions.setStatus({ success: 'Something went wrong!' });
                } finally {
                    actions.setSubmitting(false);
                }
            }}            
            >
            {({errors, touched, isSubmitting, status }) => (
                <Form>
                    <Fields>
                <div className="email-item">
                    <Field name='first_name' type='text' placeholder='First name' />
                    {errors.first_name && touched.first_name ? (<Error message={errors.first_name} />) : null}
                </div>
                <div className="email-item">
                    <Field name='last_name' type='text' placeholder='Last name' />
                    {errors.last_name && touched.last_name ? (<Error message={errors.last_name} />) : null}
                </div>
                <div className="email-item">
                    <Field name='phone' type='text' placeholder='Phone' />
                    {errors.phone && touched.phone ? (<Error message={errors.phone} />) : null}
                </div>
                <div className="email-item">
                    <Field name='email' type='email' placeholder='E-mail' />
                    {errors.email && touched.email ? (<Error message={errors.email} />) : null}
                </div>
                <div className="email-item">
                    <Field name='subject' type='text' placeholder='Subject' />
                    {errors.subject && touched.subject ? (<Error message={errors.subject} />) : null}
                </div>
                <div className="email-item">
                    <Field component='textarea' name='msg' placeholder='Your message' />
                    {errors.msg && touched.msg ? (<Error message={errors.msg} />) : null}
                </div>
                {/* <button type='submit' disabled={isSubmitting}>Submit</button> */}
                <div className="email-item">
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </div>
                {status && status.success && <div>{status.success}</div>}
                </Fields>
                
                </Form>
            )}
            </Formik>
        </div>
);
};

export default Order;
