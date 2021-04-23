import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { CombinedStore } from '../reducers'
import MovieSimilar from '../components/MovieSimilar'
import PSScreenWrapper from '../components/PSScreenWrapper'
import { getSelectedMovie } from '../providers/moviesActions'
import MovieDetailedInfo from '../components/MovieDetailedInfo'

export class MovieDetailed extends Component {
	filters = {
		page: 1,
		language: 'en-US'
	}
	
	constructor(props: any) {
		super(props)
	}
	
	componentDidMount() {
		this.props.getSelectedMovie(this.props.id, this.filters)
	}
	
	render() {
		const { movies: { selected, similar, isLoading } } = this.props
		console.log(this.props.movies)
		if (isLoading || !selected) {
			return null
		}
		
		return (
			<PSScreenWrapper
				scroll={true}
				needInSafeArea={false}
				hideGlobalBanner={true}
				navigator={this.props.navigator}
				style={{ backgroundColor: '#1C1C1C' }}
			>
				<View>
					<MovieDetailedInfo info={selected}/>
					<MovieSimilar similar={similar}/>
				</View>
			</PSScreenWrapper>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getSelectedMovie: (id: number, filters: any) => getSelectedMovie(id, filters)(dispatch)
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
)(MovieDetailed)