import React from 'react'
import Container from 'common/src/components/UI/Container'
import {
  AboutWrapper,
  ProfileImage,
  ProfileContent,
  Name,
  Position,
  About,
} from './profile.style'
import ProfileBanner from './profile.png'

const Profile = () => {
  return (
    <Container>
      <AboutWrapper>
        <ProfileImage src={ProfileBanner} alt="profile" />
        <ProfileContent>
          <Name>Lorem Ipsum</Name>
          <Position>Creative Director</Position>
          <About>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
            odio, ullamcorper fermentum porta ut, gravida sit amet lectus. Sed
            ornare nec ex nec pellentesque. Curabitur ut eros ultricies,
            eleifend nisi sed, tempor purus. Praesent porttitor lacinia elit,
            non tristique purus mattis eu. Cras vitae blandit leo. Ut vitae est
            sed urna hendrerit mollis. Phasellus ullamcorper mauris in augue
            blandit, et interdum odio eleifend. Nunc rutrum nibh quis orci
            sagittis, sed sollicitudin massa tempus. Aliquam sed lectus nulla.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </About>
        </ProfileContent>
      </AboutWrapper>
    </Container>
  )
}

export default Profile
