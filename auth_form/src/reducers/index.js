import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { countryReducer as country } from './countryReducer'

export default combineReducers({
    router,
    form,
    country
})