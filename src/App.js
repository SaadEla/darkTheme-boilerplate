import React from 'react'
import './App.scss';
import Header from './components/header/header.component';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggleDarkTheme: false
    }
  }
  changeTheme = () => {
    console.log("salam");
    this.setState({
      toggleDarkTheme: !this.state.toggleDarkTheme
    })
  }
  render(){
    const { toggleDarkTheme } = this.state;
    return (
      <div className={toggleDarkTheme ? "App lightTheme" : "App darkTheme"}>
        <Header toggleDarkTheme={toggleDarkTheme} changeTheme = {this.changeTheme} />
      </div>
    );
  }

}

export default App;
