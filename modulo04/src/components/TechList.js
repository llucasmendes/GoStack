import React, { Component } from 'react';

import TechItem from './TechItem';

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

  handleDelete = ( tech ) =>{
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
          <TechItem 
          key={tech} 
          tech={tech} 
          onDelete={() => this.handleDelete(tech)} 
          />
          ))}
          {/* <TechItem /> */}
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