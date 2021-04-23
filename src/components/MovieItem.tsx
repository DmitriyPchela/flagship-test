import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageWithOverlay } from '@brandingbrand/fscomponents'

const MovieItemStyles = StyleSheet.create({
	container: {
		flexGrow: 1,
		width: '100%',
		maxWidth: '50%',
		flexBasis: '50%',
		marginBottom: 30,
		position: 'relative',
		paddingHorizontal: 15
	},
	image: {
		height: 200,
		width: '100%',
		borderRadius: 16,
		overflow: 'hidden'
	},
	overlay: {
		padding: 10,
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		backgroundColor: 'rgba(255, 255, 255, 0.8)'
	},
	text: {
		fontSize: 12,
		color: 'black',
		marginBottom: 5,
	},
	textBold: {
		fontSize: 14,
		fontWeight: 'bold'
	},
	overlayLink: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 1,
		position: 'absolute'
	}
})

const MovieOverlay: FunctionComponent<any> = ({ title, date }) => {
	const yearFormatted = new Date(date).getFullYear()
	
	return (
		<View style={MovieItemStyles.overlay}>
			<Text style={{ ...MovieItemStyles.text, ...MovieItemStyles.textBold }}>{title}</Text>
			<Text style={MovieItemStyles.text}>{yearFormatted}</Text>
		</View>
	)
}

const MovieItem: FunctionComponent<any> = ({ movie, buttonClick }) => {
	const IMAGE_STATIC_PATH = `https://image.tmdb.org/t/p/original`
	const imageSrc = `${IMAGE_STATIC_PATH}${movie.backdrop_path}`
	
	return (
		<View style={MovieItemStyles.container}>
			<Text style={MovieItemStyles.overlayLink} onPress={() => buttonClick(movie)}/>
			<ImageWithOverlay
				style={{ width: '100%' }}
				overlayPosition="bottomCenter"
				overlay={<MovieOverlay title={movie.title} date={movie.release_date}/>}
				imageProps={{ source: { uri: imageSrc }, resizeMode: 'cover', style: MovieItemStyles.image }}
			/>
		</View>
	)
}

export default MovieItem

