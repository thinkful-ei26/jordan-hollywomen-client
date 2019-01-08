import React from 'react';
import Select, { components } from 'react-select';
import Tooltip from '@atlaskit/tooltip';
import TvShow from './tv-show';
import Movie from './movie';
// import { connect } from 'react-redux';

const options = [
  { value: 'tv', label: 'Search TV' },
  { value: 'movies', label: 'Search Movies' },
];

const SelectContainer = ({ children, ...props }) => {
  return (
    <Tooltip content={'Choose Wisely'} delay={0}>
      <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
    </Tooltip>
  );
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom        : '1px dotted pink',
    color               : state.isSelected ? 'red' : 'blue',
    padding             : 5,
    height              : '100%',
    width               : '100%',
    position            : 'center'
  }),
}

export default class Selector extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        selectedOption: null,
    }
}

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <TvShow />
        <Movie />
        <Select
          name="search-form"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          components={{ SelectContainer }}
          styles={customStyles}
          containerStyles={{ container: (base) => ({ ...base, padding: 3 }) }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            colors: {
            ...theme.colors,
              primary25: 'hotpink',
              primary: 'black',
            },
          })}
        />
      </div>
    );
  }
}
