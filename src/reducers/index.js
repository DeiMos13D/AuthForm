import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { countryReducer as country } from './countryReducer'
import { creditCardReducer as creditCard } from './creditCardReducer'

export default combineReducers({
    router,
    form,
    country,
    creditCard
})