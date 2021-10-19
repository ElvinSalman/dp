import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from "./components/About/About";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import HomePage from './components/Welcome/HomePage';
import Footer from './components/footer/footer';
import Char from './components/infopages/Char';
import Assembly from './components/infopages/Assembly';
import Vibr from './components/infopages/Vibr';
import Pzu from './components/infopages/Pzu';
import AntiIce from './components/infopages/AntiIce';
import Oil from './components/infopages/Oil';
import Adjustment from './components/infopages/Adjustment';
import Layout from "./components/layout/layout"
import ErrorPage from "./components/Error/Error";

import Common from './components/char/Common';
import Tech from './components/char/Tech';
import Limit from './components/char/Limit';
import Engine from './components/char/Engine';

import Compressor from './components/Assembly/Compressor';
import Fire from './components/Assembly/Fire';
import ComprTurb from './components/Assembly/ComprTurb';
import FreeTurb from './components/Assembly/FreeTurb';
import Freed from './components/Assembly/Freed';
import Revenge from './components/Assembly/Revenge';
import Box from './components/Assembly/Box';
import AirStarter from './components/Assembly/AirStarter';

import Purpose from './components/Vibr/Purpose';
import ContentAndWork from './components/Vibr/ContentAndWork';
import Serviceability from './components/Vibr/Serviceability';

import Appointment from './components/Pzu/Appointment';
import Basic from './components/Pzu/Basic';
import Work from './components/Pzu/Work';
import Operating from './components/Pzu/Operating';

import BasicOil from './components/Oil/Basic';
import BasicElements from './components/Oil/BasicElements';
import WorkSystem from './components/Oil/WorkSystem';
import Control from './components/Oil/Control';
import Malfunction from './components/Oil/Malfunction';

import BasicAdj from './components/Adj/BasicAdj';
import FuelBillets from './components/Adj/FuelBillets';
import BasicDosing from './components/Adj/BasicDosing';
import TurboCompAdj from './components/Adj/TurboCompAdj';
import FreeTurboSpin from './components/Adj/FreeTurbSpinAdj';
import Regulators from './components/Adj/Regulators';
import Adaptation from './components/Adj/Adaptation';
import Synch from './components/Adj/Synch';
import TempReg from './components/Adj/TempReg';
import ElecReg from './components/Adj/ElecReg';

import { useTranslation } from "react-i18next";

import headerJson from "./data/header.json";
import tb3info from "./data/tb3Info.json";
import charJson from "./data/char.json";
import assemblyJson from "./data/assembly.json";
import vibrJson from "./data/vibr.json";
import pzuJson from "./data/pzu.json";
import oilJson from "./data/oil.json";
import adjJson from "./data/adj.json";


function App() {
  const { i18n,t } = useTranslation();

  let lang = i18n.language;
  return (
   
    <Router>
       <BrowserRouter basename={i18n.language}>
    <div className="App">
    <Layout>

    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/info' component={Info}/>
    <Route exact path={headerJson[lang][2].to} component={About}/>
    <Route exact path={headerJson[lang][3].to} component={Contact}/>


    <Route exact path={tb3info[lang][0].to} component={Char}/>
    <Route exact path={tb3info[lang][1].to} component={Assembly}/>
    <Route exact path={tb3info[lang][2].to} component={Vibr}/>
    <Route exact path={tb3info[lang][3].to} component={Pzu}/>
    <Route exact path={tb3info[lang][4].to} component={AntiIce}/>
    <Route exact path={tb3info[lang][5].to} component={Oil}/>
    <Route exact path={tb3info[lang][6].to} component={Adjustment}/>


    <Route exact path={charJson[lang][0].to} component={Common}/>
    <Route exact path={charJson[lang][1].to} component={Tech}/>
    <Route exact path={charJson[lang][2].to} component={Limit}/>
    <Route exact path={charJson[lang][3].to} component={Engine}/>


    <Route exact path={assemblyJson[lang][0].to} component={Compressor}/>
    <Route exact path={assemblyJson[lang][1].to} component={Fire}/>
    <Route exact path={assemblyJson[lang][2].to} component={ComprTurb}/>
    <Route exact path={assemblyJson[lang][3].to} component={FreeTurb}/>
    <Route exact path={assemblyJson[lang][4].to} component={Freed}/>
    <Route exact path={assemblyJson[lang][5].to} component={Revenge}/>
    <Route exact path={assemblyJson[lang][6].to} component={Box}/>
    <Route exact path={assemblyJson[lang][7].to} component={AirStarter}/>


    <Route exact path={vibrJson[lang][0].to} component={Purpose}/>
    <Route exact path={vibrJson[lang][1].to} component={ContentAndWork}/>
    <Route exact path={vibrJson[lang][2].to} component={Serviceability}/>


    <Route exact path={pzuJson[lang][0].to} component={Appointment}/>
    <Route exact path={pzuJson[lang][1].to} component={Basic}/>
    <Route exact path={pzuJson[lang][2].to} component={Work}/>
    <Route exact path={pzuJson[lang][3].to} component={Operating}/>



    <Route exact path={oilJson[lang][0].to} component={BasicOil}/>
    <Route exact path={oilJson[lang][1].to} component={BasicElements}/>
    <Route exact path={oilJson[lang][2].to} component={WorkSystem}/>
    <Route exact path={oilJson[lang][3].to} component={Control}/>
    <Route exact path={oilJson[lang][4].to} component={Malfunction}/>


    <Route exact path={adjJson[lang][0].to} component={BasicAdj}/>
    <Route exact path={adjJson[lang][1].to} component={FuelBillets}/>
    <Route exact path={adjJson[lang][2].to} component={BasicDosing}/>
    <Route exact path={adjJson[lang][3].to} component={TurboCompAdj}/>
    <Route exact path={adjJson[lang][4].to} component={FreeTurboSpin}/>
    <Route exact path={adjJson[lang][5].to} component={Regulators}/>
    {/* <Route exact path={adjJson[lang][6].to} component={Adaptation}/> */}
    <Route exact path={adjJson[lang][6].to} component={Synch}/>
    {/* <Route exact path={adjJson[lang][8].to} component={TempReg}/> */}
    {/* <Route exact path={adjJson[lang][9].to} component={ElecReg}/> */}

    <Route component={ErrorPage}/>
    </Switch>
     </Layout> 
    </div>
    </BrowserRouter>
    </Router>
   
  );
}

export default App;
