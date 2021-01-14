export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}