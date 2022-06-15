import axios from 'axios'
import { LOAD_DATA, DELETE_DATA, ADD_DATA } from '../constants'

const fetchData = (callback) => {
  callback(true)
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

const addData = () =>  ({
    type: ADD_DATA
  })

const deleteData = () => ({
  type: DELETE_DATA
})

export { fetchData, addData, deleteData }