import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#999999'
    },
    cardItem: {
        alignItems: 'center',
        backgroundColor: '#c9c9c9',
        justifyContent: 'center'
    },
    inputCard: {
        alignItems: 'stretch',
        backgroundColor: '#c9c9c9',
        justifyContent: 'center',
        height: 70,
    },
    resultsCard: {
        alignItems: 'stretch',
        backgroundColor: '#c9c9c9',
        height: 160,
    },
    input: {
        fontSize: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    inputContainer:
	{
		alignItems: 'stretch',
		alignSelf: 'stretch',
		height: 70,
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10

    },
    resultsContainer:
	{
		alignItems: 'stretch',
		height: 160,
		justifyContent: 'center'
	}
});