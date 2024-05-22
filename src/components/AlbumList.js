import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';
import album from './data/list';

class AlbumList extends Component {
  // state = {albums: []};
  componentWillUnmount() {
    // const options = {
    //   method: 'GET',
    //   url: 'https://soundcloud-scraper.p.rapidapi.com/v1/track/metadata',
    //   params: {
    //     track: 'https://soundcloud.com/edsheeran/photograph',
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'ce6e18948dmshedd8623cdaca499p112f5cjsnd7ed059d0858',
    //     'X-RapidAPI-Host': 'soundcloud-scraper.p.rapidapi.com',
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(response => this.setState({albums: response.data}));
    // axios
    //   .get('https://rallycoding.heroku.com/api/music_albums')
    //   .then(response => this.setState({albums: response.data}));
  }
  renderAlbums() {
    // return this.state.albums.map(album => (
    //   <AlbumDetails key={album.title} album={album} />
    // ));
    return album.map(alb => <AlbumDetails key={alb.title} album={alb} />);
  }
  render() {
    // console.log(this.state);
    // console.log(album);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
