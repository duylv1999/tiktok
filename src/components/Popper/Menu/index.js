import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import MenuItem from './MenuItem';
import styles from './_MenuStyle.module.scss';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
