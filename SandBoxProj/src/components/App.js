/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  NavigationActions,
  StackNavigator,
  } from 'react-navigation';
import  BrowsePage from './BrowsePage/BrowsePage';
import  FilmSearch  from './FilmSearch/FilmSearch';
import  PeopleSearch  from './PeopleSearch/PeopleSearch';
import  PlanetSearch  from './PlanetSearch/PlanetSearch';
import  SpeciesSearch  from './SpeciesSearch/SpeciesSearch';
import  StarshipSearch  from './StarshipSearch/StarshipSearch';
import  VehicleSearch  from './VehicleSearch/VehicleSearch';


const RootBrowse = StackNavigator({
  BrowsePage: {
    screen: BrowsePage,
    navigationOptions: {
      title: 'Browse',
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: 'yellow',
		}
  },
  Film: {
    screen: FilmSearch,
    navigationOptions: {
      title: 'Films',
		}
  },
  People:{
    screen: PeopleSearch,
    navigationOptions: {
      title: 'People',
		}
  },
  Planet:{
    screen: PlanetSearch,
    navigationOptions: {
      title: 'Planets',
		}
  },
  Species:{
    screen: SpeciesSearch,
    navigationOptions: {
      title: 'Species',
		}
  },
  Starships:{
    screen: StarshipSearch,
    navigationOptions: {
      title: 'Starships',
		}
  },
  Vehicles:{
    screen: VehicleSearch,
    navigationOptions: {
      title: 'Vehicles',
		}
  },
})

    export default class App extends Component{
      render() {
        return (
          <RootBrowse/>
        );
      }
    }