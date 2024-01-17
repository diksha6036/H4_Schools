import React, { useState } from 'react'
import "./index.css";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Tutorials from './components/Tutorials';
import Exercises from './components/Exercises';
import Services from './components/Services';
import {BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import Certified from './components/Certified';
import HtmlHome from './components/HTML_Tutorial/Html_home';
import HtmlIntro from './components/HTML_Tutorial/Html_Intro';
import HtmlEditor from './components/HTML_Tutorial/Html_editor';
import HtmlColor from './components/HTML_Tutorial/Html_colors';
import HtmlInline from './components/HTML_Tutorial/Html_blockInline';
import HtmlHead from './components/HTML_Tutorial/Html_head';
import CssHome from './components/CSS_Tutorial/Css_home';
import CssBackground from './components/CSS_Tutorial/Css_backgrounds';
import CssFonts from './components/CSS_Tutorial/Css_fonts';
import CssNav from './components/CSS_Tutorial/Css_nav';
import JsHome from './components/JS_tutorial/Js_home';
import JsVar from './components/JS_tutorial/Js_var';
import JsComp from './components/JS_tutorial/Js_comparsion';
import JsBitwise from './components/JS_tutorial/Js_bitwise';
import ReactHome  from './components/React_tutorial/REACT_home';
import ReactRouter from './components/React_tutorial/React_Router';
import ReactCompiler from './components/React_tutorial/React_compiler';
import ReactHook from './components/React_tutorial/React_hook';
import GitHome from './components/GIT_Tutorial/Git_home';
import GitCommit from './components/GIT_Tutorial/Git_commit';
import GithubFlow from './components/GIT_Tutorial/Github_flow';
import GitIgnore from './components/GIT_Tutorial/Git_ignore';
import BootHome from './components/BOOTSTRAP_Tutorial/Bootstrap_home';
import BootList from './components/BOOTSTRAP_Tutorial/Bootstrap_list';
import BootCarousel from './components/BOOTSTRAP_Tutorial/Bootstrap_Carousel';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/exercises" element={<Exercises />}/>
          <Route path="/certified" element={<Certified />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/htmlhome" element={<HtmlHome/>}/>
          <Route path="/htmlIntro" element={<HtmlIntro/>}/>
          <Route path="/htmlEditor" element={<HtmlEditor/>}/>
          <Route path="/htmlColor" element={<HtmlColor/>}/>
          <Route path="/htmlInline" element={<HtmlInline/>}/>
          <Route path="/htmlHead" element={<HtmlHead/>}/>
          <Route path="/cssHome" element={<CssHome/>}/>
          <Route path="/cssBackground" element={<CssBackground/>}/>
          <Route path="/cssFont" element={<CssFonts/>}/>
          <Route path="/cssNav" element={<CssNav/>}/>
          <Route path="/jsHome" element={<JsHome/>}/>
          <Route path="/jsVar" element={<JsVar/>}/>
          <Route path="/jsComp" element={<JsComp/>}/>
          <Route path="/jsBitwise" element={<JsBitwise/>}/>
          <Route path="/reactHome" element={<ReactHome/>}/>
          <Route path="/reactRouter" element={<ReactRouter/>}/>
          <Route path="/reactCompiler" element={<ReactCompiler/>}/>
          <Route path="/reactHook" element={<ReactHook/>}/>
          <Route path="/gitHome" element={<GitHome/>}/>
          <Route path="/gitCommit" element={<GitCommit/>}/>
          <Route path="/githubFlow" element={<GithubFlow/>}/>
          <Route path="/gitIgnore" element={<GitIgnore/>}/>
          <Route path="/bootHome" element={<BootHome/>}/>
          <Route path="/bootList" element={<BootList/>}/>
          <Route path="/bootCarousel" element={<BootCarousel/>}/>

        </Routes>

    </Router> 
    </>
  )
}

export default App


