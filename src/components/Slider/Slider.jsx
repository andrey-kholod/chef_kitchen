import styles from './Slider.module.scss'

import { Navigation } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation'
import ItemCard from '../ItemCard/ItemCard';
import { dataSlider } from '../../context/data';
import { useRef, useState } from 'react';

const Slider = () => {
  const [id, setId] = useState(0)

  const swiperRef = useRef();

  const handleClick = (currentID) => {
    console.log(id)
    setId(currentID)
  }

  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <section className='container-swiper'>
      <h3 className={styles.menuH3}>OUR MENU</h3>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
        <button className={styles.btn}>
          <h4>POWER</h4>
          <span>1800 KCAL</span>
        </button>
      </div>
      <div className={`${styles.board} board`}>
        <div className={styles.top}>
          <div className={styles.left}>
            {
              week.map((el, curId) => (<button onClick={() => handleClick(curId)} key={curId} className={id === curId ? styles.clicked : ''}>{el}</button>))
            }
          </div>
          <div className={styles.right}>
            <div className={styles.arrow}>
              <FaArrowLeftLong size="23" color='#fff' />
            </div>
            <div className={styles.week}>
              <h4>week 1</h4>
              <p>This week</p>
            </div>
            <div className={styles.arrow}>
              <FaArrowRightLong size="23" color='#fff' />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={5}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => console.log('slide change')}
        >
          {dataSlider.map((e, i) => (
            <SwiperSlide>
              <ItemCard {...e} />
            </SwiperSlide>
          ))}
          <button className={styles['controll-next']} onClick={() => swiperRef.current.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="36" fill="white" fill-opacity="0.8" />
              <path d="M36 5C29.8688 5 23.8753 6.81812 18.7773 10.2244C13.6794 13.6308 9.70606 18.4723 7.35975 24.1368C5.01343 29.8013 4.39953 36.0344 5.59567 42.0478C6.79181 48.0612 9.74428 53.5849 14.0797 57.9203C18.4151 62.2557 23.9388 65.2082 29.9522 66.4043C35.9656 67.6005 42.1987 66.9866 47.8632 64.6403C53.5277 62.2939 58.3692 58.3206 61.7756 53.2227C65.1819 48.1247 67 42.1312 67 36C66.9836 27.7833 63.7123 19.9079 57.9022 14.0978C52.0921 8.28771 44.2167 5.01638 36 5ZM36 64.52C30.3593 64.52 24.8452 62.8473 20.1551 59.7135C15.4651 56.5797 11.8096 52.1255 9.65097 46.9141C7.49236 41.7028 6.92757 35.9684 8.02802 30.436C9.12847 24.9037 11.8447 19.8219 15.8333 15.8333C19.8219 11.8447 24.9037 9.12845 30.436 8.028C35.9684 6.92755 41.7028 7.49234 46.9141 9.65095C52.1255 11.8096 56.5797 15.465 59.7135 20.1551C62.8473 24.8452 64.52 30.3593 64.52 36C64.5118 43.5614 61.5044 50.8109 56.1576 56.1576C50.8109 61.5044 43.5615 64.5118 36 64.52ZM49.64 36C49.64 36.3289 49.5094 36.6443 49.2768 36.8768C49.0443 37.1094 48.7289 37.24 48.4 37.24L26.607 37.24L35.008 45.641C35.2302 45.8815 35.3536 46.197 35.3536 46.5245C35.3536 46.852 35.2302 47.1674 35.008 47.408C34.8895 47.5233 34.7485 47.6131 34.5939 47.6717C34.4392 47.7304 34.2742 47.7567 34.109 47.749C33.9487 47.7542 33.7891 47.7267 33.6398 47.668C33.4906 47.6094 33.3549 47.5209 33.241 47.408L22.732 36.868C22.6158 36.7553 22.5233 36.6204 22.4602 36.4713C22.3971 36.3222 22.3646 36.1619 22.3646 36C22.3646 35.8381 22.3971 35.6778 22.4602 35.5287C22.5233 35.3796 22.6158 35.2447 22.732 35.132L33.241 24.592C33.4753 24.3577 33.7931 24.226 34.1245 24.226C34.4559 24.226 34.7737 24.3577 35.008 24.592C35.2423 24.8263 35.374 25.1441 35.374 25.4755C35.374 25.8069 35.2423 26.1247 35.008 26.359L26.607 34.76L48.4 34.76C48.7289 34.76 49.0443 34.8906 49.2768 35.1232C49.5094 35.3557 49.64 35.6711 49.64 36Z" fill="#8EC038" />
            </svg>
          </button>
          <button className={styles['controll-prev']} onClick={() => swiperRef.current.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="36" transform="rotate(-180 36 36)" fill="white" fill-opacity="0.8" />
              <path d="M36 67C42.1312 67 48.1247 65.1819 53.2227 61.7756C58.3206 58.3692 62.2939 53.5277 64.6403 47.8632C66.9866 42.1987 67.6005 35.9656 66.4043 29.9522C65.2082 23.9388 62.2557 18.4151 57.9203 14.0797C53.5849 9.74427 48.0612 6.79181 42.0478 5.59567C36.0344 4.39953 29.8013 5.01342 24.1368 7.35974C18.4723 9.70606 13.6308 13.6794 10.2244 18.7773C6.81812 23.8753 5 29.8688 5 36C5.01638 44.2167 8.28771 52.0921 14.0978 57.9022C19.9079 63.7123 27.7833 66.9836 36 67ZM36 7.48001C41.6407 7.48001 47.1548 9.15268 51.8449 12.2865C56.5349 15.4203 60.1904 19.8745 62.349 25.0859C64.5076 30.2972 65.0724 36.0316 63.972 41.564C62.8715 47.0963 60.1553 52.1781 56.1667 56.1667C52.1781 60.1553 47.0963 62.8715 41.564 63.972C36.0316 65.0724 30.2972 64.5077 25.0859 62.349C19.8745 60.1904 15.4203 56.535 12.2865 51.8449C9.15267 47.1548 7.48 41.6407 7.48 36C7.4882 28.4385 10.4956 21.1891 15.8424 15.8424C21.1891 10.4956 28.4385 7.48821 36 7.48001ZM22.36 36C22.36 35.6711 22.4906 35.3557 22.7232 35.1232C22.9557 34.8906 23.2711 34.76 23.6 34.76L45.393 34.76L36.992 26.359C36.7698 26.1185 36.6464 25.803 36.6464 25.4755C36.6464 25.148 36.7698 24.8326 36.992 24.592C37.1106 24.4767 37.2515 24.3869 37.4061 24.3283C37.5608 24.2696 37.7258 24.2433 37.891 24.251C38.0513 24.2458 38.2109 24.2733 38.3602 24.332C38.5094 24.3906 38.6451 24.4791 38.759 24.592L49.268 35.132C49.3842 35.2447 49.4767 35.3796 49.5398 35.5287C49.6029 35.6778 49.6354 35.8381 49.6354 36C49.6354 36.1619 49.6029 36.3222 49.5398 36.4713C49.4767 36.6204 49.3842 36.7553 49.268 36.868L38.759 47.408C38.5247 47.6423 38.2069 47.774 37.8755 47.774C37.5441 47.774 37.2263 47.6423 36.992 47.408C36.7577 47.1737 36.626 46.8559 36.626 46.5245C36.626 46.1931 36.7577 45.8753 36.992 45.641L45.393 37.24L23.6 37.24C23.2711 37.24 22.9557 37.1094 22.7232 36.8768C22.4906 36.6443 22.36 36.3289 22.36 36Z" fill="#8EC038" />
            </svg>
          </button>
        </Swiper>
        <div className={styles.board_bottom}>
          <p>A balanced menu helps to maintain health and a slim figure, allows you to be cheerful and active throughout the week. While preparing our dishes, we use products from the best suppliers and always choose products that correspond to the concept of healthy nutrition. For example, lean beef, turkey and chicken, low-calorie sauces, pasta of hard varieties. Delivery is carried out every 2 days.</p>
        </div>
        <div className={styles.total}>
          <div className={styles.from}>
            <button className={styles.journal_btn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16C36 15.2044 36.3161 14.4413 36.8787 13.8787C37.4413 13.3161 38.2044 13 39 13C39.7956 13 40.5587 13.3161 41.1213 13.8787C41.6839 14.4413 42 15.2044 42 16V36.303L39 40.803L36 36.303V16ZM39 15C38.7348 15 38.4804 15.1054 38.2929 15.2929C38.1054 15.4804 38 15.7348 38 16V35.697L39 37.197L40 35.697V16C40 15.7348 39.8946 15.4804 39.7071 15.2929C39.5196 15.1054 39.2652 15 39 15Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41 20H37V18H41V20ZM10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V38C8 38.5304 8.21071 39.0391 8.58579 39.4142C8.96086 39.7893 9.46957 40 10 40H30C30.5304 40 31.0391 39.7893 31.4142 39.4142C31.7893 39.0391 32 38.5304 32 38V10C32 9.46957 31.7893 8.96086 31.4142 8.58579C31.0391 8.21071 30.5304 8 30 8H10ZM6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H30C31.0609 6 32.0783 6.42143 32.8284 7.17157C33.5786 7.92172 34 8.93913 34 10V38C34 39.0609 33.5786 40.0783 32.8284 40.8284C32.0783 41.5786 31.0609 42 30 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 15C20.0001 14.7348 20.1054 14.4804 20.293 14.2929C20.4805 14.1054 20.7349 14 21.0001 14H29.0001C29.2653 14 29.5197 14.1054 29.7072 14.2929C29.8947 14.4804 30.0001 14.7348 30.0001 15C30.0001 15.2652 29.8947 15.5196 29.7072 15.7071C29.5197 15.8946 29.2653 16 29.0001 16H21.0001C20.7349 16 20.4805 15.8946 20.293 15.7071C20.1054 15.5196 20.0001 15.2652 20.0001 15ZM20.0001 19C20.0001 18.7348 20.1054 18.4804 20.293 18.2929C20.4805 18.1054 20.7349 18 21.0001 18H29.0001C29.2653 18 29.5197 18.1054 29.7072 18.2929C29.8947 18.4804 30.0001 18.7348 30.0001 19C30.0001 19.2652 29.8947 19.5196 29.7072 19.7071C29.5197 19.8946 29.2653 20 29.0001 20H21.0001C20.7349 20 20.4805 19.8946 20.293 19.7071C20.1054 19.5196 20.0001 19.2652 20.0001 19ZM20.0001 28C20.0001 27.7348 20.1054 27.4804 20.293 27.2929C20.4805 27.1054 20.7349 27 21.0001 27H29.0001C29.2653 27 29.5197 27.1054 29.7072 27.2929C29.8947 27.4804 30.0001 27.7348 30.0001 28C30.0001 28.2652 29.8947 28.5196 29.7072 28.7071C29.5197 28.8946 29.2653 29 29.0001 29H21.0001C20.7349 29 20.4805 28.8946 20.293 28.7071C20.1054 28.5196 20.0001 28.2652 20.0001 28ZM20.0001 32C20.0001 31.7348 20.1054 31.4804 20.293 31.2929C20.4805 31.1054 20.7349 31 21.0001 31H29.0001C29.2653 31 29.5197 31.1054 29.7072 31.2929C29.8947 31.4804 30.0001 31.7348 30.0001 32C30.0001 32.2652 29.8947 32.5196 29.7072 32.7071C29.5197 32.8946 29.2653 33 29.0001 33H21.0001C20.7349 33 20.4805 32.8946 20.293 32.7071C20.1054 32.5196 20.0001 32.2652 20.0001 32ZM12.0001 28V31H15.0001V28H12.0001ZM11.0001 26H16.0001C16.2653 26 16.5197 26.1054 16.7072 26.2929C16.8947 26.4804 17.0001 26.7348 17.0001 27V32C17.0001 32.2652 16.8947 32.5196 16.7072 32.7071C16.5197 32.8946 16.2653 33 16.0001 33H11.0001C10.7349 33 10.4805 32.8946 10.293 32.7071C10.1054 32.5196 10.0001 32.2652 10.0001 32V27C10.0001 26.7348 10.1054 26.4804 10.293 26.2929C10.4805 26.1054 10.7349 26 11.0001 26ZM17.7071 14.293C17.8946 14.4805 17.9999 14.7348 17.9999 15C17.9999 15.2652 17.8946 15.5195 17.7071 15.707L13.0001 20.414L10.2931 17.707C10.1976 17.6148 10.1214 17.5044 10.069 17.3824C10.0166 17.2604 9.98898 17.1292 9.98783 16.9964C9.98668 16.8636 10.012 16.7319 10.0623 16.609C10.1125 16.4862 10.1868 16.3745 10.2807 16.2806C10.3746 16.1867 10.4862 16.1125 10.6091 16.0622C10.732 16.0119 10.8637 15.9866 10.9965 15.9877C11.1293 15.9889 11.2605 16.0165 11.3825 16.0689C11.5045 16.1213 11.6148 16.1975 11.7071 16.293L13.0001 17.586L16.2931 14.293C16.4806 14.1055 16.7349 14.0002 17.0001 14.0002C17.2652 14.0002 17.5196 14.1055 17.7071 14.293Z" fill="white" />
              </svg>
              <div className={styles.journal_text}>
                <p>from 56</p>
                <p>gel/day</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M9.24461 3.02092L18.0207 11.7709C18.1248 11.8751 18.1988 11.9879 18.2425 12.1095C18.2863 12.231 18.3078 12.3612 18.3071 12.5001C18.3071 12.639 18.2856 12.7692 18.2425 12.8907C18.1995 13.0122 18.1255 13.1251 18.0207 13.2292L9.24461 22.0053C9.00156 22.2483 8.69774 22.3699 8.33315 22.3699C7.96857 22.3699 7.65607 22.2397 7.39565 21.9792C7.13524 21.7188 7.00503 21.415 7.00503 21.0678C7.00503 20.7206 7.13524 20.4167 7.39565 20.1563L15.0519 12.5001L7.39566 4.84383C7.1526 4.60078 7.03107 4.30113 7.03107 3.94487C7.03107 3.58863 7.16128 3.28064 7.4217 3.02092C7.68211 2.7605 7.98593 2.63029 8.33316 2.63029C8.68038 2.63029 8.9842 2.7605 9.24461 3.02092Z" fill="white" />
              </svg>
            </button>
            <div className={styles.total_text}>
              <p>Total:</p>
              <p>1435 kcal</p>
            </div>
          </div>
          <div className={styles.fats}>
            <div className={styles.item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M31.1552 24.549C31.0173 24.4112 30.8657 24.2873 30.7045 24.1807C30.4882 24.0377 30.1968 24.0972 30.0538 24.3135C29.9108 24.5298 29.9703 24.8212 30.1866 24.9642C30.7278 25.322 31.0608 25.9377 31.0608 26.5886C31.0608 27.1083 30.8585 27.5968 30.491 27.9642C30.1047 28.3507 29.5708 28.5586 29.0232 28.5319C28.8917 28.5262 28.7625 28.5755 28.669 28.6689C28.5755 28.7624 28.5258 28.8909 28.532 29.0231C28.5577 29.5694 28.3508 30.1045 27.9643 30.4909C27.1973 31.2578 25.9715 31.2491 25.2132 30.4909C24.8457 30.1235 24.6434 29.635 24.6434 29.1154C24.6434 28.5957 24.8457 28.1072 25.2132 27.7397C25.4713 27.4817 25.872 27.1963 25.5035 26.8278C25.5027 26.827 23.6477 24.9721 23.6477 24.9721L24.9722 23.6476C24.9722 23.6476 26.8249 25.5003 26.8279 25.5034C27.0263 25.7017 27.3754 25.6736 27.5398 25.4475C27.6005 25.3639 27.6679 25.2851 27.7398 25.2131C27.9631 24.9898 28.2277 24.8287 28.5262 24.7342C28.7735 24.6559 28.9105 24.392 28.8322 24.1447C28.754 23.8974 28.49 23.7606 28.2428 23.8387C27.8337 23.9683 27.454 24.1916 27.1398 24.4869L25.4803 22.8274C25.4803 22.8274 25.0445 21.7313 24.9717 21.2153C24.8152 20.1042 24.7998 18.9988 24.8114 17.8835C24.82 17.0619 24.8282 16.2385 24.7491 15.4197C24.3477 11.2677 22.2427 7.62437 20.5475 5.29918C18.9801 3.14937 16.9957 1.25593 16.9618 1.22206C15.7197 -0.0201943 13.7225 -0.327632 11.3382 0.356056C9.05003 1.01224 6.65059 2.51293 4.58178 4.58174C2.51296 6.65056 1.01228 9.04999 0.356089 11.3381C-0.327661 13.7224 -0.0201613 15.7196 1.22196 16.9618C1.25271 16.9926 3.13309 18.9682 5.29909 20.5474C7.20484 21.9368 9.2939 23.1059 11.5265 23.8787C12.1793 24.1047 12.8445 24.2959 13.519 24.4454C14.6057 24.6862 15.7118 24.8119 16.8285 24.8152C18.2935 24.8195 19.7557 24.7661 21.2153 24.9717C21.7313 25.0444 22.777 25.4687 22.8023 25.4745L24.4869 27.1397C23.9814 27.6766 23.7041 28.3746 23.7041 29.1154C23.7041 29.8859 24.0042 30.6102 24.549 31.1551C25.0938 31.6999 25.8182 32 26.5887 32C27.3592 32 28.0835 31.6999 28.6284 31.1551C29.0888 30.6947 29.3773 30.0922 29.4532 29.4532C30.0922 29.3773 30.6947 29.0887 31.1551 28.6284C31.6999 28.0836 32 27.3592 32 26.5887C32 25.8182 31.7 25.0938 31.1552 24.549ZM1.2589 11.5971C1.8719 9.45949 3.28784 7.20393 5.2459 5.24593C7.2039 3.28787 9.45946 1.87187 11.597 1.25893C12.3434 1.04493 13.0399 0.938868 13.6717 0.938868C14.7682 0.938868 15.6697 1.25818 16.2977 1.88612C17.2875 2.87593 17.5103 4.54537 16.9249 6.58674C16.312 8.72431 14.896 10.9799 12.938 12.9379C10.98 14.8959 8.7244 16.3119 6.58684 16.9248C4.54528 17.5103 2.87609 17.2875 1.88621 16.2976C0.896276 15.3078 0.673526 13.6384 1.2589 11.5971ZM21.3462 24.0416C21.0379 23.9982 20.7299 23.9643 20.4218 23.9384C19.5418 23.8641 18.6613 23.8539 17.7708 23.8666C15.9913 23.892 14.3937 23.7587 12.6885 23.2637C10.1781 22.535 7.97359 21.3322 5.8709 19.8019C5.07503 19.2227 4.37871 18.6511 3.80046 18.1429C4.02965 18.1699 4.26628 18.1838 4.5104 18.1838C5.2314 18.1838 6.01515 18.0659 6.84571 17.8277C9.13378 17.1715 11.5333 15.6708 13.6021 13.6021C15.6708 11.5332 17.1715 9.13374 17.8277 6.84568C18.1465 5.73412 18.2496 4.70687 18.1432 3.80087C18.6513 4.37906 19.2227 5.07506 19.8019 5.87093C21.4225 8.09749 23.434 11.5772 23.8142 15.5102C24.0017 17.4508 23.768 19.4049 24.0416 21.3465C24.1191 21.8961 24.2932 22.3832 24.4698 22.8217L22.8216 24.47C22.3831 24.2932 21.8961 24.1191 21.3462 24.0416Z" fill="black" />
                <path d="M7.12315 15.8424C8.87478 15.2538 10.7433 14.0258 12.3847 12.3844C14.0261 10.743 15.2541 8.8745 15.8427 7.12282C16.4684 5.26075 16.3044 3.72669 15.381 2.80319C13.5347 0.957129 9.32634 2.27313 5.79984 5.79938C5.25696 6.34225 4.75346 6.91663 4.30303 7.50663C4.14571 7.71282 4.18528 8.0075 4.3914 8.16488C4.59771 8.32219 4.89228 8.28263 5.04965 8.0765C5.47471 7.51957 5.95059 6.97694 6.46403 6.46357C9.5129 3.41463 13.2924 2.04257 14.7169 3.46732C15.3654 4.11582 15.4513 5.33913 14.9525 6.82363C14.4093 8.44044 13.2615 10.1794 11.7207 11.7201C10.1799 13.2609 8.44096 14.4088 6.82415 14.952C5.33978 15.4508 4.11634 15.3651 3.46778 14.7164C2.58596 13.8346 2.75378 11.9636 3.90571 9.8335C4.02909 9.60538 3.94415 9.32044 3.71603 9.19713C3.48796 9.07363 3.20296 9.15863 3.07965 9.38682C1.70165 11.9348 1.59853 14.1754 2.80371 15.3806C3.35853 15.9354 4.13359 16.2161 5.06803 16.216C5.68859 16.2161 6.3799 16.0922 7.12315 15.8424Z" fill="black" />
                <path d="M10.4194 9.16051C11.133 9.16051 12.0113 8.70689 12.7637 7.88614C13.8737 6.67533 14.164 5.26114 13.4391 4.59658C13.0565 4.24576 12.4848 4.18383 11.8296 4.42208C11.2773 4.62295 10.7059 5.02508 10.2205 5.55451C9.11052 6.76526 8.82014 8.17945 9.54502 8.84414C9.77858 9.05814 10.0804 9.16051 10.4194 9.16051ZM10.9128 6.18914C11.2925 5.77508 11.7436 5.4527 12.1505 5.30464C12.56 5.15564 12.9451 5.1877 12.8913 5.70851C12.8316 6.28557 12.4518 6.83645 12.0715 7.25139C11.2825 8.11189 10.4105 8.36314 10.1798 8.15176C9.94914 7.94032 10.1239 7.0497 10.9128 6.18914Z" fill="black" />
              </svg>
              <div className={styles.item_text}>
                <p>71</p>
                <p>Protein</p>
              </div>
            </div>
            <div className={styles.item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                <path d="M31.8342 19.6592C31.5543 19.3161 31.2523 18.9955 30.9318 18.6984C31.458 17.8922 31.7664 16.9231 31.7664 15.8809C31.7664 15.0667 31.573 14.2559 31.2073 13.5362C31.0799 13.2853 30.7789 13.1883 30.5352 13.3195C30.2915 13.4507 30.1972 13.7605 30.3247 14.0114C30.6204 14.5933 30.7703 15.2223 30.7703 15.8809C30.7703 16.6793 30.5439 17.4242 30.1541 18.0516C29.912 17.8713 29.6621 17.703 29.4049 17.5478C29.7026 17.0652 29.8758 16.4937 29.8758 15.8808C29.8758 14.1602 28.516 12.7603 26.8445 12.7603C26.3519 12.7603 25.8867 12.8826 25.4752 13.0983V12.0936C25.9018 11.9296 26.363 11.8395 26.8445 11.8395C27.5806 11.8395 28.2988 12.0513 28.9214 12.4519C29.1547 12.602 29.4619 12.529 29.6078 12.2888C29.7535 12.0487 29.6827 11.7324 29.4494 11.5823C28.6682 11.0797 27.7674 10.814 26.8444 10.814C26.3692 10.814 25.9101 10.8852 25.4752 11.0154V7.04382C26.3695 7.03685 27.0951 6.28605 27.0951 5.36375C27.0951 4.43755 26.3633 3.68395 25.4637 3.68341L26.184 1.13285C26.2603 0.862764 26.2099 0.578867 26.0459 0.353965C25.8819 0.128994 25.6311 0 25.3579 0H19.234C18.9592 0 18.7076 0.130156 18.5437 0.357041C18.3797 0.583926 18.331 0.869395 18.4099 1.14023L19.1515 3.68341H17.1964C16.8821 3.68341 16.5962 3.86148 16.4505 4.14825C16.3048 4.43495 16.3256 4.77818 16.5048 5.0441L17.1922 6.06341C17.6062 6.67755 18.287 7.04416 19.0132 7.04416H19.2368V15.1551C19.2368 15.7657 18.8164 16.2853 18.2371 16.3905C16.644 16.6798 15.1523 17.405 13.9137 18.4731C13.6122 16.2777 12.964 14.3309 12.0359 12.9098C11.9051 12.7095 11.6868 12.59 11.452 12.59C11.2171 12.59 10.9988 12.7095 10.8681 12.9097C9.553 14.9235 8.79869 17.9922 8.79869 21.329C8.79869 21.8329 8.81675 22.3321 8.85161 22.8233C8.60584 22.5405 8.35031 22.2618 8.08529 21.989C7.91263 21.8113 7.73526 21.6355 7.54301 21.4517C7.34154 21.2591 7.02637 21.271 6.83911 21.4784C6.65191 21.6859 6.66353 22.0104 6.86507 22.2031C7.04829 22.3783 7.21702 22.5454 7.38098 22.7142C8.28517 23.645 9.07348 24.6401 9.71397 25.6417C9.61489 25.7145 9.51886 25.793 9.42556 25.8761C9.11272 25.7089 8.7777 25.5745 8.42588 25.4773L4.86697 21.8137C4.67247 21.6135 4.35711 21.6135 4.16267 21.8137C3.96816 22.0139 3.96816 22.3385 4.16267 22.5387L6.84834 25.3034C6.36908 25.3265 5.90856 25.417 5.47705 25.5647C5.32903 25.4218 5.1824 25.2758 5.03744 25.1266C3.06238 23.0934 1.61572 20.7099 1.09291 18.6537C2.34486 18.9919 3.75241 19.7137 5.10829 20.7179C5.33155 20.8834 5.64286 20.8311 5.80343 20.6012C5.96407 20.3714 5.91334 20.051 5.69001 19.8856C4.03318 18.6584 2.35569 17.848 0.838903 17.542C0.608673 17.4956 0.372399 17.57 0.206384 17.741C0.0403016 17.9119 -0.031882 18.1553 0.0131414 18.3921C0.231552 19.5392 0.73252 20.8167 1.46206 22.0862C2.21809 23.4019 3.18404 24.6688 4.33313 25.8517C4.38978 25.91 4.44722 25.9671 4.5044 26.0244C3.21499 26.8192 2.3612 28.188 2.3612 29.7413C2.3612 32.1917 4.48434 34.1852 7.09404 34.1852C8.22952 34.1852 9.2715 33.8064 10.0878 33.1782C10.9611 33.845 11.9837 34.1826 12.979 34.1826C13.8365 34.1826 14.6733 33.9308 15.377 33.4242C16.4118 33.9123 17.5615 34.1853 18.7722 34.1853H25.8198C30.3304 34.1853 34 30.4078 34 25.7645C34 23.5398 33.2308 21.3715 31.8342 19.6592ZM26.8445 13.7858C27.9667 13.7858 28.8797 14.7256 28.8797 15.8809C28.8797 16.3247 28.7446 16.7363 28.515 17.0753C27.8599 16.7723 27.1704 16.5475 26.4603 16.4097C25.8895 16.2989 25.4753 15.7806 25.4753 15.1771V14.333C25.837 13.9934 26.3175 13.7858 26.8445 13.7858ZM19.4166 1.02553H25.1771L24.4264 3.68354H20.1916L19.4166 1.02553ZM18.0106 5.4788L17.4914 4.70894H25.4628C25.8136 4.70894 26.0991 5.00274 26.0991 5.36396C26.0991 5.72517 25.8137 6.01897 25.4628 6.01897H19.0133C18.6134 6.01891 18.2385 5.81704 18.0106 5.4788ZM11.4521 13.8806C12.495 15.7152 13.1093 18.4536 13.1093 21.3291C13.1093 22.5747 12.9962 23.7855 12.7848 24.9073C12.5061 24.8671 12.2266 24.8536 11.9501 24.8659V18.8624C11.9501 18.5793 11.7271 18.3497 11.4521 18.3497C11.177 18.3497 10.954 18.5793 10.954 18.8624V25.0309C10.8315 25.0668 10.7108 25.1084 10.592 25.1558C10.4108 24.8688 10.2183 24.5827 10.0155 24.2985C9.87108 23.3523 9.79485 22.3524 9.79485 21.3291C9.79485 18.4536 10.4091 15.7153 11.4521 13.8806ZM3.35729 29.7414C3.35729 27.8564 5.03359 26.3229 7.09404 26.3229C7.68399 26.3229 8.2422 26.4489 8.73886 26.6726C7.6235 28.3661 7.84297 30.7834 9.33479 32.475C8.71004 32.9047 7.93408 33.1598 7.09404 33.1598C5.03359 33.1599 3.35729 31.6263 3.35729 29.7414ZM10.2135 31.939C8.75659 30.4392 8.62464 28.1346 9.91943 26.8017C10.4984 26.2058 11.2821 25.8835 12.1426 25.8835C12.204 25.8835 12.2659 25.8852 12.328 25.8884C13.2804 25.9391 14.1973 26.3709 14.9099 27.1045C16.3669 28.6043 16.4988 30.9089 15.204 32.2418C13.9092 33.5747 11.6705 33.4388 10.2135 31.939ZM25.8198 33.1599H18.7722C17.8574 33.1599 16.9823 32.9822 16.1769 32.6597C16.3225 32.476 16.4512 32.282 16.5618 32.0792C17.2523 32.3362 17.9967 32.4764 18.7722 32.4764H25.8198C29.1074 32.4764 31.8892 29.9454 32.2906 26.589C32.3242 26.308 32.1301 26.0521 31.8571 26.0175C31.5838 25.9829 31.3356 26.1827 31.302 26.4637C30.962 29.3069 28.6052 31.451 25.8198 31.451H18.7722C18.1292 31.451 17.5121 31.336 16.9379 31.1267C17.3548 29.5466 16.9028 27.7058 15.6143 26.3795C15.0645 25.8135 14.4235 25.4055 13.7502 25.1554C13.9131 24.3086 14.0212 23.4161 14.0718 22.4995C14.2824 22.1076 14.5305 21.7349 14.816 21.3889C15.8078 20.1865 17.1702 19.3718 18.6562 19.0913L26.0125 19.1055C27.4807 19.4015 28.8242 20.2212 29.7999 21.4175C30.4648 22.2327 30.9399 23.212 31.1738 24.2497C31.236 24.5255 31.5033 24.6971 31.7715 24.6332C32.0395 24.5692 32.2062 24.2937 32.1441 24.0179C31.8749 22.8236 31.328 21.6965 30.5627 20.7581C29.4297 19.369 27.8635 18.4211 26.1526 18.0891C26.1225 18.0832 26.0919 18.0802 26.0613 18.0802L18.6131 18.0658C18.5848 18.0671 18.5546 18.0684 18.5257 18.0736C16.8141 18.3845 15.2435 19.3097 14.0956 20.6801C14.0862 20.3611 14.0696 20.0453 14.0465 19.733C15.24 18.5189 16.7651 17.6992 18.4103 17.4003C19.4665 17.2085 20.233 16.2643 20.233 15.1552V7.0443H24.4791V15.1771C24.4791 16.2731 25.2347 17.2152 26.2757 17.4173C28.1368 17.7785 29.84 18.8089 31.0713 20.3186C32.3176 21.8466 33.0039 23.7806 33.0039 25.7645C33.0039 29.8424 29.7811 33.1599 25.8198 33.1599Z" fill="black" />
                <path d="M4.59863 28.7615C4.32358 28.7615 4.10059 28.991 4.10059 29.2742V30.2084C4.10059 30.4915 4.32358 30.7211 4.59863 30.7211C4.87369 30.7211 5.09668 30.4915 5.09668 30.2084V29.2742C5.09668 28.991 4.87375 28.7615 4.59863 28.7615Z" fill="black" />
                <path d="M10.7661 27.0125L10.1244 27.673C9.92989 27.8733 9.92989 28.1978 10.1244 28.3981C10.2216 28.4982 10.3491 28.5482 10.4765 28.5482C10.604 28.5482 10.7315 28.4982 10.8287 28.3981L11.4704 27.7375C11.6649 27.5373 11.6649 27.2127 11.4704 27.0125C11.2759 26.8122 10.9606 26.8122 10.7661 27.0125Z" fill="black" />
              </svg>
              <div className={styles.item_text}>
                <p>70</p>
                <p>Fat</p>
              </div>
            </div>
            <div className={styles.item}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 31 35" fill="none">
                <path d="M28.7824 13.897C27.8157 12.1754 26.4696 10.6403 24.8572 9.41382C26.2118 8.13475 26.7251 6.61242 26.7498 6.53846C26.8587 6.20761 26.7072 5.84658 26.3991 5.69972C26.0917 5.55339 25.7252 5.67034 25.5506 5.96968C25.486 6.07917 25.0232 6.80442 23.9919 6.80442C23.6339 6.80442 23.2069 6.71683 22.705 6.48585C20.1582 5.31413 17.4623 5.76327 16.9728 5.85887H16.5883C16.0145 4.43988 14.2229 0.420291 12.2094 0.0381732C11.4844 -0.100148 10.8626 0.141246 10.5049 0.700405C10.0691 1.38213 10.0299 2.69244 10.7991 3.87858C11.0839 4.31731 11.4398 4.94029 11.8463 5.70987C10.708 5.65058 9.02528 5.7387 7.40222 6.48585C5.45387 7.38147 4.64325 6.11815 4.55739 5.97102C4.38619 5.67435 4.02614 5.55552 3.71875 5.69491C3.41188 5.83377 3.25391 6.18705 3.35092 6.51789C3.37479 6.59934 3.88684 8.30565 5.24947 9.76176C3.74677 10.9957 2.49698 12.5106 1.60776 14.1827C0.541107 16.1905 0 18.3547 0 20.6154C0 24.4697 1.59634 28.0901 4.49565 30.8087C7.37784 33.5118 11.2053 35 15.2734 35C19.3416 35 23.169 33.5118 26.0512 30.8087C28.9505 28.0901 30.5469 24.4697 30.5469 20.6154C30.5469 18.2746 29.9365 15.9518 28.7824 13.897ZM7.94411 7.73421C9.77236 6.89254 11.7565 7.0402 12.5555 7.14968L12.627 7.31845V7.31978L13.363 9.05627C13.509 9.4002 13.8963 9.55882 14.2314 9.41169C14.5668 9.26535 14.7248 8.86828 14.5855 8.52168C14.4029 8.06719 14.0833 7.31791 13.8478 6.7697C13.7601 6.56596 13.6903 6.40387 13.6525 6.31789C13.6486 6.30828 13.6439 6.29866 13.6392 6.28985C13.6307 6.26582 13.6205 6.24259 13.6094 6.21989C12.9259 4.8527 12.3516 3.80942 11.9033 3.11915C11.4802 2.4676 11.4504 1.70951 11.6144 1.45236C11.6377 1.41631 11.6927 1.33006 11.9684 1.38213C12.8756 1.5549 14.4693 3.97979 15.5204 6.78813C15.6195 7.05195 15.8651 7.22605 16.1401 7.22605H17.0384C17.0851 7.22605 17.132 7.22071 17.1774 7.2111C17.1907 7.20843 17.868 7.06557 18.8381 7.06557C19.7823 7.06557 21.0049 7.20095 22.1631 7.73421C22.9532 8.09764 23.6326 8.20178 24.1983 8.1668C23.9607 8.41914 23.6865 8.66587 23.3716 8.88724C21.9945 9.85602 20.2684 10.0475 18.2412 9.45681C17.9935 9.38418 17.7271 9.46643 17.5585 9.6667C17.3899 9.86697 17.3494 10.15 17.4534 10.3925C17.5551 10.6264 17.7377 10.8123 18.0153 11.0948C18.5248 11.612 19.3642 12.4665 19.7963 13.8852C19.1289 13.5939 18.4962 13.5544 18.042 13.5255C17.8254 13.5119 17.6015 13.4975 17.5053 13.462L17.4402 13.4387C15.9435 12.8945 15.7204 12.4011 15.7204 12.1549C15.7204 11.7776 15.4169 11.4713 15.0504 11.4713C14.6838 11.4713 14.3863 11.7776 14.3863 12.1549C14.3863 12.7421 12.7054 13.8094 12.0188 14.0615C11.9399 14.0911 11.8569 14.1183 11.7705 14.1477C11.3861 14.2761 10.9238 14.43 10.3832 14.7862C10.846 13.3573 11.6616 12.3717 12.1656 11.7639C12.4066 11.4721 12.5661 11.2801 12.653 11.0803C12.7573 10.8376 12.7168 10.5546 12.5482 10.3543C12.42 10.2026 12.2361 10.1185 12.046 10.1185C11.9856 10.1185 11.9246 10.1268 11.8649 10.1444C9.82216 10.7399 8.08574 10.4515 6.70314 9.28672H6.70236C6.28525 8.93451 5.94128 8.53877 5.66036 8.14837C6.28343 8.23516 7.04244 8.14917 7.94411 7.73421C9.77236 6.89254 7.04244 8.14917 7.94411 7.73421ZM15.2734 33.6328C7.58432 33.6328 1.32813 27.7934 1.32813 20.6154C1.32813 16.751 3.12576 13.1517 6.27799 10.6681C7.2113 11.3322 8.30467 11.7135 9.43514 11.7925C9.76976 11.8157 10.1059 11.8139 10.4403 11.7898C9.69142 12.8366 8.8201 14.426 8.7166 16.5998C8.70259 16.8925 8.8712 17.1611 9.13553 17.269C9.21465 17.3013 9.29765 17.3168 9.37988 17.3168C9.48753 17.3168 9.59311 17.2904 9.68805 17.2391C9.70932 17.2274 9.72929 17.2143 9.74901 17.2015C9.79881 17.1665 9.84473 17.1248 9.88519 17.0762C10.8701 15.8861 11.5666 15.653 12.1809 15.4479C12.2792 15.415 12.3721 15.3835 12.4665 15.3493C12.489 15.3405 14.1061 14.6706 15.0496 13.6246C15.6812 14.2489 16.5956 14.5816 16.9979 14.728L17.0578 14.7499C17.332 14.8503 17.6368 14.8695 17.9603 14.89C18.6747 14.9352 19.485 14.9864 20.2215 15.8765C20.4054 16.0994 20.7068 16.1766 20.9711 16.0692C21.2355 15.9611 21.4041 15.6925 21.3901 15.4001C21.2959 13.4169 20.5566 12.0523 19.8562 11.141C20.906 11.2168 21.974 11.082 22.9506 10.667C23.2204 10.5524 23.4837 10.4203 23.735 10.2675C25.3493 11.4208 26.6914 12.9047 27.633 14.5811C28.6701 16.4281 29.2188 18.5144 29.2188 20.6151C29.2188 27.7934 22.9626 33.6328 15.2734 33.6328Z" fill="black" />
                <path d="M15.2734 32.2598C8.46265 32.2598 2.92188 27.0362 2.92188 20.6155C2.92188 20.2379 3.21915 19.9319 3.58594 19.9319C3.95273 19.9319 4.25 20.2379 4.25 20.6155C4.25 26.2824 9.19519 30.8926 15.2734 30.8926C15.6402 30.8926 15.9375 31.1986 15.9375 31.5762C15.9375 31.9538 15.6402 32.2598 15.2734 32.2598Z" fill="black" />
                <path d="M18.0178 31.9595C17.651 31.9595 17.3535 31.6535 17.3535 31.2759C17.3535 30.8983 17.6505 30.5923 18.0171 30.5923H18.0178C18.3846 30.5923 18.6819 30.8983 18.6819 31.2759C18.6819 31.6535 18.3846 31.9595 18.0178 31.9595Z" fill="black" />
              </svg>
              <div className={styles.item_text}>
                <p>129</p>
                <p>Carbohydrates</p>
              </div>
            </div>
          </div>
          <button className={styles.btn_fat}>Order now</button>
        </div>
        <img src="/images/6.png" className={styles.sheet} />
      </div>
    </section>
  )
}
export default Slider