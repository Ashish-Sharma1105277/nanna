import React, { Component } from 'react'
import {
	ImageBackground,
	View,
	Text,
	StyleSheet,
	Image,
	TextInput
} from 'react-native'
import Button from '../components/Button'
import RNPickerSelect from 'react-native-picker-select'
import Ion from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-community/picker'

const Profile = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/img/yellow.png')}
				style={styles.image}>
					<Image
						style={{ marginTop: '15%' }}
						source={require('../assets/img/logo.png')}></Image>
					<Text style={styles.text}>Lorem Ipsum Is Dummy</Text>
					<View style={{ marginTop: '15%' }}></View>
					<TextInput value="Lorem" style={styles.input} />
					<TextInput value="Lorem" style={styles.input} />
					<View style={styles.input}>
						<RNPickerSelect
							placeholder={{}}
							onValueChange={(value) => console.log(value)}
							items={[{ label: 'Football', value: 'football' }]}
						/>
					</View>

					<View style={styles.footer}>
						<Button
							onpressevent="profiledetail"
							fontcolor="#000"
							color="#38D6CA"
							bwidth={300}
							bheight={40}></Button>
					</View>
			</ImageBackground>
		</View>
	)
}
const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		marginTop: 20,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	footer: {
		position: 'absolute',
		bottom: 30,
		alignSelf: 'center',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',

		alignItems: 'center',
		paddingBottom: 40,
	},
	input: {
		height: 40,
		width: '90%',
		backgroundColor: '#FAFAFA',
		borderRadius: 30,
		marginTop: 20,
		paddingRight: 10,
		textAlign: 'right',
		color: '#000',
	},
	select: {
		borderWidth: 1,
	},
})
export default Profile
