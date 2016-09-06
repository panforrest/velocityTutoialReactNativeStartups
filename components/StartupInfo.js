import React, { Component } from 'react'
import {
	StyleSheet,
	Text
} from 'react-native'

class StartupInfo extends Component {
	render(){
		return (
			<Text style={styles.container}>
			    This is the StartupInfo Component
			</Text>
		)		
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 64
	}
})

export default StartupInfo