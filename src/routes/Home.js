import React from 'react'
import Navbar2 from "../components/Navbar2";
import LearnToCode from '../components/LearnToCode';
import CourseCards from '../components/CourseCards';
import Footer from '../components/Footer';
import MyLearning from '../components/MyLearning';

const Home = () => {
  return (
    <> 
      <Navbar2/>
      <LearnToCode/>
      <CourseCards/>
      <MyLearning/>
      <Footer/>
    </>
  )
}

export default Home
