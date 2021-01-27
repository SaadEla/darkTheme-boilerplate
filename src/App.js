import React from 'react'
import './App.scss';
import SHOP_DATA from './assets/shop.data';
import CardComponent from './components/card/card.component';
import Header from './components/header/header.component';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleDarkTheme: false,
      shopdata: SHOP_DATA,
      section: ""
    }
  }
  changeTheme = () => {
    this.setState({
      toggleDarkTheme: !this.state.toggleDarkTheme
    })
  }
  chooseSection = (title) => {
    this.setState({
      section: title
    })
  }
  render() {
    const { toggleDarkTheme, shopdata } = this.state;
    return (
      <div className={toggleDarkTheme ? "App dark" : "App light"}>
        <Header toggleDarkTheme={toggleDarkTheme} changeTheme={this.changeTheme} />
        <div className="row">
          <div className="cards col-3">
            {shopdata.map(section =>
              <CardComponent key={section.routeName} title={section.title} chooseSection={this.chooseSection}></CardComponent>
            )}
          </div>
          <div className="full-content col">
            {shopdata.map(section => {
              if (section && section.title === this.state.section) {
                return section.items.map(item => {
                  if (item) {
                    return <img key={item.id} src={item.imageUrl} alt=""></img>
                  } else return ''
                })
              } else return ''
            })
            }
          </div>
        </div>
      </div>
    );
  }

}

export default App;
