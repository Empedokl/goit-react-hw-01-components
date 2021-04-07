import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import {Container, Description, Image, Name, List, Item, ListLabel, ListQuantity} from './ProfileStyledComponent'


const Profile = user => {
  const { name, avatar, tag, location } = user;
  const { followers, likes, views } = user.stats;
  return (
    <Container>
      <Description>
        <Image src={avatar} alt={name} />
        <Name>{name}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <List>
        <Item>
          <ListLabel>Followers</ListLabel>
          <ListQuantity>{followers}</ListQuantity>
        </Item>
        <Item>
          <ListLabel>Views</ListLabel>
          <ListQuantity>{views}</ListQuantity>
        </Item>
        <Item>
          <ListLabel>Likes</ListLabel>
          <ListQuantity>{likes}</ListQuantity>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: string.isRequired,
    tag: string.isRequired,
    location: string,
    avatar: string,
    stats: PropTypes.exact({
      followers: number.isRequired,
      views: number.isRequired,
      likes: number.isRequired,
    }).isRequired,
  }),
};

export default Profile;