import React from 'react'
import { Header, Segment, Image, Container, Divider, Icon, Button } from 'semantic-ui-react'

const Home = () => {

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container text textAlign='center'>
      <Segment basic className='segmentHeader' size='huge'>
        <Header as='h1' icon textAlign='center' color='blue'>
          <Image circular src='me.jpg' style={{'fontSize':50}}/>
          <Header.Content>Luke Hickin</Header.Content>
          <Header.Subheader>Full Stack Software Engineer</Header.Subheader>
        </Header>
      </Segment>

      <Divider className='dividerHeader'/>

      <Segment basic size='large' textAlign='left'>
        <p>
          Hi, I'm <b>Luke</b>. 
          <span role="img" aria-label="wave"> 👋</span>
        </p>
        <p>
          Just another kiwi living in Vancouver BC, Canada.
          <span role="img" aria-label="flag-nz"> 🇳🇿 </span>
          <span role="img" aria-label="flag-ca"> 🇨🇦 </span>
        </p>
        <p>
          I'm a <b>full stack web dev</b> comfortable in .NET, Ruby on Rails, ReactJS, VueJS, and AngularJS. 
          <br></br>
          I also have a <b>passion for ops</b>, with extensive experience in AWS. 
        </p>
      </Segment>

      <Divider />

      <Segment basic size='large'>
        <p>Get in touch, I'd love to connect with you:</p>
        <div>
          <Button color='vk'>
            <a style={{color:'inherit'}} href={"mailto:lukehickin@hotmail.com"}><Icon name='mail' /> Email</a>
          </Button>
          <Button color='linkedin' onClick={() => handleClick('https://www.linkedin.com/in/lhickin/')}>
            <Icon name='linkedin' /> LinkedIn
          </Button>
          <Button color='twitter' onClick={() => handleClick('https://twitter.com/lukeee_h')}>
            <Icon name='twitter' /> Twitter
          </Button>
          <Button color='black' onClick={() => handleClick('https://github.com/ekulz')}>
            <Icon name='github' /> Github
          </Button>
        </div>
      </Segment>
    </Container>
  );
};

export default Home;