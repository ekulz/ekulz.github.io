import React from 'react';
import './App.css';
import { Container, Header, Divider, Icon } from 'semantic-ui-react'

const App = () => (
  <div className="App">
    <Container text textAlign='center'>
      <Header as='h1' icon textAlign='center' color='blue'>
        <Icon name='terminal' circular/>
        <Header.Content>Luke Hickin</Header.Content>
      </Header>
      <Divider />
      <p>Hi, I'm Luke. 👋</p>
      <p>I live in Auckland, New Zealand. 🇳🇿</p>
      <p>I'm a software engineer currently working at Xero. 💻</p>
      <p>I love doing dev, and I love doing ops, but it's even better when I can do both. 🤓</p>
      <Divider />
      <p></p>
    </Container>
  </div>
);

export default App;
