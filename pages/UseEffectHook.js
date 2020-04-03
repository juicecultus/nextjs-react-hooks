import UseEffectHookImage from '../src/UseEffectHookImage';

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[5, 6, 7, 8, 9].map((imgId) => {
        return (
          <div key='imgId'>
            <UseEffectHookImage
              primaryImg={`/img/bw-${imgId}.jpg`}
              secondaryImg={`/img/c-${imgId}.jpg`}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
