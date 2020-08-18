import React, {Component} from 'react';

import View from './View';
import Project from './Project';
import AddProjectForm from './AddProjectForm';
import UpdateProjectForm from './UpdateProjectForm';

import './App.css';

class  App extends Component {

  constructor(props){
    super(props)

    this.state = {
      activeView:'projects',
      projects:[
        {
          id:1,
          name:'Morning in Waiheke',
          description: 'Painting by a local artist'
        },{
          id:2,
          name:'The thinking man',
          description: 'Bronze sculpture fitted for morden office space'
        }
      ],

    }

  }
  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  render(){

    return (
        <div className="app">
      
          <View viewName="projects" activeView={this.state.activeView} className="color1" >

            <div className="header">
              <i onClick={() => this.setActiveView('add-project')} className="fas fa-plus"></i>
              <i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i>
            </div>
            <div className="main">
              <h3>Projects</h3>

              {
                this.state.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    setActiveView: this.setActiveView,
                  }
                  return (<Project {...projectProps} />)
                })
              }
              

            
            </div>

          </View>

          <View viewName="add-project" activeView={this.state.activeView} className="color2" >

            <div className="header">
              <i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i>
            </div>
            <div className="main">
              <h3>Add a project</h3>
              <AddProjectForm/>
            </div>

          </View>

          <View viewName="update-project" activeView={this.state.activeView} className="color3" >

            <div className="header">
              <i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i>
            </div>
            <div className="main">
              <h3>Update a project</h3>
              <UpdateProjectForm/>
            </div>

          </View>

          <View viewName="nav" activeView={this.state.activeView} className="color5" Name>

            <div className="header">
              <i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i>
            </div>
            <div className="main">

              <ul className="menu">
                <li><a onClick={() => this.setActiveView('projects')} className="color1" href="#">Projects</a></li>
                <li><a onClick={() => this.setActiveView('add-project')} className="color2" href="#">Add a project</a></li>
         
              </ul>

            </div>

          </View>

        </div>
    );
  }



}

export default App
