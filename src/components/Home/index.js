import React, { Component } from 'react';
import update from 'immutability-helper';
import { object, string } from 'prop-types';

import View from './View';

export default class Home extends Component {
  static propTypes = {
    searchQuery: string,
    genreFilter: object
  };

  static defaultProps = {
    searchQuery: ''
  };

  state = {
    hits: [],
    nextPage: '',
    isLoading: false,
    isError: false
  };

  componentDidMount() {
    this.newSearch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery ||
        prevProps.genreFilter !== this.props.genreFilter) {
      this.newSearch();
    }
  }

  onSetResult = (animePage, newSearch) => {
    this.setState(prevState => ({
      hits: newSearch ? animePage.data : update(prevState.hits, { $push: animePage.data }),
      nextPage: animePage.links.next,
      isLoading: false,
      isError: false
    }));
  };

  onSetError = () => {
    this.setState({
      isLoading: false,
      isError: true
    });
  };

  getApiUrl = () => {
    const { searchQuery, genreFilter } = this.props;
    let apiUrl = 'https://kitsu.io/api/edge/anime';
    apiUrl += '?page[limit]=18&page[offset]=0';
    if (searchQuery || genreFilter.size !== 0) apiUrl += '&filter';
    if (searchQuery) {
      apiUrl += `[text]=${searchQuery}`;
    }
    if (genreFilter.size !== 0) {
      apiUrl += `[genres]=${Array.from(genreFilter).join(',')}`;
    }
    return apiUrl;
  };

  getPage = async (url, newSearch = true) => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      const animePage = data;
      this.onSetResult(animePage, newSearch);
    } catch (error) {
      this.onSetError();
    }
  };

  getNextPage = async () => {
    this.getPage(this.state.nextPage, false);
  };

  newSearch = async () => {
    this.getPage(this.getApiUrl());
  };


  render() {
    return (
      <View
        hits={this.state.hits}
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        getNextPage={this.getNextPage}
      />
    );
  }
}
