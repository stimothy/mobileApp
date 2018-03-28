import React, { Component } from 'react';
import {
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    View
} from 'react-native';
import 
{
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Icon,
    Right,
    Text
} from 'native-base'

import starwarsService from '../../services/starwars.service'

import Styles from './style'

export default class MovieSearch extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: null,
            val: ""
        }
    }

    componentDidMount()
    {
        this._getList(this.props.navigation.state.params.url);
    }

    render() 
    {
		return (
		<Container
			style={Styles.container}
		>
            <KeyboardAvoidingView
                style={Styles.inputContainer}
            >
                <Card
                    style={Styles.inputCard}
                >
                    <TextInput
                        style={Styles.input}
                        onChangeText={(val) => this.onChange(val)}
                        onSubmitEditing={() => this.onSubmit(this.state.val)}
                        value={this.props.equation}
                    >
                    </TextInput>
                </Card>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
                style={Styles.resultsContainer}
            >
                {this.state.data != null ? 
                    <Card
                        style={Styles.resultsCard}
                    >
                        {this.state.data != null ? this._renderSearches() : <Text>...</Text>}
                    </Card>
                    :
                    <View></View>
                }
            </KeyboardAvoidingView>
		</Container>
		);
    }

    _getList(url)
    {
        starwarsService.getMovieList(url)
        .then(results => {
            if (results.length != 0)
            {
                this.setState(prevState => {
                    return {
                        data: results,
                        val: ""
                    };
                });
            }
        })
        .catch(error => {
            console.log(error);
          console.log('Something went wrong!');
        })
    }

    _getSearches(term)
    {
        starwarsService.searchFilms(term)
        .then(results => {
            this.setState(prevState => {
                return {
                    data: results,
                    val: term
                };
            });
        })
        .catch(error => {
          console.log('Something went wrong!');
        })
    }

    onChange(val)
    {
        if (val != "")
        {
            this._getSearches(val);
        }
        else
        {
            this._getList(this.props.navigation.state.params.url);
        }
    }

    onSubmit(val)
    { }
    
    _renderSearches() 
    {
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={(this._renderItem)}
            >
            </FlatList>
        );
    }

    _renderItem = ({item}) => {
        return (
            <CardItem 
                style={Styles.cardItem}
                button 
                onPress={() => {/*this.onSubmit(item.title)}*/}
            >
                <Text>
                    {item.title}
                </Text>
            </CardItem>
        );
    }
}
