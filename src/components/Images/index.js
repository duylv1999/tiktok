import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './_Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: CustomeFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(CustomeFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
