import React, { Component, createContext } from 'react';
import { node } from 'prop-types';

const SettingsContext = createContext();

const LIVE_SEARCH_DEBOUNCE = 400;

class SettingsProvider extends Component {
  state = {
    searchQuery: '',
    genreFilter: new Map()
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
    }, LIVE_SEARCH_DEBOUNCE);
  };

  toggleCheckbox = label => (e) => {
    e.stopPropagation();
    const checked = this.state.genreFilter.get(label) || false;
    this.setState(prevState => ({
      genreFilter: prevState.genreFilter.set(label, !checked)
    }));
    console.log(this.state.genreFilter);
  };

  render() {
    return (
      <SettingsContext.Provider
        value={{
          searchQuery: this.state.searchQuery,
          genreFilter: this.state.genreFilter,
          clearSearch: this.clearSearch,
          handleSearch: this.handleSearch,
          toggleCheckbox: this.toggleCheckbox
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
