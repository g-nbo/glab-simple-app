import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course!!!</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="yellow" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="red" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
