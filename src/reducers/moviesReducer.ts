import { MOVIES_LOADING, SET_MOVIES_LIST, SET_SELECTED_MOVIE, SET_SIMILAR_MOVIES } from '../lib/constants'

const initialState: any = {
	list: [],
	similar: [],
	selected: null,
	isLoading: true
}

const moviesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case MOVIES_LOADING: {
			return {
				...state,
				isLoading: true
			}
		}
		case SET_MOVIES_LIST: {
			return {
				...state,
				isLoading: false,
				list: action.movies
			}
		}
		case SET_SELECTED_MOVIE: {
			return {
				...state,
				isLoading: false,
				selected: action.movie
			}
		}
		case SET_SIMILAR_MOVIES: {
			return {
				...state,
				similar: action.similar
			}
		}
		default: return state
	}
}

export default moviesReducer
