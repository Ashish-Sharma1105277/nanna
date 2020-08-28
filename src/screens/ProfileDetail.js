import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button'

const ProfileDetail = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => navigation.navigate('Home')}
					name="close"
					size={25}
				/>
			</View>
			<ScrollView>
				<View style={styles.main}>
					<View style={styles.top}>
						<Image
							style={styles.photo}
							source={require('../assets/img/Mask.png')}
						/>
						<Text style={styles.name}>Name Here</Text>
						<Text style={{ color: 'gray' }}>Lorem ipsum dolor sit</Text>
					</View>
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Lorem Ipsum</Text>
						<Text style={styles.sectionText}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
							illo earum necessitatibus voluptatum at. Quae dignissimos, vero
							perspiciatis possimus fuga
						</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Lorem Ipsum</Text>
						<View style={styles.chipContainer}>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
						</View>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Lorem Ipsum</Text>
						<View style={{ alignSelf: 'stretch' }}>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.btnContainer}>
				<Button
					onpressevent="schedule"
					fontcolor="#000"
					color="#38D6CA"
					bwidth={300}
					bheight={40}
				/>
				<Button
					onpressevent="chat"
					fontcolor="#000"
					color="#38D6CA"
					bwidth={300}
					bheight={40}
				/>
			</View>
		</View>
	)
}

export default ProfileDetail

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#fff',
		elevation: 2,
	},
	main: {
		padding: 20,
	},
	headerText: {
		marginRight: 15,
		fontSize: 18,
	},
	top: {
		alignItems: 'center',
		marginVertical: 20,
		marginBottom: 30,
	},
	photo: {
		height: 80,
		width: 80,
		backgroundColor: 'gray',
		borderRadius: 50,
		marginBottom: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	section: {
		alignItems: 'flex-end',
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 18,
		marginBottom: 10,
	},
	sectionText: {
		textAlign: 'right',
	},
	option: {
		backgroundColor: '#f9f9f9',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 10,
	},
	btnContainer: {
		alignItems: 'center',
		paddingBottom: 10,
	},
	chipContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	chip: {
		height: 25,
		width: 130,
		backgroundColor: '#E9695C',
		borderRadius: 50,
		margin: 10,
	},
})
