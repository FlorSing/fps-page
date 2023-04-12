import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';

export default function Design() {
  return (
    <Container>
    <ImageList sx={{ width: 800, height: 600 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}

          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://user-images.githubusercontent.com/118206899/229758132-954647e1-d75a-44d8-9eb9-4fd2668f6f4f.JPG',
    title: 'Kopiko Brand poster',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230119721-c0fb8a6e-5736-4f3e-8ec1-636b39c7372c.JPG',
    title: 'ADSIA flier',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230120398-ad26285b-6f51-49e0-b83f-c4268cb34ed6.JPG',
    title: 'Alster Christmas card',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230120636-379b94b5-1689-4da2-834f-3a56296039b3.jpg',
    title: 'AmCham Ad',
    cols: 2,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230120923-022ad351-abbe-4f93-a1b1-103d9449b79c.JPG',
    title: 'Choki Ball poster',
    cols: 2,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230121175-e4d11ba2-dcb0-4805-90dd-684a6a0f9d45.JPG',
    title: 'Kopiko Soluble poster',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230121540-8d78a0d2-142b-4146-a5b4-38962087e5c5.JPG',
    title: 'EIM poster',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230121793-9a57a42c-464b-49e2-a0bb-6889db45f8f5.JPG',
    title: 'EIM ticket',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230121983-64613a03-72bd-4388-b25a-fe020fba8d0d.JPG',
    title: 'Restaurant Logo Design',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230122174-45af48e6-34d1-404b-bd7e-9ab95f1d0595.jpg',
    title: 'Fres Candy shelf label',
  }
];