import React, { Component } from 'react'
import {getFocusedCardField} from "../AC/creditCardFocused"
import {connect} from "react-redux"


class ErrorField extends Component{

    render() {
        const {
            input,
            type,
            meta: {error, touched, dirty},
            input: {name},
            id,
            placeholder,
            children,
            defaultValue,
            maxLength
        } = this.props

        let item
        if(type === 'select') {
            if(touched && error) {
                item = <select  {...input} name={name} className='error_style'>
                    {children}
                </select>
            } else if(dirty) {
                item = <select {...input} name={name}>
                    {children}
                </select>
            } else {
                item = <select {...input} name={name} value={defaultValue}>
                    {children}
                </select>
            }
        } else {
            item = (touched && error) ?
                <input {...input} type={type} id={id} placeholder={placeholder} maxLength={maxLength} className='error_style'/> :
                <input {...input} type={type} id={id} placeholder={placeholder} maxLength={maxLength} />
        }

        return(
            <div style={{width: '100%'}}>
                {item}
            </div>
        )
    }
}

export default connect(
    null,
    {getFocusedCardField}
)(ErrorField)