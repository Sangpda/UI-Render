// state ban đầu
const unit = {
    cars: []
}

export default function reducer(state = unit, action, ...args) {
    switch (action) {
            case "ADD":
                const [newCar] = args
                return{
                    ...state,
                    cars: [...state.cars, newCar]
                }

        default: 
        return state
    }
}
