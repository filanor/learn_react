import  React from 'react';
import CoffeeService from '../../services/coffee-service';
import {connect} from 'react-redux';
import {formToggle} from '../../actions';

import {Formik, Form, Field} from 'formik';

import './contact-page.sass';

const ContactPage = ({formSended, formToggle}) => {
    if(formSended){
        return (
            <div className = "col-lg-4 offset-lg-4 contact-page">
                <span className = 'contact-page__title'>Tell us about your tastes</span>
                <img className="beanslogo" src='/img/Beans_logo_dark.svg' alt="Beans logo"/>
                <span className = "contact-page__info">Thank you so much</span> 
                <span className = "contact-page__info">We contact you as soon as posible</span>
            </div>
        )
    }

    return (
        <>
            <div className = "col-lg-4 offset-lg-4 contact-page">
                <span className = 'contact-page__title'>Tell us about your tastes</span>
                <img className="beanslogo" src='/img/Beans_logo_dark.svg' alt="Beans logo"/>
                <Formik
                    initialValues = {{
                        name: '',
                        email: ''
                    }}
                    onSubmit = {value => {
                        const coffeeService = new CoffeeService();
                        console.log(value);
                        coffeeService.setContact(value);
                        formToggle();
                    }}
                    render = { ({errors, touched}) => (
                        <Form>
                            <div className = "contact-page__row">
                                <label className = "contact-page__label" htmlFor = 'name'>Name<span>*</span></label>
                                <Field 
                                    type = 'text'
                                    name = 'name'
                                    id= 'name'
                                    validate = {value=>{
                                        if(value === ''){
                                            return 'Required';
                                        } else if ( value.length < 2 || value.length > 20 ){
                                            return 'min 2 max 20';
                                        }
                                    }}
                                />
                                {errors.name && touched.name ? <div className ="contact-page__error">{errors.name}</div> : null}
                            </div>

                            <div className = "contact-page__row">
                                <label className = "contact-page__label" htmlFor = 'email'>Email<span>*</span></label>
                                <Field
                                    type = 'email'
                                    name = 'email'
                                    id = 'email'
                                    validate = {value=>{
                                        if(value.length < 6 || !value.includes('@') || !value.includes('.')){
                                            return 'must be email';
                                        }

                                    }}
                                />
                                {errors.email && touched.email ? <div className ="contact-page__error">{errors.email}</div> : null}
                            </div>
                            

                            <div className = "contact-page__row">
                                <label className = "contact-page__label" htmlFor = 'phone'>Phone</label>
                                <Field
                                    type = 'phone'
                                    name = 'phone'
                                    id = 'phone'
                                    mask = "+7 (999) 999-99-99"
                                    //placeholder = '+7(___) ___-__-__'
                                />
                            </div>


                            <div className = "contact-page__row">
                                <label className = "contact-page__label_msg" htmlFor = 'message'>Your message<span>*</span></label>
                                <Field 
                                    name = 'message'
                                    id = 'message'
                                    component = 'textarea'
                                    placeholder = 'Tell us..'
                                    validate = {value=>{
                                        if(!value || value.length < 6){
                                            return 'must be email';
                                        }

                                    }}
                                />
                                {errors.message && touched.message ? <div className ="contact-page__error">{errors.message}</div> : null}
                            </div>
                            <button type="submit" className = "contact-page__sbm">Submit</button>
                        </Form>

                    )}
                />
            </div>
        </>
    )
}

const mapStateToProps = ({formSended}) => {
    return {
        formSended: formSended
    }

}
const mapDispatchToProps = {
    formToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
