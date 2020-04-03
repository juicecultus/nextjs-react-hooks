import UseRefHookImage from '../src/UseRefHookImage';

const ImageChangeOnMouseOver = () => {
  return (
    <>
      <div>
        <UseRefHookImage
          primaryImg='/img/bw-7.jpg'
          secondaryImg='/img/c-7.jpg'
          alt=''
        />
        <UseRefHookImage
          primaryImg='/img/bw-8.jpg'
          secondaryImg='/img/c-8.jpg'
          alt=''
        />
      </div>
      <style JSX>
        {`
      div {
        min-height: 100vh;
        display: grid;
        grid-template-columns: auto auto;
        place-items: center;
        grid-gap: 0 20px;
      }
      img {
        width: 100%;
      }
      #__next {
        grid-gap: 0;
      }

      @media (max-width: 768px) {
        div {
          height: 100vh;
          display: grid;
          grid-template-columns: auto;
          place-items: center;
          grid-gap: 20px 0;
        }
        img {
          width: 100%;
        }
      }
    `}
      </style>
    </>
  );
};

export default ImageChangeOnMouseOver;
