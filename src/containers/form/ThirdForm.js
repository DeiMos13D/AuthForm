import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../../share/ErrorField'
import validate from '../../validate'
import Cards from 'react-credit-cards'
import { selector } from './FirstForm'
import {connect} from "react-redux"
import 'react-credit-cards/es/styles-compiled.css'

import { getFocusedCardField } from '../../AC/creditCardFocused'

class ThirdForm extends Component{

    state={
        focused: null
    }

    cardAnimation = (e, name) => {
        this.props.getFocusedCardField(name)
        this.setState({focused:name})
    }

    render() {
        const {
            prev,
            pristine,
            submitting,
            handleSubmit
        } = this.props
        return(
            <div>
                <div className='square'>
                    <div className='square_top'>
                        <h3>Step 3 / 3</h3>
                    </div>
                    <div className='square_bottom'>

                        <form onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                            <Cards
                                number={this.props.number || ''}
                                name={this.props.name || ''}
                                expiry={this.props.data || ''}
                                cvc={this.props.cvc || ''}
                                focused={this.state.focused}
                            />
                            <div style={{marginTop: '50px'}}>
                                <Field name='number' onFocus={this.cardAnimation}
                                     maxLength='16' type='text' component={ErrorField} placeholder='Credit Card number'/>
                            </div>
                            <div>
                                <Field name='name' onFocus={this.cardAnimation} type='text' normalize={value=>value.toUpperCase()}
                                       component={ErrorField} placeholder='Credit Card name'
                                />
                            </div>
                            <div style={{display: 'flex'}}>
                                <Field name='cvc' onFocus={this.cardAnimation} maxLength='3' type='text' component={ErrorField}  placeholder='Credit Card cvc'/>
                                <Field name='expiry' onFocus={this.cardAnimation} maxLength='5' type='text' component={ErrorField}
                                       placeholder='Credit Card expiration date'
                                />
                            </div>
                            <button type='button' onClick={prev} disabled={pristine || submitting}>Previous</button>
                            <button type="submit" >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        number: selector(state, 'number'),
        name: selector(state, 'name'),
        cvc: selector(state, 'cvc'),
        data: selector(state, 'expiry'),
        focusedField: state.creditCard.toJS().focusedField
    }),
    {getFocusedCardField}
)(reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(ThirdForm))