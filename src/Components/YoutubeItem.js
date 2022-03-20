import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const TextBox = styled.div``

const YoutubeItem = props => {
  const {eventName, title, publishedLocal, updatedLocal, link, author, videoId} = props.feed;
  return (
    <Container>
        <TextBox>{publishedLocal}</TextBox>
        <TextBox>{eventName}</TextBox>
        <TextBox>{author}</TextBox>
        <TextBox>{title}</TextBox>
        <TextBox>{link}</TextBox>
        <TextBox>{videoId}</TextBox>
        <TextBox>{updatedLocal}</TextBox>
    </Container>
  )
}

export default React.memo(YoutubeItem);
