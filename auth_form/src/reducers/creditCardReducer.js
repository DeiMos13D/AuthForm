import { fromJS } from 'immutable'
import { FOCUSED_CARD_FIELD } from '../constants'

const initialState = fromJS({
    focusedField: ''
})

export function creditCardReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case FOCUSED_CARD_FIELD:
            return state.set('focusedField', payload)

        default:
            return state
    }
}