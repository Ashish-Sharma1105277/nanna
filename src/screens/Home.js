import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native'
import Header from '../components/Header'
import Button from '../components/Button'
import Trainerprofile from '../components/Trainerprofile'

class Home extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		showTrainer: false
	  };
	}
    viewProfile() {
		Navigation.navigator('Profile')
	}
	render() {
		return (
			<View style={styles.container}>
				<Header></Header>

				<ImageBackground
					source={require('../assets/img/Group.png')}
					style={styles.image}>
					<View style={styles.box}>
						<Image
							style={styles.logo}
							source={require('../assets/img/logo.png')}></Image>
						<Text style={styles.boxText}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
						</Text>
					</View>
					<Trainerprofile />
					<Button
						fontcolor="#000"
						color="#38D6CA"
						bwidth={200}
						bheight={40}
						onPress={this.viewProfile}
						></Button>
				</ImageBackground>

				<View style={styles.footer}>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Button
							fontcolor="#fff"
							color="#C64F42"
							bwidth={200}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#E8695C"
							bwidth={150}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EF678D"
							bwidth={360}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EF67B2"
							bwidth={360}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#45E324"
							bwidth={150}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EDCD1A"
							bwidth={200}
							bheight={40}></Button>
					</View>
				</View>
			</View>
		)
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
	},
	text: {
		color: 'grey',
		fontSize: 30,
		fontWeight: 'bold',
	},
	footer: {
		width: '100%',
		height: 200,
		backgroundColor: '#fff',
		padding: 5,
	},
	box: {
		width: '80%',
		minHeight: 150,
		backgroundColor: '#fff',
		marginLeft: '15%',
		borderRadius: 30,
		padding: 10,
		justifyContent: 'flex-start',
		marginTop: '60%',
	},
	logo: {
		marginTop: -30,
		marginLeft: -30,
		width: 50,
		height: 65,
	},
	boxText: {
		fontSize: 15,
	},
})
export default Home
