import * as React from 'react';

interface IDropdown {
  name: string;
  age: string;
  results: string[];
}

export default class Dropdown extends React.Component<IDropdown> {
  state = {
    results: this.props.results || [],
    search: ''
  };

  handleChange = (evt: Event) => {
   const value = (evt.target as HTMLInputElement).value;
    this.setState(() => ({
      search: value
    }))
  }

  render() {
    return <div>
      <div>
        <input type='text' onChange={this.handleChange}  value={this.state.search} />
      </div>
      <ul>
        {
          this.state.results.map((result, i) => <li key={i}>{result}</li>)
        }
      </ul>
      <div />;
  }
}