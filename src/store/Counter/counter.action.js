const incrementCount = () => {
    return {
        type: "INCREMENT",
    }
}

const incrementSagaCount = () => {
    return {
        type: "INCREMENT_SAGA",
    }
}

const decrementCount = () => {
    return {
        type: "DECREMENT"
    }
}

const decrementSagaCount = () => {
    return {
        type: "DECREMENT_SAGA",
    }
}

export {
    incrementCount,
    incrementSagaCount,
    decrementCount,
    decrementSagaCount
}