import axios from 'axios'
import { LOAD_DATA, DELETE_DATA, ADD_DATA } from '../constants'

// create fetch actions  
const fetchData = (callback) => {
  callback(true)
  // use thunk to handle async function to fetch data
  return async dispatch => {
      try {
          const res = await axios.get(
            'http://universities.hipolabs.com/search?country=Australia'
          );
          dispatch({
              type: LOAD_DATA,
              data: res.data
          });
          callback(false)
        } catch (err) {
          callback(false)
          throw err;
        }
  }
}

// create add data actions  
const addData = () =>  ({
    type: ADD_DATA
  })

// create delete data actions  
const deleteData = () => ({
  type: DELETE_DATA
})

export { fetchData, addData, deleteData }