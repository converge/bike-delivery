import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import BikeDeliveryLogo from '../../imgs/bike-delivery-logo.png'
import './style.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="logo">
            <img src={BikeDeliveryLogo} alt='Bike Delivery'/>
          </div>
          <div className="login-form">
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                msg: '',
              }}

              validate={values => {
                let errors = {}
                if (!values.name) {
                  errors.name = 'Name is required'
                } else if (!values.email) {
                  errors.email = 'E-mail is required'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address'
                } else if (!values.subject) {
                  errors.subject = 'Subject is required'
                } else if (!values.msg) {
                  errors.msg = 'The email content is empty'
                }
                return errors
              }}

              onSubmit={async (values, actions) => {
                actions.setStatus({
                  success: 'Sending email...',
                  css: 'sending'
                })
                actions.setSubmitting(false)
                // TODO: api call
                // const response = await api.post('/email/send_email', {
                //   name: values.name,
                //   email: values.email,
                //   subject: values.subject,
                //   msg: values.msg
                // })
                // TODO: remove it
                let response = { status: 200 }
                if (response.status === 200) {
                  actions.setStatus({
                    success: 'Email sent !',
                    css: 'success'
                  })
                } else {
                  actions.setStatus({
                    success: 'Something went wrong, email not sent !',
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
    )
  }
}

export default Dashboard