import React, { Component,useState } from 'react'
import {
	ImageBackground,
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity
} from 'react-native'

import Button from '../components/Button'
import RNPickerSelect from 'react-native-picker-select'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { Picker } from '@react-native-community/picker'
import { useNavigation } from '@react-navigation/native'
import { Dialog } from 'react-native-simple-dialogs'
import Ion from 'react-native-vector-icons/Ionicons'

const Profilesetup = () => {
	const navigation = useNavigation()
	const [shoDialogue, setshoDialogue] = useState(false)

	return (
		<View style={styles.container}>
			<Dialog
				visible={shoDialogue}
				onTouchOutside={() => {
					setshoDialogue(false)
				}}
				dialogStyle={{
					borderRadius: 30,
					justifyContent: 'center',
					width: '80%',
					alignItems: 'center',
					alignSelf: 'center',
				}}
				contentStyle={{
					alignItems: 'center',
					width: '80%',
					justifyContent: 'center',
				}}>
					
				<View style={{ alignContent: 'center' }}>
					<Ion
						onPress={() => {
							setshoDialogue(false)
						}}
						name="close"
						size={20}
						style={{ alignSelf: 'flex-end' }}></Ion>
					<Image
						style={{ marginLeft: 40 }}
						source={require('../assets/img/family.png')}></Image>
					<Text style={{ textAlign: 'center', marginTop: 20,fontSize: 20 }}>
					לעבודה המוצגת - הדבר
					</Text>
					<Text style={{ textAlign: 'center'}}>
					quasi architecto beatae vitae dicta sunt explicabo
					</Text>
					<TouchableOpacity
						onPress={() => {
							setshoDialogue(false)
							navigation.navigate('SliderScreen')
						}}>
						<View
							style={[
								styles.button,
								{
									width: 200,
									backgroundColor: '#38D6CA',
									height: 40,
									color: '#000',
								},
							]}>
							<Text style={{ color: '#000' }}>Lorem Ipsum</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Dialog>
			<ImageBackground
				source={require('../assets/img/yellow.png')}
				style={styles.image}>
				<Text style={styles.text}>Lorem Ipsum Title</Text>
				<View style={{ flexDirection: 'row', marginTop: '15%' }}>
					<View style={{ flexDirection: 'column', width: '35%' }}>
						<MCI
							style={{ alignSelf: 'flex-end', paddingTop: 20 }}
							name="chevron-left"
							size={40}></MCI>
					</View>
					<View style={{ flexDirection: 'column', width: '30%' }}>
						<Image
							style={{ alignSelf: 'center' }}
							source={require('../assets/img/prof.png')}></Image>
					</View>
					<View
						style={{ flexDirection: 'column', width: '35%', paddingTop: 20 }}>
						<MCI
							style={{ alignSelf: 'flex-start' }}
							name="chevron-right"
							size={40}></MCI>
					</View>
				</View>

				<Text style={styles.text}>Lorem Ipsum </Text>
				<View style={{ marginTop: '15%' }}></View>
				<TextInput value="Lorem" style={styles.input} />
				<TextInput value="Lorem" style={styles.input} />
				<View style={styles.input}>
					<RNPickerSelect
						placeholder={{}}
						onValueChange={(value) => console.log(value)}
						items={[{ label: 'Lorem', value: 'Lorem' }]}
					/>
				</View>
				<View style={{ flexDirection: 'row', marginTop: '10%' }}>
				<View style={{ flexDirection: 'column', width: '20%' }}>
					<Image
						style={{ alignSelf: 'center' }}
						source={require('../assets/img/prof.png')}>
					</Image>	
				</View>
				<View style={{ flexDirection: 'column', width: '20%' }}>
					<Image
						style={{ alignSelf: 'center' }}
						source={require('../assets/img/prof.png')}>
					</Image>	
				</View>
				<View style={{ flexDirection: 'column', width: '20%' }}>
					<Image
						style={{ alignSelf: 'center' }}
						source={require('../assets/img/prof.png')}>
					</Image>	
				</View>
				<View style={{ flexDirection: 'column', width: '20%' }}>
					<Image
						style={{ alignSelf: 'center' }}
						source={require('../assets/img/prof.png')}>
					</Image>	
				</View>
				</View>	 		
		

				<View style={styles.footer}>
					<TouchableOpacity
							onPress={() => {
								setshoDialogue(true)
								// navigation.navigate('SliderScreen')
							}}>
							<View
								style={[
									styles.button,
									{
										width: 200,
										backgroundColor: '#38D6CA',
										height: 40,
										color: '#000',
									},
								]}>
								<Text style={{ color: '#000' }}>Lorem Ipsum</Text>
							</View>
						</TouchableOpacity>
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
	button: {
		borderRadius: 30,
		backgroundColor: '#dedede',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 5,
	}
})
export default Profilesetup
