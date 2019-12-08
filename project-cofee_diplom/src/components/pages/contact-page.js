import  React from 'react';
import CoffeeService from '../../services/coffee-service';
import {connect} from 'react-redux';
import {formToggle} from '../../actions';

import {Formik, Form, Field} from 'formik';



import './contact-page.sass';
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
    "8",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];


const ContactPage = ({formSended, formToggle}) => {
    if(formSended){
        return (
            <div className = "col-lg-4 offset-lg-4 contact-page">
                <span className = 'contact-page__title'>Tell us about your tastes</span>
                <img className="beanslogo" src='/img/Beans_logo_dark.svg' alt="Beans logo"/>
                <span className = "contact-page__info">Thank you so much</span> 
                <span className = "contact-page__info">We contact you as soon as posible</span>
                <img src = "/img/Vector.svg" className = "contact-page__img" alt = "form sended"/>
                <button className = "contact-page__returnBtn" onClick = {()=>formToggle()}>Another ? </button>
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
                        console.log(value.phone);
                        let newPhone = value.phone.replace(/-/g, '').replace(/_/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/ /g, '');
                        newPhone = newPhone.length === 11 ? newPhone : '';
                        coffeeService.setContact({...value, phone: newPhone});
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
                                    className={
                                        errors.name && touched.name
                                        ? "error"
                                        : ""
                                    }
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
                                    className={
                                        errors.email && touched.email
                                        ? "error"
                                        : ""
                                    }
                                />
                                {errors.email && touched.email ? <div className ="contact-page__error">{errors.email}</div> : null}
                            </div>
                            

                            <div className = "contact-page__row">
                                <label className = "contact-page__label" htmlFor = 'phone'>Phone</label>
                                <Field
                                    name = 'phone'
                                    render = { ({field}) => (
                                        <MaskedInput
                                            {...field}
                                            mask={phoneNumberMask}
                                            id="phone"
                                            type="text"
                                            guide = {true}
                                            showMask = {true}
                                            keepCharPositions = {true}
                                        />
                                    )}
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
                                        if(!value || value.length < 3){
                                            return 'min 6';
                                        }

                                    }}
                                    className={
                                        errors.message && touched.message
                                        ? "error"
                                        : ""
                                    }
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

const mapStateToProps = ({catalogReducer}) => {
    const {formSended} = catalogReducer
    return {
        formSended: formSended
    }

}
const mapDispatchToProps = {
    formToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
