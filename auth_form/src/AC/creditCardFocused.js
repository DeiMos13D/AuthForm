import { FOCUSED_CARD_FIELD } from '../constants'

export function getFocusedCardField(focusedField) {
    return {
        type: FOCUSED_CARD_FIELD,
        payload: focusedField
    }
}