// import logo from './logo.svg';
import React, { Component } from 'react';
import AOS from 'aos';
import './App.css';
import '../node_modules/aos/dist/aos.css';
import Headers from './components/header'
import Banner from './components/banner'
import Threefeatures from './components/Threefeatures'
import Aboutus from './components/Aboutus'
import TechFamiler from './components/TechFamiler'
import Myjourney from './components/Myjourney'
import Mywork from './components/Mywork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DataWeb from './images/datawebDesktop.png'
import Cuvee from './images/cuvee.png'
import GG from './images/gg.png'
import Finexo from './images/finexo.png'
import Wanderon from './images/wanderon.png'
import Wireframe from './images/wireframe.png'
// threre skills 
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

// timeline 
let timelineDate = [
      { 
        sno:1,
        iconName:'school',
        yearMonth:'July 2022 - Present',
        heading:'BCA - Amity Online',
        paragraph:'Doing my undergrad degree from Amity online',
      },
      {
        sno:2,
        iconName:'school',
        yearMonth:'December 2021 - Present',
        heading:'Javascript Mastery - Hindi Tech Tutorials',
        paragraph:'Learning Advance JS by this course and during this time worked on many projects which have some complex Javascript logic',
      },
      {
        sno:3,
        iconName:'work',
        yearMonth:'October 2021 - Present',
          heading:'Front End Developer - Dataviv Technologies',
          paragraph:'Make responsive website and help in integration of website with backend developer. Also work on API related project like calling api and integrating it on website',
      },
      {
        sno:4,
        iconName:'work',
        yearMonth:'July 2021 - October 2021',
        heading:'Front End Developer Intern - Dataviv Technologies',
          paragraph:'Done 3 month internship in which my main work was to make website and make sure each websites are responsive in all devices',
      },
      {
        sno:5,
        iconName:'school',
        yearMonth:'May 2021',
          heading:'HSC Passed - Maharashtra Board',
          paragraph:'I have completed My HSC in 2021 and i got 78% in HSC',
      },
      {
        sno:6,
        iconName:'school',
        yearMonth:'December 2020  -  April 2021',
          heading:'FRONT END WEB DEV COURSE - HINDI TECH TUTORIALS',
          paragraph:'Completed front end web development course provided by rajdeep dhakad and during course i have also helped many students in their web development journey',
        },
     
     
        
  ]

  // Works 
  let mywork = [
    {
        title: "Data Web",
        skillsUsed: ['HTML5',  'javascript', 'jquery', 'scss'],
        url: DataWeb,
        detail: 'This website i created long after my course i just found this on some website and replicated exactly same as it is seen also i added few things on my own too like navigation sticky and few hover animations too',
        redirectLink: '#'
    },
    {
        title: "Cuvee",
        skillsUsed: ['HTML5',  'javascript', 'jquery', 'scss'],
        url: Cuvee,
        detail: 'This was layout given by some company as assignment and i created it and it is really good although it is also a replication of websit only it is cuvee website clone just home page is been replicated with some customised thing too.',
        redirectLink: '#'
    },
    {
        title: "Greeting Globe",
        skillsUsed: ['HTML5', 'css3', 'javascript', 'jquery', 'bootstrap'],
        url: GG ,
        detail: 'This is a freelace project in which i was a team member and almost 50-60% ui is developed by me only and others also contributed over here also 90% of logical part is written by me on this website.',
        redirectLink: '#'
    },
    {
        title: "Finexo",
        skillsUsed: ['HTML5',  'javascript', 'jquery', 'scss'],
        url: Finexo,
        detail: 'This website layput i just maked because i just like the ui part and animations used in this website also i personally love the website layout , design and ui. I learnt more about css animation over here',
        redirectLink: '#'
    },
    {
        title: "Wanderon",
        skillsUsed: ['HTML5', 'javascript', 'jquery', 'scss'],
        url: Wanderon,
        detail: 'This website is also an assignment given by some company in interview round and actually i learnt many new things in logical part, used many stuffs like loops in this layout.',
        redirectLink: '#'
    },
    {
        title: "Wireframe",
        skillsUsed: ['HTML5', 'css3', 'javascript', 'jquery', 'scss'],
        url: Wireframe,
        detail: 'This website is also an assignment given by some company in interview round and actually i learnt many new things in logical part, used many stuffs like loops in this layout.',
        redirectLink: '#'
    },
   
]
// function app(){

// }
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
      <Aboutus/>
      <TechFamiler/>
      <Myjourney TimelineDataArray={timelineDate}/>
      <Mywork mywork={mywork}/>
      <Contact/>
      <Footer/>
    </>
    );
  }
}


export default App;
