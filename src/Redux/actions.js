export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const getUserName = (user) => {
    return {
        type: 'GET_USER',
        value: user
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}
