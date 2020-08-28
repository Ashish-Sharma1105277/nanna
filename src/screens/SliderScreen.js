import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button'

const SliderScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI name="arrow-right" color="#fff" size={25} />
			</View>
			<ScrollView>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.cardSlider}>
						
							
								<View style={styles.activeCard}>
									{/* <View style={styles.image}> */}
									<Image
										style={styles.image}
										source={require('../assets/img/Mask.png')}></Image>
									{/* </View> */}
									<Text style={{ color: '#fff' }}>lorem ipsum</Text>
									<Text style={{ color: '#fff' }}>Lorem, ipsum dolor.</Text>
								</View>
								<View style={styles.card}>
									<Image
										style={styles.image}
										source={require('../assets/img/Mask.png')}></Image>
									<Text style={{ color: '#000000' }}>lorem ipsum</Text>
									<Text style={{ color: '#000000' }}>Lorem, ipsum dolor.</Text>
								</View>
								<View style={styles.card}>
									<Image
										style={styles.image}
										source={require('../assets/img/Mask.png')}></Image>
									<Text style={{ color: '#000000' }}>lorem ipsum</Text>
									<Text style={{ color: '#000000' }}>Lorem, ipsum dolor.</Text>
								</View>
								<View style={styles.card}>
									<Image
										style={styles.image}
										source={require('../assets/img/Mask.png')}></Image>
									<Text style={{ color: '#000000' }}>lorem ipsum</Text>
									<Text style={{ color: '#000000' }}>Lorem, ipsum dolor.</Text>
								</View>
								<View style={styles.card}>
									<Image
										style={styles.image}
										source={require('../assets/img/Mask.png')}></Image>
									<Text style={{ color: '#000000' }}>lorem ipsum</Text>
									<Text style={{ color: '#000000' }}>Lorem, ipsum dolor.</Text>
								</View>
							
						
					</View>
				</ScrollView>
				<View style={styles.textContainer}>
					<Text style={styles.mainText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</View>
			</ScrollView>
			<View style={styles.btnContainer}>
				<Button
					onpressevent="chat"
					fontcolor="#000"
					color="#38D6CA"
					bwidth={300}
					bheight={40}
				/>
				<Button fontcolor="#000" color="#38D6CA" bwidth={300} bheight={40} />
			</View>
		</View>
	)
}

export default SliderScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		padding: 20,
		backgroundColor: '#6A6471',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		marginRight: 15,
	},
	cardSlider: {
		margin: 20,
		flexDirection: 'row',
	},
	activeCard: {
		height: 150,
		width: 150,
		backgroundColor: '#38D6CA',
		borderRadius: 20,
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
		marginRight: 10,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: '#DCC7BB',
		marginBottom: 10,
	},
	textContainer: {
		margin: 20,
	},
	mainText: {
		textAlign: 'right',
		fontSize: 20,
	},
	btnContainer: {
		alignItems: 'center',
		paddingBottom: 10,
	},
	card: {
		height: 150,
		width: 150,
		// backgroundColor: 'gray',
		borderRadius: 20,
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
		marginRight: 10,
		color: 'black'
	},
})
