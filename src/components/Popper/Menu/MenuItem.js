import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './_MenuStyle.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('btn-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
