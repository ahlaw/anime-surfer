import React, { Component, createContext } from 'react';
import { node } from 'prop-types';

const SettingsContext = createContext();

class SettingsProvider extends Component {
  state = {
    searchQuery: ''
  };

  clearSearch = () => {
    if (this.searchDelay) clearTimeout(this.searchDelay);
    this.setState({ searchQuery: '' });
  };

  handleSearch = (e) => {
    if (this.searchDelay) clearTimeout(this.searchDelay);
    const searchQuery = e.target.value;
    this.searchDelay = setTimeout(() => {
      this.setState({ searchQuery });
    }, 400);
  };

  render() {
    return (
      <SettingsContext.Provider
        value={{
          searchQuery: this.state.searchQuery,
          clearSearch: this.clearSearch,
          handleSearch: this.handleSearch
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

SettingsProvider.propTypes = {
  children: node.isRequired
};

const SettingsConsumer = SettingsContext.Consumer;

export { SettingsProvider, SettingsConsumer };
