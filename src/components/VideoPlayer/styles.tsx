import styled from 'styled-components';

export const VideoPlayer = styled.div`
  & {
    display: grid;
  }
  ${'iframe'} {
    aspect-ratio: 16 / 9;
    width: 100%;
    grid-area: 1/1;
    border: 0;
    border-bottom: solid 0.1px transparent;
  }
`;

export const Skeleton = styled.div`
  & {
    width: 100%;
    aspect-ratio: 16 / 9;
    grid-area: 1/1;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
