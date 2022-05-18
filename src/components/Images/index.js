import { forwardRef, useState } from 'react';
import images from '~/assets/images';

console.log(images.noImage);
const Image = forwardRef(({ ...props }, ref) => {
    // const [fallBack, setFallBack] = useState('');

    // const handleError = (err) => {
    //     setFallBack();
    // };
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} {...props} />;
});

export default Image;
