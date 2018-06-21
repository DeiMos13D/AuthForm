import country, {states} from '../country'
import { fromJS } from 'immutable'

const initialState = fromJS({
    country,
    states,
})

export function countryReducer(state = initialState, action) {
    const {type} = action
    switch (type) {

        default:
            return state
    }
}


