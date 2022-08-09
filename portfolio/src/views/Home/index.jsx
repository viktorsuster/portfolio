import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Button from '../../component/Button';

const Home = () => {
  return (
    <>
    <div className='container-home'>
      <div className="mainSection">
      <h3 className='headerText'>Web developer & Product manager</h3>
      <h1>Hi! I'm Viktor</h1>
      <h1>I'm (I want to be)</h1>
      <h1>Front End</h1>
      <h1>Developer</h1>
      <h3>60 sec. interview</h3>
      </div>
      <div className='btnSection'>
      <Link to="/contact">
        <Button btnText="Hire me!" variant="primary" />
      </Link>
      <Link to="/skills">
        <Button btnText="See My Skills" variant="secondary" />
      </Link>
      </div>
      <div className="photoSection">
      </div>
      </div>
    </>
  )
}

export default Home