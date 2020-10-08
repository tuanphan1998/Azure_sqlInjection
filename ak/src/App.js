import React, { Component } from 'react';
import './App.css';
import HeaderTitle from './components/HeaderTitle';
import CkeditPro from './components/CkeditPro';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      giaitri : '',
      giatri2 : '',
      giatri3 : ''
    };
  }
  

  componentWillMount() {
    if(localStorage.getItem('dataxcode')===null || localStorage.getItem('tencolumn')===null ||  localStorage.getItem('dodai')===null ||  localStorage.getItem('dodaicolumn')===null || localStorage.getItem('tentable')===null || localStorage.getItem('dataxcode2')===null || localStorage.getItem('dataxcode3') === null  || localStorage.getItem('dataxcode4') === null || localStorage.getItem('dataxcode5') === null || localStorage.getItem('dataxcode6') === null)
    {
      localStorage.setItem('dataxcode', JSON.stringify(''));
      localStorage.setItem('dataxcode2',JSON.stringify(''));
      localStorage.setItem('dataxcode3',JSON.stringify(''));
      localStorage.setItem('dataxcode4',JSON.stringify(''));
      localStorage.setItem('dataxcode5',JSON.stringify(''));
      localStorage.setItem('dataxcode6',JSON.stringify(''));
      localStorage.setItem('dodai',JSON.stringify(''));
      localStorage.setItem('tentable',JSON.stringify(''));
      localStorage.setItem('dodaicolumn',JSON.stringify(''));
      localStorage.setItem('tencolumn',JSON.stringify(''));
    }

    
  
  }

  giatritinhtoan = () => {
    setTimeout(function () {
      this.setState({ giaitri : localStorage.getItem('dataxcode6') , giatri2 : localStorage.getItem('dataxcode4') , giatri3 : localStorage.getItem('dataxcode6')});
    }.bind(this), 200)
  }
  render() { 
    this.giatritinhtoan();
    return (
      <div className="App-header">
        <div className="row">
          <div className="col-sm-12"><HeaderTitle/></div>
        </div>
        <br/>
        <div className="row">
          <div className="col-sm-8 ">
            <div>
              <CkeditPro/>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div>
              <div className="alert alert-warning" role="alert">
                <code className="upSizre">
                Xác định website nạn nhân {this.state.giaitri}
                </code>
              </div>
              <div className="alert alert-secondary" role="alert">
                <code className="upSizre">
                Xác định được status {this.state.giatri2}
                </code>
              </div>
              <div className="alert alert-primary" role="alert">
                <code className="upSizre">
                 Phương thức {this.state.giatri3} là phương thức của website
                </code>
              </div>
            </div>
          </div>
        </div>
        <br/>
    </div>
    );
  }
}
 
export default App;