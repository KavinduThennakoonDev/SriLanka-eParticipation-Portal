import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Headersl from "./components/Headersl";

import Footer from './components/Footer';

import Termsofuse from './components/termsofuse';
import Termsofparticipation from './components/termsofparticipation';
import About from './components/about';
import FAQS from './components/FAQS';
import Usefullinks from './components/usefullinks';
import Contactus from './components/contactus';
import Photogallery from './components/photogallery';
import ContentView from "./components/ContentView";
import ContentViews from "./components/ContentViews";
import FeedBack from "./components/FeedBack";
import CommentView from './components/comentview';
import Search from './components/Search';
import Genaralfeedback from './components/Genaralfeedback';
import Event from './components/Event'
import Events from './components/Events'
import Newspress from './components/Newspress';
import Eventsearch from './components/EventSearch'
import GF from "./components/GF"
import NewsletterSL from './components/NewsletterSL';
import Allsearch from './components/allsearch';
import NotContents from './components/notConentviws'
// import Gsearch from './components/Google'

function App() {
  return (
    <div className="App">
      <Headersl/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/' element={<Headersl/>} />  */}
          <Route path="/Addfeedback/:content_id" element={<FeedBack/>} />
          <Route path='/termsofuse' element={<Termsofuse/>} />
          <Route path='/termsofparticipation' element={<Termsofparticipation/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/FAQs' element={<FAQS/>} />
          <Route path='/usefullinks' element={<Usefullinks/>} />
          <Route path='/contact-us' element={<Contactus/>} />
          <Route path='/photogallery' element={<Photogallery/>} />
          <Route path='/ContentViews' element={<ContentViews/>} />
          <Route path='/newspress' element={<Newspress/>} />
          <Route path="/participate/:content_id" element={<ContentView/>} />
          {/* <Route path="/commentview/:content_idInput" element={<CommentView />} /> */}
          <Route path='/search' element={<Search/>}/>
          <Route path='/gfeedback'element={<Genaralfeedback/>}/>
          <Route path='/event/:event_id'element={<Event/>}/>
          <Route path='/events'element={<Events/>}/>
          <Route path='/eventsearch'element={<Eventsearch/>}/> 
          <Route path='/gf'element={<GF/>}/> 
          <Route path='/newsletter'element={<NewsletterSL/>}/> 
          <Route path='/allsearch'element={<Allsearch/>}/> 
          <Route path='/notcontent'element={<NotContents/>}/>
          {/* <Route path='/gsearch'element={<Gsearch/>}/> */}
        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
