import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './_Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    btnTextColor = false,
    text = false,
    rounded = false,
    disabled = false,
    widthLarge = false,
    small = false,
    large = false,
    leftIcon = false,
    rightIcon = false,
    mt32 = false,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    let props = {
        onClick,
        ...passProps,
    };

    // remove events start 'on' when have prop disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        btnTextColor,
        small,
        large,
        text,
        widthLarge,
        mt32,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
