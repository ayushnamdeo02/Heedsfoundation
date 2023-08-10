import React, { Component } from 'react';
import './about/about.css';
import PhotoAlbum from 'react-photo-album';

const photos = [
  {
    src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75", width: 400, height: 300 },
      { src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75", width: 200, height: 150 },
    ],
  },
  {
    src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75", width: 800, height: 450 },
      { src: "https://react-photo-album.com/_next/image?url=%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fimage01.018d1d35.jpg%26w%3D3840%26q%3D75&w=384&q=75", width: 400, height: 225 },
    ],
  },
  // Add more photo objects as needed
];

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">He;l
        
      </div>
    );
  }
}

export default Gallery;
