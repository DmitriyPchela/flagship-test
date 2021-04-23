import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { CombinedStore } from '../reducers'
import MoviesList from '../components/MoviesList'
import { getMovies } from '../providers/moviesActions'
import PSScreenWrapper from '../components/PSScreenWrapper'

const MoviesStyle = StyleSheet.create({
	container: {
		padding: 30
	},
	title: {
		fontSize: 28,
		color: '#000',
		marginBottom: 30,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
})

const PreloaderStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 24,
		color: 'black'
	}
})

export class Movies extends Component {
	filters = {
		page: 1,
		language: 'en-US',
		include_adult: false,
		include_video: false,
		sort_by: 'popularity.desc'
	}
	
	constructor(props: any) {
		super(props)
	}
	
	componentDidMount() {
		this.props.getMovies(this.filters)
	}
	
	goToSelectedMovie = (movie: any) => {
		this.props.navigator.push({
			title: movie.title,
			screen: 'MovieDetailed',
			passProps: {
				id: movie.id
			}
		})
	}
	
	render() {
		const { movies: { list, isLoading } } = this.props
		
		if (isLoading) {
			return (
				<View style={PreloaderStyle.container}>
					<Text style={PreloaderStyle.title}>Загрузка...</Text>
				</View>
			)
		}
		
		return (
			<PSScreenWrapper
				scroll={true}
				needInSafeArea={false}
				hideGlobalBanner={true}
				navigator={this.props.navigator}
			>
				<View style={MoviesStyle.container}>
					<Text style={MoviesStyle.title}>Movies</Text>
					<MoviesList movies={list} goToMovie={this.goToSelectedMovie}/>
				</View>
			</PSScreenWrapper>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getMovies: (filters: any) => getMovies(filters)(dispatch)
	}
}

const mapStateToProps = (combinedStore: CombinedStore) => {
	return {
		movies: combinedStore.movies
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Movies)
