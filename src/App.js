import logo from './logo.svg';
import { Component } from 'react';
import './App.css';


class WhoAmI extends Component  {
   constructor(props) {
     super(props);
     this.state = {
       
       years: 27,
       text: '+++',
       position: ''
     }
   }
  nextYear = () => { 
    
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  commitInputChanges = (e, color) => {
    //this.style.color = color.value
    console.log(color);
    this.setState({
      position: e.target.value
    })
    
  }

  previousYear = () => {
    this.setState(state => {
      return { years: state.years - 1 }
    })
  }


  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <>
        <button onClick={this.previousYear}>---</button>
        <button onClick={this.nextYear}>{this.state.text}</button>
        
        <h1>My name is {name}, surname - {surname}, I'm {years} {position!=='' ? ', my position - ' + position : '' }</h1>
        <a href={link} className='App-link'> My profile </a>
        <form>
          <span>Enter you position</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e,'red')} />
        </form>
      </>
    )
  }
}


function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Doe" link="www.facebook.com" />
      <WhoAmI name='Alex' surname = "Doe" link="vk.com"/>
    </div>
  );
}

export default App;
