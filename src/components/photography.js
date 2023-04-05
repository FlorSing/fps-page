import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container } from '@mui/material';

export default function Photography() {
  return (
    <Container>
    <ImageList sx={{ width: 1200, height: 900 }}>
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
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://user-images.githubusercontent.com/118206899/229830193-a53b6b83-81df-4c52-ab8c-5d9e364c0cae.JPG',
    title: 'Capture water flow',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230116369-188fabf7-1889-4282-8119-026d64be1a84.JPG',
    title: 'Autumn tree',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230116797-186bca95-7e2e-45e8-a120-243dfa533ee8.JPG',
    title: 'Under the green leaves',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230116998-ae536bbd-9c87-40b8-9ea4-6a377d78b13c.JPG',
    title: 'Canal Boats',
    cols: 2,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230117202-22293843-1ca7-46be-baa1-4a3061bc5570.JPG',
    title: 'Passage Way',
    cols: 2,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230117425-1bf91d83-2e44-4683-ba2f-ed687d2a1a77.JPG',
    title: 'London Bridge',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230117986-716a891e-5c21-4dda-9810-210378bc4270.JPG',
    title: 'Lady Winter',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230118152-804fb19d-81c8-4d7f-94dd-00cf7406bff2.JPG',
    title: 'Butterfly',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230118359-2d8efc52-90bd-4037-bb67-3f8a331d7172.JPG',
    title: 'Lone Bench',
  },
  {
    img: 'https://user-images.githubusercontent.com/118206899/230118550-e63d1f63-59b8-41c6-8a45-1a22c5ee6ad8.JPG',
    title: 'Thinking',
    rows: 2,
    cols: 2,
  }

];