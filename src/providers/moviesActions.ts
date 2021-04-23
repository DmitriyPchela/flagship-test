import { stringify } from 'query-string'
import api from '../lib/api'
import { apiKey, MOVIES_LOADING, SET_MOVIES_LIST, SET_SELECTED_MOVIE, SET_SIMILAR_MOVIES } from '../lib/constants'

export const getMovies = (filters: any) => async (dispatch: any) => {
	dispatch({ type: MOVIES_LOADING })
	await api.get(`/discover/movie?${stringify({ api_key: apiKey, ...filters })}`)
		.then(res => {
			dispatch({ type: SET_MOVIES_LIST, movies: res.data.results })
		})
		.catch(err => {
			console.log(err)
			dispatch({ type: SET_MOVIES_LIST, movies: [] })
		})
}

export const getSelectedMovie = (id: number, filters: any) =>  async (dispatch: any) => {
	dispatch({ type: MOVIES_LOADING })
	await api.get(`/movie/${id}?${stringify({ api_key: apiKey, ...filters })}`)
		.then(async res => {
			dispatch({ type: SET_SELECTED_MOVIE, movie: res.data })
			
			await api.get(`/movie/${id}/similar?${stringify({ api_key: apiKey, ...filters })}`)
				.then(res => {
					dispatch({ type: SET_SIMILAR_MOVIES, similar: res.data.results })
				})
				.catch(err => {
					console.log(err)
					dispatch({ type: SET_SIMILAR_MOVIES, similar: [] })
				})
		})
		.catch(err => {
			console.log(err)
			dispatch({ type: SET_SELECTED_MOVIE, movie: [] })
		})
}
