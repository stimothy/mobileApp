import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    Image,
} from 'react-native';
import {
        Button, 
        Header, 
        Container, 
        Content, 
        Text, 
        ListItem, 
        Left, 
        Body, 
        Icon, 
        Right, 
        Title } from "native-base";

import movieService from '../../services/starwars.service';
var styles = require('./style');

export default class BrowsePage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }

    componentDidMount(){
        console.log("did mount");
        this._getList();
    }

    renderButton(){
        return(
            <View style={styles.container}>
            <Image
                style={{
                backgroundColor: '#ccc',
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                }}
                source={require('../../resources/galaxy.jpg')}
            /> 
                <View style={styles.container}>
                    <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('Film', {url:this.state.data[0]})}}>
                        <Text style={styles.buttonText}>
                            F I L M S
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('People', {url:this.state.data[1]})}}>
                <Text style={styles.buttonText}>
                    P E O P L E
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('Planet', {url:this.state.data[2]})}}>
                <Text style={styles.buttonText}>
                    P L A N E T S
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('Species', {url:this.state.data[3]})}}>
                <Text style={styles.buttonText}>
                    S P E C I E S
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('Starships', {url:this.state.data[4]})}}>
                <Text style={styles.buttonText}>
                    S T A R S H I P S
                            </Text>
                    </TouchableOpacity>
                </View>

                 <View style={styles.container}>
                 <TouchableOpacity style={styles.menuButton} onPress={()=>{this.props.navigation.navigate('Vehicles', {url:this.state.data[5]})}}>
                 <Text style={styles.buttonText}>
                 V E H I C L E S
                            </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

    render(){
        return(
            this.state.data!=null?this.renderButton():<View></View>
        );
    }

    _getList(){
        movieService.getData()
        .then(results =>{
            this.setState({data: results});
        })
        .catch(error =>{
            console.log('Error Loading');
        })
    }

    _renderGenres(){
        return(
        
        <FlatList
            data = {this.state.data}
            keyExtractor = {(item, index) => item.getName()}
            renderItem = {this._renderItem}
        />
            
        );
    }

    _renderItem = ({item}) => {
        return (
        <ListItem itemDivider>
        
        <Body style={{ marginLeft: 0}}>
        <Button onPress={() => {this.props.navigation.navigate('BrowseListPage', {item})}}>
          <Text style={{ fontWeight: "bold" }}>
            {item.getName()}
          </Text>
        </Button>
        </Body>
        
      </ListItem>
        );
    }

   


}