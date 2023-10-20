import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import facebook from '../../../asset/image/facebook-logo.svg';
import git from '../../../asset/image/github-logo.svg';
import insta from '../../../asset/image/instagram-logo.svg';
import avatar from '../../../asset/image/avatar.jpg';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('info')}>
            <img src={avatar} className={cx('avatar')}></img>
            <p className={cx('name')}>Nguyễn Thành Công</p>
            <div className={cx('logo')}>
                <a href="https://www.facebook.com/profile.php?id=100036625896235">
                    <img src={facebook}></img>
                </a>
                <a href="https://github.com/cong0912">
                    <img src={git}></img>
                </a>
                <img src={insta}></img>
            </div>
        </div>
    );
}

export default Contact;
