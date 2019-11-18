import React, { Component } from 'react';

function TechItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} 
              type="button">Remover
      </button>
    </li>
  );
}

export default TechItem;