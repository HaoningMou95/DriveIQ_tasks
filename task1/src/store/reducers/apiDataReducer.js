import { LOAD_DATA, DELETE_DATA, ADD_DATA } from '../constants'

const initialState = {
    apiData : []
}

// handle business logic when actions were called
const apiDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return {
                ...state,
                apiData: action.data
            } 

        case ADD_DATA:
            const firstEle = [state.apiData[0]]
            const addedData = state.apiData.concat(firstEle)
            return {
                ...state,
                apiData: addedData
            }

        case DELETE_DATA:
            const deletedData = state.apiData.slice(0, state.apiData.length-1)
            return{
                ...state,
                apiData: deletedData
            }

        default: return state
    }
}

export default apiDataReducer