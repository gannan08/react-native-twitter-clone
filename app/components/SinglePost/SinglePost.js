import React from 'react';
import { ListItem, Thumbnail, Text, Body, Grid, Row } from 'native-base';
import styles from './styles';

const sampleAvatar = require('../../assets/images/sample_avatar.jpg');

export default (props) => (
  <ListItem>
      <Thumbnail size={80} source={props.profilePicture} />
      <Body>
        <Grid>
          <Row>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.username}>{props.username}</Text>
          </Row>
        </Grid>
        <Text style={styles.content}>{props.content}</Text>
      </Body>
  </ListItem>
)