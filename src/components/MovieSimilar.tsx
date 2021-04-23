import React, { FC, FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Carousel, FadeInImage } from '@brandingbrand/fscomponents'
import { imagePath } from '../lib/constants'

const MovieSimilarStyles = StyleSheet.create({
	container: {
		paddingTop: 15,
		paddingBottom: 50,
		paddingHorizontal: 24
	},
	title: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 30,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	image: {
		height: 165,
		marginBottom: 15,
		borderRadius: 17,
	},
	similarTitle: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	similarContainer: {
		marginHorizontal: 15
	}
})

const SimilarMovie: FunctionComponent<any> = ({ info }) => {
	return (
		<View style={MovieSimilarStyles.similarContainer}>
			<FadeInImage
				resizeMode="cover"
				style={MovieSimilarStyles.image}
				source={{ uri: `${imagePath}${info.backdrop_path}` }}
			/>
			<Text style={MovieSimilarStyles.similarTitle}>{info.title}</Text>
		</View>
	)
}

const MovieSimilar: FC<any> = ({ similar }) => {
	return (
		<View style={MovieSimilarStyles.container}>
			<Text style={MovieSimilarStyles.title}>Similar movies:</Text>
			<Carousel
				loop={true}
				height={310}
				showsButtons={false}
				showsPagination={false}
			>
				{similar.map((movie: any) => (
					<SimilarMovie key={movie.id} info={movie}/>
				))}
			</Carousel>
		</View>
	)
}

export default MovieSimilar
