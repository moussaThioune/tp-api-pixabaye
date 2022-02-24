import React from 'react';
import {Card, Button} from 'react-bootstrap'
const Profile = () => {
  return (<center>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"
   src="https://pbs.twimg.com/profile_images/1057962119017230342/_Ku7cKj3_400x400.jpg" />
  <Card.Body>
    <Card.Title>Presiden Ousmane Sonko</Card.Title>
    <Card.Text>
     Notre espoire pour toute l'afrique continentale, celui-ci est l'héritier de Thomas Sakanra, Cheikh Anta Diop , Mamadou Dia et tant d'autres.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </center>);
};

export default Profile;
