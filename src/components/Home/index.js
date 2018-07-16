import React, { Component } from 'react';
import { string } from 'prop-types';

import View from './View';

export default class Home extends Component {
  static propTypes = {
    searchQuery: string
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
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.newSearch();
    }
  }

  onSetResult = (animePage, newSearch) => {
    this.setState(prevState => ({
      hits: newSearch ? [...animePage.data] : [...prevState.hits, ...animePage.data],
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
    let apiUrl = 'https://kitsu.io/api/edge/anime';
    apiUrl += '?page[limit]=18&page[offset]=0';
    if (this.props.searchQuery) {
      apiUrl += `&filter[text]=${this.props.searchQuery}`;
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
