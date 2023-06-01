import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/categories'

const { categoriesRead } = actions

const inicialState = {
  categories: []
}

const reducer = createReducer(
  inicialState,
  (builder) => builder
    .addCase(
      categoriesRead.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          categories: action.payload.categories
        }
        return newState
      }
    )
)
export default reducer