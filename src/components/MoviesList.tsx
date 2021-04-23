import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import MovieItem from './MovieItem'

const MoviesListStyles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginHorizontal: -15
	}
})

const MoviesList: FC<any> = ({ movies, goToMovie }) => {
	return (
		<View style={MoviesListStyles.container}>
				{movies.map((movie: any) => (
					<MovieItem key={movie.id} movie={movie} buttonClick={goToMovie}/>
				))}
		</View>
	)
}

export default MoviesList
