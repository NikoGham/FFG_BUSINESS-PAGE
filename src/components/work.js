import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';

class Work extends Component {
  state = {
    id: 1,
    title: 'Sessions',
    service: 'Training Times',
    url: 'https://www.instagram.com/fullfatjudo/',
    imageSrc:'https://images.unsplash.com/photo-1529094270367-c8f8a8a6ed21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',

    id: 2,
    title2: 'Tutorials',
    service2: 'Training Times',
    url2: 'https://www.instagram.com/fullfatjudo/',
    imageSrc2:'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',

    id: 3,
    title3: 'Comps',
    service3: 'Training Times',
    url3: 'https://www.instagram.com/fullfatjudo/',
    imageSrc3:'https://images.unsplash.com/photo-1575654402720-0af3480d1fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80'
    }
    
  
  render() {
      
    return (
      <div>
        <h1 className="heading">
          <Fade bottom cascade>
            {' '}
          What's on.
          </Fade>
        </h1>
        <div className="work-content">
          <Project
            key={this.state.id}
            title={this.state.title}
            service={this.state.service}
            url={this.state.url}
            imageSrc={this.state.imageSrc}
          ></Project>
          
        </div>
        <div className="work-content">
          <Project
            key={this.state.id2}
            title={this.state.title2}
            service={this.state.service2}
            url={this.state.url2}
            imageSrc={this.state.imageSrc2}
          ></Project>
          
        </div>
        <div className="work-content">
          <Project
            key={this.state.id3}
            title={this.state.title3}
            service={this.state.service3}
            url={this.state.url3}
            imageSrc={this.state.imageSrc3}
          ></Project>
          
        </div>
      </div>
    );
  }
}

export default Work;
