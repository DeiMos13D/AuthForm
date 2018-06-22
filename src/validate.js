const validate = values => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = 'Required'
    } else if(values.firstName.length < 4) {
        errors.firstName = 'firstName to short'
    }
    if(!values.lastName){
        errors.lastName = 'Required'
    } else if(values.lastName.length < 4) {
        errors.lastName = 'lastName to short'
    }
    if(!values.country){
        errors.country = 'Required'
    } else if(values.country.length < 4) {
        errors.country = 'country to short'
    }
    if(!values.city){
        errors.city = 'Required'
    } else if(values.city.length < 4) {
        errors.city = 'city to short'
    }
    if(!values.address){
        errors.address = 'Required'
    } else if(values.address.length < 4) {
        errors.address = 'address to short'
    }
    if(!values.legal){
        errors.legal = 'Required'
    }
    if(!values.radio){
        errors.radio = 'Required'
    }
    //********Credit Card Number
    if(!values.number){
        errors.number = 'Required'
    } else if(!/^[0-9]{16}$/.test(values.number)) {
        errors.number = 'number to short'
    }
    //********Credit Card Name
    if(!values.name) {
        errors.name = 'Required'
    } else if(!/^([A-Z]+[ ][A-Z]+)$/.test(values.name)){
        errors.name = 'number error'
    }
    //********Credit Card CVC
    if(!values.cvc) {
        errors.cvc = 'Required'
    } else if(!/^[0-9]{3}$/.test(values.cvc)) {
        errors.cvc = 'cvc error'
    }
    //********Credit Card expiration date
    if(!values.expiry) {
        errors.expiry = 'Required'
    } else if(!/^(\d{2}\/\d{2})$/.test(values.expiry)) {
        errors.expiry = 'date error'
    }

    if(!values.country) {
        errors.country = 'Required'
    }

    if(!values.telNum1) {
        errors.telNum1 = 'Required'
    } else if(!/^\d+$/.test(values.telNum1)) {
        errors.telNum1 = 'phone error'
    }

    if(!!values.telNum2 && !/^\d+$/.test(values.telNum2)) {
        errors.telNum2 = 'phone error'
    }

    if(!!values.telNum3 && !/^\d+$/.test(values.telNum3)) {
        errors.telNum3 = 'phone error'
    }

    if(!values.statesInput) {
        errors.statesInput = 'Required'
    } else if(/^\d/.test(values.statesInput) && values.statesInput.length < 4) {
        errors.statesInput = 'statesInput error'
    }

    return errors
}

export default validate