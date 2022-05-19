import classNames from 'classnames/bind';
import styles from './_Upload.module.scss';

const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h2>Upload video</h2>
                    <span className={cx('content-title')}>Post videos to your account</span>

                    <div className={cx('content-info')}>
                        {/* Wrapper input */}
                        <div className={cx('wrapper-input')}>
                            {/* <input type="file" /> */}
                            <div className={cx('wrapper-input-body')}>
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg" />
                                <div className={cx('wrapper-input-body-title')}>Choose a video to upload</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
