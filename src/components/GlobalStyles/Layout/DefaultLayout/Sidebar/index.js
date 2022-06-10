import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as searchService from '~/apiServices/searchService';
import { CameraIcon, FollowIcon, HashtagIcon, HomeIcon, MusicIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './_Sidebar.module.scss';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Sidebar() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search('n');
            setSearchResults(result);
        };

        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('header-sidebar')}>
                <Button className={cx('header-sidebar-item')} leftIcon={<HomeIcon />}>
                    <span className={cx('header-sidebar-item-text', { 'text-active': true })}>For You</span>
                </Button>
                <Button className={cx('header-sidebar-item')} leftIcon={<FollowIcon />}>
                    <span className={cx('header-sidebar-item-text')}>Following</span>
                </Button>
                <Button className={cx('header-sidebar-item')} leftIcon={<CameraIcon />}>
                    <span className={cx('header-sidebar-item-text')}>LIVE</span>
                </Button>
            </div>

            <div className={cx('spacer')}></div>

            <div className={cx('notify-login')}>
                <div className={cx('notify-login-text')}>
                    Log in to follow creators, like videos, and view comments.
                </div>
                <Button outline large w100percent mt20>
                    Log in
                </Button>
            </div>

            <div className={cx('spacer')}></div>

            <div className={cx('suggested-accounts')}>
                <p className={cx('suggested-accounts-text')}>Suggested accounts</p>
                {searchResults.map((result) => (
                    <AccountItem key={result.id} data={result} />
                ))}
                <div className={cx('see-all')}>
                    <p className={cx('suggested-accounts-more')}>See all</p>
                </div>
            </div>

            <div className={cx('spacer')}></div>

            <div className={cx('discover')}>
                <p className={cx('discover-text')}>Discover</p>
                <div className={cx('list-hashtag')}>
                    <div className={cx('wrap-btn')}>
                        <Button className={cx('btn-hashtag')} rounded h24 leftIcon={<HashtagIcon />}>
                            <p className={cx('btn-hashtag-text')}>genzlife</p>
                        </Button>
                    </div>
                    <Button className={cx('btn-hashtag')} rounded h24 leftIcon={<HashtagIcon />}>
                        <p className={cx('btn-hashtag-text')}>tiktoksoiphim</p>
                    </Button>
                    <Button className={cx('btn-hashtag')} rounded h24 leftIcon={<HashtagIcon />}>
                        <p className={cx('btn-hashtag-text')}>vinawoman</p>
                    </Button>
                    <div className={cx('wrap-btn')}>
                        <Button className={cx('btn-hashtag')} rounded h24 leftIcon={<MusicIcon />}>
                            <p className={cx('btn-hashtag-text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</p>
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
