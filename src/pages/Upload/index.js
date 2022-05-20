import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import Button from '~/components/Button';
import Image from '~/components/Images';
import styles from './_Upload.module.scss';

const cx = classNames.bind(styles);
function Upload() {
    const [checked, setChecked] = useState(['Comment', 'Duet', 'Stitch']);
    const [comment, setComment] = useState('Comment');
    const [duet, setDuet] = useState('Duet');
    const [stitch, setStitch] = useState('Stitch');
    const [lengthInputNote, setLengthInputNote] = useState(0);
    const inputFileRef = useRef();

    const handleInputNode = (value) => {
        setLengthInputNote(value.length);
    };

    const handleCheck = (value) => {
        setChecked((prev) => {
            const isChecked = checked.includes(value);
            if (isChecked) {
                return checked.filter((check) => check !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h2>Upload video</h2>
                    <span className={cx('content-title')}>Post videos to your account</span>

                    <div className={cx('content-info')}>
                        {/* Wrapper input */}
                        <div className={cx('wrapper-input')} onClick={() => inputFileRef.current.click()}>
                            <input type="file" ref={inputFileRef} accept="video/*" style={{ display: 'none' }} />
                            <div className={cx('wrapper-input-body')}>
                                <Image src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg" />
                                <div className={cx('wrapper-input-body-title')}>Choose a video to upload</div>
                                <span className={cx('text-sub')}>Or drag and drop files</span>

                                <div className={cx('text-info-video')}>
                                    <div className={cx('text-info-video-detail')}>MP4 or WebCODE</div>
                                    <div className={cx('text-info-video-detail')}>Resolution 720x1280 or higher</div>
                                    <div className={cx('text-info-video-detail')}>Up to 10 minutes</div>
                                    <div className={cx('text-info-video-detail')}>Less than 2 GB</div>
                                </div>

                                <Button primary widthLarge mt32>
                                    Select file
                                </Button>
                            </div>
                        </div>

                        <div className={cx('content-form')}>
                            <div className={cx('title-note')}>
                                <span className={cx('text-note')}>Note</span>
                                <span className={cx('text-number')}>{lengthInputNote}/150</span>
                            </div>
                            <div className={cx('input-note')}>
                                <input type="text" onChange={(e) => handleInputNode(e.target.value)}></input>
                                <div className={cx('input-icon')}>
                                    <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg" />
                                    <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg" />
                                </div>
                            </div>

                            <div className={cx('note-image')}>
                                <span className={cx('text-note')}>Cover image</span>

                                <div className={cx('container-image')}>
                                    <div className={cx('background-image')}></div>
                                </div>
                            </div>

                            <div className={cx('rule-video')}>
                                <div className={cx('rule-video-title')}>Who can watch this video</div>
                                <select className={cx('who-watch')}>
                                    <option className={cx('who-watch-option')} value="public">
                                        Public
                                    </option>
                                    <option className={cx('who-watch-option')} value="friend">
                                        Friend
                                    </option>
                                    <option className={cx('who-watch-option')} value="private">
                                        Private
                                    </option>
                                </select>
                            </div>

                            <div className={cx('rule-allow')}>
                                <div className={cx('text-note')}>Allows users to:</div>
                                <div className={cx('rule-checkbox')}>
                                    <label className={cx('container')}>
                                        <span className={cx('container-text')}>Comment</span>
                                        <input
                                            type="checkbox"
                                            value={comment}
                                            checked={checked.includes(comment)}
                                            onChange={(e) => {
                                                handleCheck(e.target.value);
                                            }}
                                        />
                                        <span className={cx('checkmark')}></span>
                                    </label>
                                    <label className={cx('container')}>
                                        <span className={cx('container-text')}>Duet</span>
                                        <input
                                            type="checkbox"
                                            value={duet}
                                            checked={checked.includes(duet)}
                                            onChange={(e) => {
                                                handleCheck(e.target.value);
                                            }}
                                        />
                                        <span className={cx('checkmark')}></span>
                                    </label>
                                    <label className={cx('container')}>
                                        <span className={cx('container-text')}>Stitch</span>
                                        <input
                                            type="checkbox"
                                            value={stitch}
                                            checked={checked.includes(stitch)}
                                            onChange={(e) => {
                                                handleCheck(e.target.value);
                                            }}
                                        />
                                        <span className={cx('checkmark')}></span>
                                    </label>
                                </div>
                            </div>

                            <div className={cx('toggle-check')}>
                                <h4>Run the copyright check</h4>
                            </div>

                            <div className={cx('copy-right')}>
                                <span>
                                    We'll check if your video uses pirated audio. If we find a violation, you can edit
                                    the video before posting.
                                </span>
                                <div className={cx('copy-right-info')} onClick={console.log('1111')}>
                                    &nbsp; looking for more information
                                </div>
                            </div>

                            <div className={cx('btn-row')}>
                                <Button btnTextColor outline large>
                                    Cancel
                                </Button>
                                <Button large disabled>
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
