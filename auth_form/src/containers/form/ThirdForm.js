import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../../share/ErrorField'
import validate from '../../validate'

class ThirdForm extends Component{
    componentWillUnmount() {
        this.props.destroy()
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
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name='cc_number' type='text' component={ErrorField} placeholder='Credit Card number'/>
                            </div>
                            <div>
                                <Field name='cc_name' type='text' normalize={value=>value.toUpperCase()}
                                       component={ErrorField} placeholder='Credit Card name'
                                />
                            </div>
                            <div style={{display: 'flex'}}>
                                <Field name='cc_cvc' type='text' component={ErrorField} placeholder='Credit Card cvc'/>
                                <Field name='cc_exp_date' type='text' component={ErrorField}
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

export default reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(ThirdForm)