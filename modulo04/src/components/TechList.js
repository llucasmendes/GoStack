import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newtech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({ newtech: e.target.value});

  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [... this.state.techs, this.state.newtech],
      newtech: ''
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newtech} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;