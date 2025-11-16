import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Error  from './ErrorMessage';
import {Link, useNavigate} from 'react-router-dom';
import {Header, Fields} from './Order.styled';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000';


const ValidationSchema = yup.object().shape({
    first_name: yup
    .string()
    .min(1, "Please enter last name more than 1 character")
    .required("This field is required"),
    last_name: yup
    .string()
    .min(1, "Please enter last name more than 1 character")
    .required("This field is required"),
    email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
    phone: yup
    .string()
    .matches(/^[0-9]{9}$/, "Phone must contain exactly 9 digits")
    .required("This field is required"),
    subject: yup
    .string()
    .min(1, "Please enter subject more than 1 character")
    .required("This field is required"),
    msg: yup
    .string()
    .min(1, "Please enter message more than 1 character")
    .required("This field is required"),
 });
export const Order = () => {
    const navigate = useNavigate(); 
    return(
        
    <div>
        <Header>
        <h1>Signup</h1>
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
            onSubmit ={ async (values, actions) => {
                actions.setSubmitting(true)
                // const response = await api.post('/send_email', {
                //   name: values.name,
                //   email: values.email,
                //   subject: values.subject,
                //   msg: values.msg
                // })
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // імітуємо відповідь сервера
                const response = { status: 200, data: { message: 'Email sent!' } };
              
                if (response.status === 200) {
                  actions.setStatus({ success: response.data.message });
                  actions.resetForm();
                  navigate('/success');
                } else {
                  actions.setStatus({ success: 'Something went wrong!' });
                }
              
                actions.setSubmitting(false);
              
                // console.log('ok')
                // console.log('response: ', response)
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
                <div className="email-item">
                {/* <button type='submit' disabled={isSubmitting}>Submit</button> */}
                    <Link to={`/success`}>
                    <button type='submit' disabled={isSubmitting}>Submit</button>
                    </Link>
                </div>
                {status && status.success && <div>{status.success}</div>}
                </Fields>
                
                </Form>
            )}
            </Formik>
        </div>
);
};

