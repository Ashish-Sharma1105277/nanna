import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
const Chat = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => navigation.navigate('SliderScreen')}
					name="close"
					size={25}
				/>
			</View>
			<ScrollView>
				<View style={styles.chatContainer}>
					<View style={styles.leftBubble}>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={styles.time}>15:15</Text>
					</View>

					<View style={styles.rightBubble}>
						<Text style={{ color: '#fff' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={{ color: 'black' }}>15:15</Text>
					</View>
				</View>
			</ScrollView>
			<View style={styles.sendContainer}>
				<TextInput style={styles.input} placeholder="Type here...." />
				<View style={styles.sendBtn}>
					<MCI name="send" size={20} color="#fff" />
				</View>
			</View>
		</View>
	)
}

export default Chat

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E6E5E5',
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
	headerText: {
		marginRight: 15,
		fontSize: 18,
	},
	chatContainer: {
		marginBottom: 55,
	},
	sendContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 20,
		position: 'absolute',
		bottom: 0,
	},
	input: {
		backgroundColor: '#fff',
		flex: 1,
		marginRight: 10,
		borderRadius: 50,
		height: 40,
		paddingLeft: 10,
	},
	sendBtn: {
		height: 40,
		width: 40,
		borderRadius: 50,
		backgroundColor: '#38D6CA',
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftBubble: {
		width: '70%',
		margin: 15,
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 15,
	},
	rightBubble: {
		width: '70%',
		margin: 15,
		backgroundColor: '#E8695C',
		padding: 10,
		borderRadius: 15,
		alignSelf: 'flex-end',
	},
	time: {
		color: 'gray',
	},
})
