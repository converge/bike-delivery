import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import api from '../../services/api'
import { login } from '../../services/auth'
import './style.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-box">
            <div className="logo">
              <img src={BikeDeliveryLogo} alt='Bike Delivery' />
            </div>
            <div className="login-form">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}

                validate={values => {
                  let errors = {}
                  if (!values.email) {
                    errors.email = 'E-mail is required'
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address'
                  } else if (!values.password) {
                    errors.msg = 'The password field is empty'
                  }
                  return errors
                }}

                onSubmit={async (values, actions) => {
                  actions.setStatus({
                    success: 'Login...',
                    css: 'success'
                  })
                  actions.setSubmitting(false)
                  try {
                    const response = await api.post('/auth/login', {
                      email: values.email,
                      password: values.password,
                    })
                    login(response.data.token)
                    this.props.history.push("/");
                  } catch (err) {
                    actions.setStatus({
                      success: 'Email or Password incorrect !',
                      css: 'error'
                    })
                  }

                  
                }}
                render={x => (
                  <Form>
                    <div className="form-item">
                      <Field name='email' type='text' placeholder='Email Address' />
                    </div>
                    <div className="form-item">
                      <Field name='password' type='password' placeholder='Password' />
                    </div>
                    <ErrorMessage name='email' className='field-validation' component='div' />
                    <ErrorMessage name='password' className='field-validation' component='div' />
                    <div className={`form-sending ${x.status ? x.status.css : ''}`}>
                      {x.status ? x.status.success : ''}
                    </div>
                    <div className="form-item">
                      <button type='submit' disabled={x.isSubmitting}>Login</button>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard