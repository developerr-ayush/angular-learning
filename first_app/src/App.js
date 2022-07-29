// import logo from './logo.svg';
import React, { Component } from 'react';
import AOS from 'aos';
import './App.css';
import '../node_modules/aos/dist/aos.css';
import Headers from './components/header'
import Banner from './components/banner'
import Threefeatures from './components/Threefeatures'
let Threeskills =[
  {
    sno:1,
    iconName:"view_quilt",
    Text:"Design",
    AnimationType:'fade-right',
    Para:"I can code almost any kind of design provided, from last 2 years created many types of UI like glass morphism design, dark theme layout, Simple Design, and much more.",
  },
  {
    sno:2,
    iconName:"code",
    Text:"Well Maintained Code",
    AnimationType:'fade-up',
    Para:'Code written by me is well maintained and commented also proper indentation is also done so that if further changes is needed then it can be done very easily.'
  },
  {
    sno:3,
    iconName:"devices",
    Text:"Fully Responsive Website",
    AnimationType:'fade-left',
    Para:'My all websites are responsive in almost all devices like Desktop, Laptop, Tablet and Mobiles. I use desktop first approach means first its coded for desktop and after that other devices are customised using Media Queries'
  },

]

class App extends Component {
  
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  
  render() {
    return (
      <>
      <Headers title="Ayush Shah" />
      <Banner title="Ayush Shah" paraText="Hello i am Front End Web Developer from Mumbai, Loves to create websites and take challenges"/>
      <Threefeatures Threeskills={Threeskills}/>
    </>
    );
  }
}


export default App;
