import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	StatusBar,
} from 'react-native';

class App extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingTop: StatusBar.currentHeight || 0,}}>
				<StatusBar barStyle="light-content" backgroundColor="skyblue" transculent="true"/>

				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.headerText}>
					  This is header
					</Text>
				</View>

				{/* Content */}
				<View style={styles.content}>
					<ScrollView
					  contentContainerStyle={styles.contentContainer}
					  style={styles.scrollView}>
					  
					  <View style={styles.horizontalScroll}>
					  	<ScrollView
					  	  contentContainerStyle={styles.horizontalContentContainer}
					  	  style={styles.horizontalScrollView} 
					  	  horizontal={true}>
					  	  <Text style={styles.horizontalScrollText}>
					  	    horizontalScroll
					  	  </Text>
					  	  <Text style={styles.horizontalScrollText}>
					  	    horizontalScroll
					  	  </Text>
					  	  <Text style={styles.horizontalScrollText}>
					  	    horizontalScroll
					  	  </Text>
					  	  <Text style={styles.horizontalScrollText}>
					  	    horizontalScroll
					  	  </Text>
					  	</ScrollView>
					  </View>

					  <View style={styles.verticalScroll}>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
				  	  <Text style={styles.verticalScrollText}>
				  	    verticalScroll
				  	  </Text>
					  </View>

					</ScrollView>
				</View>

				{/* Footer */}
				<View style={styles.footer}>
					<Text style={styles.footerText}>
					  This is header
					</Text>
				</View>

			</View>
		)
	}
}

export default App;

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		backgroundColor: '#34d192',
		paddingVertical: 20,
		borderBottomWidth: 2,
		borderBottomColor: '#53edaf',
	},
	headerText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 3,
	},
	content: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 20,
	},
	contentText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 3,
	},
	footer: {
		bottom: 0,
		alignItems: 'center',
		backgroundColor: '#34d192',
		paddingVertical: 20,
		borderTopWidth: 2,
		borderTopColor: '#53edaf',
	},
	footerText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 3,
	},
	horizontalContentContainer: {
		// flex: 1,
		paddingBottom: 20,
	},
	horizontalScrollText: {
		padding: 20,
		borderRadius: 5,
		paddingHorizontal: 39,
		color: 'gray',
		borderWidth: 1,
		borderColor: '#53edaf',
		marginHorizontal: 5,
	},
	verticalScroll: {
		padding: 20,
	},
	verticalScrollText: {
		textAlign: 'center',
		padding: 20,
		borderRadius: 5,
		paddingHorizontal: 39,
		color: 'gray',
		borderWidth: 1,
		borderColor: '#53edaf',
		margin: 10,
	},
});