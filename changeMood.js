const INITIAL_STATE = {mood: "happy"}

const ChangeMood = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case "Happy":
            return {...state,mood: "happy"}

        case "Sad":
            return {...state,mood: "sad"}

        case "Angry":
            return {...state,mood: "angry"}

        case "Confused":
            return {...state,mood: "confused"}
        default:
            return state
    }
}

const store = Redux.createStore(ChangeMood)