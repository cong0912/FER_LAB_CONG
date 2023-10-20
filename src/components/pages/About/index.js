import styles from './About.module.scss';
import classNames from 'classnames/bind';
import image from '../../../asset/image/about.jpg';

const cx = classNames.bind(styles);
function About() {
    return (
        <div>
            <img src={image} className={cx('img')}></img>
            <p className={cx('para')}>
                Chào mừng bạn đến với [Phim vip không chỗ nào có] - Thế Giới Giải Trí Truyền Hình Đỉnh Cao! [Phim vip
                không chỗ nào có] là một cộng đồng trực tuyến nơi bạn có thể tìm thấy và tận hưởng một loạt các chương
                trình truyền hình phong phú, từ những bộ phim nổi tiếng đến các series truyền hình độc quyền và nội dung
                tạo bởi cộng đồng. Với hàng nghìn tập phim và nhiều thể loại khác nhau, chúng tôi đã thiết lập một nền
                tảng giải trí hoàn hảo cho tất cả mọi người. Dưới đây là một số điểm nổi bật của [Phim vip không chỗ nào
                có]: Thư viện phim đa dạng: Chúng tôi cung cấp một kho phim đa dạng, từ hài hước, tình cảm đến hành động
                và kinh dị. Bất kể bạn là người yêu phim truyền hình nào, bạn đều có thể tìm thấy nội dung phù hợp với
                sở thích của mình. Chương trình độc quyền: Chúng tôi tự hào giới thiệu các series truyền hình độc quyền
                mà bạn không thể tìm thấy ở bất kỳ nơi nào khác. Bạn có thể theo dõi những tập phim mới nhất và bắt kịp
                xu hướng truyền hình hiện tại. Khám phá nội dung mới: Trang web của chúng tôi luôn cập nhật với nhiều
                tập phim và series mới hàng ngày. Hãy duyệt qua các bộ phim phổ biến hoặc tìm kiếm các series truyền
                hình mới để đảm bảo bạn không bao giờ thiếu nội dung để xem. Hỗ trợ đa nền tảng: Chúng tôi hiểu rằng bạn
                có thể muốn xem phim trên nhiều thiết bị khác nhau. Với [Phim vip không chỗ nào có], bạn có thể truy cập
                trang web trên máy tính, điện thoại di động hoặc bất kỳ thiết bị nào có kết nối internet. Chất lượng
                hình ảnh và âm thanh: Tất cả các phim trên trang web của chúng tôi đều được cung cấp với độ phân giải
                cao và âm thanh chất lượng, giúp bạn trải nghiệm hình ảnh và âm thanh tốt nhất. Với [Phim vip không chỗ
                nào có], bạn đã sẵn sàng để khám phá một thế giới phong phú của truyền hình và giải trí. Đăng ký ngay
                hôm nay và bắt đầu cuộc hành trình truyền hình của bạn!
                <br></br>
            </p>
        </div>
    );
}

export default About;
