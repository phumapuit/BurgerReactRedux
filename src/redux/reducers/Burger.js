const initialState = {

    burger: {
        Salad: 1,
        Cheese: 1,
        Beef: 1
    },

    menu: {
        Salad: 10,
        Cheese: 20,
        Beef: 55
    },

    total: 85

}
const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NUMBER": {
            const burger = { ...state.burger }

            if (action.amount === -1 && state.burger[action.value] < 1) {
                return state
            }
            burger[action.value] += action.amount
            state.total += state.menu[action.value] * action.amount
            //console.log(state.total)
            return { ...state, burger }
        }

        default:
            return state
    }
}

export default burgerReducer;