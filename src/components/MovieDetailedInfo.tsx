import React, { FunctionComponent } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { imagePath } from '../lib/constants'

const MovieDetailedStyles = StyleSheet.create({
	image: {
		height: 240
	},
	info: {
		display: 'flex',
		paddingTop: 16,
		paddingLeft: 24,
		paddingRight: 12,
		paddingBottom: 15,
		alignItems: 'flex-start'
	},
	year: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 6
	},
	title: {
		fontSize: 24,
		color: '#fff',
		marginBottom: 30,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	overviewTitle: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	overview: {
		fontSize: 18,
		color: '#fff'
	},
	vote: {
		right: 30,
		width: 80,
		zIndex: 1,
		height: 80,
		bottom: -25,
		display: 'flex',
		borderRadius: 50,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#484848'
	},
	voteText: {
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold'
	}
})

const MovieDetailedInfo: FunctionComponent<any> = ({ info }) => {
	const yearFormatted = new Date(info.release_date).getFullYear()
	const voteCount = Math.round(info.vote_average * 10)
	
	return (
		<View>
			<View style={{ position: 'relative' }}>
				<Image
					resizeMode="cover"
					style={MovieDetailedStyles.image}
					source={{ uri: `${imagePath}${info.backdrop_path}` }}
				/>
				<View style={MovieDetailedStyles.vote}>
					<Text style={MovieDetailedStyles.voteText}>
						{voteCount}%
					</Text>
				</View>
			</View>
			<View style={MovieDetailedStyles.info}>
				<Text style={MovieDetailedStyles.year}>{yearFormatted}</Text>
				<Text style={MovieDetailedStyles.title}>{info.title}</Text>
				<Text style={MovieDetailedStyles.overviewTitle}>Overview:</Text>
				<Text style={MovieDetailedStyles.overview}>{info.overview}</Text>
			</View>
		</View>
	)
}

export default MovieDetailedInfo
