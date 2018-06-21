import React, {Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../../share/ErrorField'
import validate from '../../validate'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

export const selector = formValueSelector('auth')

class FirstForm extends Component{

    phoneNum = [1,2,3]

    countryOptions = (countryArray, toggle) => {
        const countryArrayOptions = countryArray
            .map((value, index)=>
                <option key={index} value={value.name}>{value.name}{toggle ? ` ${value.dial_code}` : ''}</option>
            )
        return countryArrayOptions
    }

    currentStates = (country, currentCountry) => {
        const currentCountryObj = country.country.find(obj => obj.name === currentCountry).code
        return country.states[currentCountryObj] ?
            <Field name='statesSelect' type='select' component={ErrorField}>{
                country.states[currentCountryObj]
                    .map((obj, index)=>
                        <option key={index} value={obj.code}>{obj.name}</option>
                    )}
            </Field> :
            <Field name='statesInput' type='text' component={ErrorField} placeholder='States'/>
    }



    render() {
        const {
            handleSubmit,
            country,
            form,
            currentCountry
        } = this.props

    return(
        <div>
            <div className='square'>
                <div className='square_top'>
                    <h3>Step 1 / 3</h3>
                </div>
                <div className='square_bottom'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name='firstName' type='text' component={ErrorField}
                                   value='name' placeholder='First Name'
                            />
                        </div>
                        <div>
                            <Field name='lastName' type='text' component={ErrorField} placeholder='Last Name'/>
                        </div>
                        <div className='legal_select'>
                            <div>Country</div>
                            <Field name='country' type='select' component={ErrorField}
                                   placeholder='Country' >
                                <option> </option>
                                {this.countryOptions(country.country, false)}
                            </Field>
                        </div>
                        <div>
                            {currentCountry ? this.currentStates(country, currentCountry) : null }
                        </div>
                        <div>
                            <Field name='city' type='text' component={ErrorField} placeholder='City'/>
                        </div>
                        <div>
                            <Field name='address' type='text' component={ErrorField} placeholder='Address'/>
                        </div>
                        <div>
                            <Field name='address_2' type='text' component={ErrorField} placeholder='Address 2'/>
                        </div>
                        {
                            this.phoneNum.map(number=>
                            <div key={number}>
                                {
                                    currentCountry ?
                                        <div  style={{display: 'flex'}}>
                                            <Field name={`tel${number}`} type='select' component={ErrorField}
                                                   placeholder='Country' defaultValue={currentCountry} >
                                                {this.countryOptions(country.country, true)}
                                            </Field>
                                            <Field name={`telNum${number}`} type='text'
                                                component={ErrorField} placeholder={`Phone ${number}`}
                                            />
                                        </div>
                                    :
                                        null
                                }
                            </div>)
                        }
                        <div className='legal_select'>
                            <div>Legal</div>
                            <Field name='legal' type='select' component={ErrorField} >
                                <option> </option>
                                <option value='company'>Company</option>
                                <option value='individual'>Individual</option>
                            </Field>
                        </div>
                        <button type='submit'>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
    }
}

export default connect(
    state => ({
       country: state.country.toJS(),
       currentCountry: selector(state, 'country'),
    })
)(reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(FirstForm))