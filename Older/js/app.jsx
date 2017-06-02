import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

var urlAddress = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';

function load() {
    $.ajax({
      url: urlAddress,
      method: 'GET',
      dataType: 'JSON'
    }).done(function(response) {
        console.log(response);;
    })
  };

  load();
/*
class CheckWeather extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: false
    }
  }
  componentDidMount(){
    fakeAPI.load()
  }
  render(){
    if(!this.state.data){
      return <div>Jestem, który jestem! </div>
    }else{
      return <table>
              <thead>
                  <tr>
                    <th>DAY</th>
                    <th>BALANCE</th>
                    <th>CHANGE</th>
                  </tr>
              </thead>
              <tbody>
             {this.state.data.map((elem,i)=>{
               return <tr key={i}>
                       <td>{elem.day}</td>
                       <td>{elem.balance}</td>
                       <td>{elem.change}</td>
                       </tr>
             })}
             </tbody>
             </table>
    }
  }
}
class App extends React.Component{
  render(){
    return <CheckWeather />
  }
}
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
    */
});
