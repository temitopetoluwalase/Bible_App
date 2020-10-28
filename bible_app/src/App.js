import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import './App.css';
import Listitems from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import Content from './Content';


library.add(faSignInAlt);


// Main Screen
class App extends React.Component{
 
  constructor()
  {
    super()
    this.state={
      show:false,
      Items: [],
      currentItem: {
          text: '',
          content: '',
          key: '',
      },
      show2:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }

  handleModal2()
  {
    this.setState({show2:!this.state.show2})
  }

  handleChange(event) {
      this.setState({
        ...this.state,
          currentItem: {
            ...this.state.currentItem,
              [event.target.name]: event.target.value,
              key: Date.now()
          }
         });
    }
    
  handleSubmit(event) {
      event.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
        const newItems = [...this.state.Items, newItem];
        this.setState({
          Items: newItems,
          currentItem: {
            text: '',
            content: '',  
            key: ''
          }
        })
      }
  }
  render() {
      return (
        <div className="Bible-app">
        <header>
          <div>
          <button onClick={()=>{this.handleModal()}} className="btn btn-success btn-new">New</button>
          <Modal show={this.state.show} >
          <Modal.Header>&nbsp;<Button onClick={()=>{this.handleModal()}}><span>&times;</span></Button></Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Book, Chapter and Verse</label>
              <input type="text" class="form-control" value={this.state.currentItem.text} onChange={this.handleChange} name="text"></input>
              <label>Texts</label>
              <textarea type="text" class="form-control" value={this.state.currentItem.content} onChange={this.handleChange} name="content"></textarea>
              <Modal.Footer>
                <input type="submit" value="Submit" className="btn btn-success"/>
              </Modal.Footer>
            </div>
          </form>
          </Modal.Body>
          </Modal>
          </div>
        </header>
        <br></br>
        <br></br>
        <div onClick={()=>{this.handleModal2()}}>
          <Listitems Items ={this.state.Items}></Listitems>
        </div>

        <Modal show={this.state.show2} >
          <Modal.Header>&nbsp;<Button onClick={()=>{this.handleModal2()}}><span>&times;</span></Button></Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Texts</label>
              <Content Items ={this.state.Items}></Content>
              <Modal.Footer>  
                <button className="btn btn-success btn-new">
                Read Full Chapter</button>
              </Modal.Footer>
            </div>
          </form>
          </Modal.Body>
          </Modal>

      
        </div>
      );
  }

       
}

export default App;


