import React, { Component } from 'react';
import {
    Alert,
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import apiService from '../../services/starwars.service';
var styles = require('./style');


export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieObject: null,
        }
    }

    componentDidMount()
    {
        this._getMovie(this.props.navigation.state.params.url);
    }
    
    // static navigationOptions = ({navigation}) => {
    //     const {params} = navigation.state;
    //     return {title: params.item.title}
    // };

    render() {
        let movie = this.state.movieObject;
        return (
            <View style={styles.container}>
                <Text style={styles.bigTitle}>{movie.title}</Text>
                <Text style={styles.detailsText}>Released:   {movie.releaseDate}</Text>
                <Text style={styles.detailsText}>Director:  {movie.director}</Text>
                <Text style={styles.detailsText}>Producer:  {movie.producer}</Text>
                <Text style={styles.detailsText}>{movie.overview}</Text>
                
                <Text style={styles.detailsText}></Text>
            </View>
            
        );
    }



    _getMovie(url)
    {
        apiService.getFilm(url)
        .then(result =>{
        this.setState({movieObject: result});
        });
    }

    launchAlert(title, message)
    {
      Alert.alert (
        title,
        message,
        [
          {text: 'Dismiss'},
        ],
        {cancelable: false}
      );
    }
}