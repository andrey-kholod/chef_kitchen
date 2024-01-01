import styles from './Advantages.module.scss'

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <h3 className={styles.title}>
                Our advantages
            </h3>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <div className={styles.icon_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <path d="M31.329 7.21257L28.779 2.96257C28.6254 2.70651 28.3488 2.54989 28.0502 2.55H22.9502V0.85C22.9503 0.380694 22.5699 0.000106272 22.1006 2.22537e-08H22.1002H6.8002C6.33089 -0.000106228 5.9503 0.380269 5.9502 0.849575V0.85V12.75C5.95009 13.2193 6.33046 13.5999 6.79977 13.6H6.8002H9.3502C9.3502 15.0083 10.4919 16.15 11.9002 16.15C13.3085 16.15 14.4502 15.0083 14.4502 13.6H23.8002C23.8002 15.0083 24.9419 16.15 26.3502 16.15C27.7585 16.15 28.9002 15.0083 28.9002 13.6H30.6002C31.0695 13.6001 31.4501 13.2197 31.4502 12.7504V12.75V7.65C31.4503 7.49583 31.4084 7.34464 31.329 7.21257ZM11.9002 14.45C11.4308 14.45 11.0502 14.0694 11.0502 13.6C11.0502 13.1306 11.4308 12.75 11.9002 12.75C12.3696 12.75 12.7502 13.1306 12.7502 13.6C12.7498 14.0692 12.3694 14.4496 11.9002 14.45ZM21.2502 11.9H13.787C12.8652 10.858 11.2732 10.7605 10.2311 11.6823C10.1542 11.7504 10.0815 11.8231 10.0134 11.9H7.6502V1.7H21.2502V11.9ZM26.3502 4.25H27.5688L28.5889 5.95H26.3502V4.25ZM26.3502 14.45C25.8808 14.45 25.5002 14.0694 25.5002 13.6C25.5002 13.1306 25.8808 12.75 26.3502 12.75C26.8196 12.75 27.2002 13.1306 27.2002 13.6C27.1998 14.0692 26.8194 14.4496 26.3502 14.45ZM29.7502 11.9H28.237C27.3152 10.858 25.7232 10.7605 24.6811 11.6823C24.6042 11.7504 24.5315 11.8231 24.4634 11.9H22.9502V4.25H24.6502V6.8C24.6501 7.26931 25.0305 7.64989 25.4998 7.65H25.5002H29.609L29.7502 7.88534V11.9Z" fill="white" />
                            <path d="M50.7066 37.6074L45.8996 33.4416V27.1999C45.8997 26.7305 45.5194 26.35 45.05 26.3499H45.0496H41.6496C41.1803 26.3497 40.7997 26.7301 40.7996 27.1994V27.1999V29.0218L37.9566 26.5574C37.6367 26.2809 37.1625 26.2809 36.8427 26.5574L24.0927 37.6074C23.738 37.9153 23.7002 38.4524 24.0082 38.807C24.1696 38.9929 24.4035 39.0996 24.6497 39.0999H28.8997V49.2999C28.8996 49.7692 29.28 50.1497 29.7493 50.1499H29.7497H45.0497C45.519 50.15 45.8996 49.7696 45.8997 49.3003V49.2999V39.0999H50.1497C50.6194 39.0995 50.9998 38.7185 50.9995 38.2489C50.9993 38.0027 50.8924 37.7688 50.7066 37.6074ZM39.0996 48.4499H35.6996V44.1999C35.6996 43.2609 36.4607 42.4999 37.3996 42.4999C38.3386 42.4999 39.0996 43.2609 39.0996 44.1999V48.4499ZM45.0496 37.3999C44.5803 37.3997 44.1997 37.7801 44.1996 38.2494V38.2499V48.4499H40.7996V44.1999C40.7996 42.3221 39.2774 40.7999 37.3996 40.7999C35.5219 40.7999 33.9996 42.3221 33.9996 44.1999V48.4499H30.5996V38.2499C30.5997 37.7805 30.2194 37.4 29.75 37.3999H29.7496H26.9282L37.3996 28.3246L41.0927 31.5258C41.4476 31.8332 41.9847 31.7946 42.2921 31.4397C42.4259 31.2852 42.4995 31.0876 42.4996 30.8833V28.0499H44.1996V33.8296C44.1996 34.0761 44.3065 34.3105 44.4927 34.4721L47.8711 37.3999H45.0496Z" fill="white" />
                            <path d="M4.25 2.55029H0V4.25029H4.25V2.55029Z" fill="white" />
                            <path d="M4.25 5.94995H0V7.64995H4.25V5.94995Z" fill="white" />
                            <path d="M4.25 9.3501H0V11.0501H4.25V9.3501Z" fill="white" />
                            <path d="M44.2 8.5H33.15V10.2H44.2C47.0167 10.2 49.3 12.4833 49.3 15.3C49.3 18.1167 47.0167 20.4 44.2 20.4H12.75C5.70839 20.4 0 26.1084 0 33.15C0 40.1916 5.70839 45.9 12.75 45.9H27.2V44.2H12.75C6.64721 44.2 1.7 39.2528 1.7 33.15C1.7 27.0472 6.64721 22.1 12.75 22.1H44.2C47.9555 22.1 51 19.0555 51 15.3C51 11.5445 47.9555 8.5 44.2 8.5Z" fill="white" />
                        </svg>
                    </div>
                    <p>We'll deliver it free of charge</p>
                    <p>In a convenient 2-hour interval</p>
                </div>
                <div className={styles.icon}>
                    <div className={styles.icon_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="51" viewBox="0 0 48 51" fill="none">
                            <path d="M13.4511 17.3037C13.2133 17.3037 12.9852 17.3997 12.817 17.5705C12.6488 17.7412 12.5544 17.9729 12.5544 18.2144V20.0359H10.761C10.5231 20.0359 10.2951 20.1318 10.1269 20.3026C9.95873 20.4734 9.86426 20.705 9.86426 20.9466C9.86426 21.1881 9.95873 21.4198 10.1269 21.5906C10.2951 21.7613 10.5231 21.8573 10.761 21.8573H13.4511C13.6889 21.8573 13.917 21.7613 14.0851 21.5906C14.2533 21.4198 14.3478 21.1881 14.3478 20.9466V18.2144C14.3478 17.9729 14.2533 17.7412 14.0851 17.5705C13.917 17.3997 13.6889 17.3037 13.4511 17.3037Z" fill="white" />
                            <path d="M13.4513 23.6787H9.86448C9.62666 23.6787 9.39858 23.7747 9.23041 23.9455C9.06225 24.1162 8.96777 24.3479 8.96777 24.5894V28.2323C8.96777 28.4738 9.06225 28.7055 9.23041 28.8763C9.39858 29.0471 9.62666 29.143 9.86448 29.143H13.4513C13.6891 29.143 13.9172 29.0471 14.0854 28.8763C14.2535 28.7055 14.348 28.4738 14.348 28.2323V24.5894C14.348 24.3479 14.2535 24.1162 14.0854 23.9455C13.9172 23.7747 13.6891 23.6787 13.4513 23.6787ZM12.5546 27.3216H10.7612V25.5001H12.5546V27.3216Z" fill="white" />
                            <path d="M13.4513 30.9644H9.86448C9.62666 30.9644 9.39858 31.0603 9.23041 31.2311C9.06225 31.4019 8.96777 31.6335 8.96777 31.8751V35.5179C8.96777 35.7595 9.06225 35.9911 9.23041 36.1619C9.39858 36.3327 9.62666 36.4287 9.86448 36.4287H13.4513C13.6891 36.4287 13.9172 36.3327 14.0854 36.1619C14.2535 35.9911 14.348 35.7595 14.348 35.5179V31.8751C14.348 31.6335 14.2535 31.4019 14.0854 31.2311C13.9172 31.0603 13.6891 30.9644 13.4513 30.9644ZM12.5546 34.6072H10.7612V32.7858H12.5546V34.6072Z" fill="white" />
                            <path d="M13.4513 38.25H9.86448C9.62666 38.25 9.39858 38.3459 9.23041 38.5167C9.06225 38.6875 8.96777 38.9192 8.96777 39.1607V42.8036C8.96777 43.0451 9.06225 43.2768 9.23041 43.4476C9.39858 43.6184 9.62666 43.7143 9.86448 43.7143H13.4513C13.6891 43.7143 13.9172 43.6184 14.0854 43.4476C14.2535 43.2768 14.348 43.0451 14.348 42.8036V39.1607C14.348 38.9192 14.2535 38.6875 14.0854 38.5167C13.9172 38.3459 13.6891 38.25 13.4513 38.25ZM12.5546 41.8929H10.7612V40.0714H12.5546V41.8929Z" fill="white" />
                            <path d="M26.0042 18.2144H17.9338C17.696 18.2144 17.4679 18.3103 17.2997 18.4811C17.1316 18.6519 17.0371 18.8835 17.0371 19.1251C17.0371 19.3666 17.1316 19.5983 17.2997 19.769C17.4679 19.9398 17.696 20.0358 17.9338 20.0358H26.0042C26.242 20.0358 26.4701 19.9398 26.6382 19.769C26.8064 19.5983 26.9009 19.3666 26.9009 19.1251C26.9009 18.8835 26.8064 18.6519 26.6382 18.4811C26.4701 18.3103 26.242 18.2144 26.0042 18.2144Z" fill="white" />
                            <path d="M26.0042 25.4995H17.9338C17.696 25.4995 17.4679 25.5955 17.2997 25.7663C17.1316 25.937 17.0371 26.1687 17.0371 26.4102C17.0371 26.6518 17.1316 26.8834 17.2997 27.0542C17.4679 27.225 17.696 27.3209 17.9338 27.3209H26.0042C26.242 27.3209 26.4701 27.225 26.6382 27.0542C26.8064 26.8834 26.9009 26.6518 26.9009 26.4102C26.9009 26.1687 26.8064 25.937 26.6382 25.7663C26.4701 25.5955 26.242 25.4995 26.0042 25.4995Z" fill="white" />
                            <path d="M24.2108 32.7856H17.9338C17.696 32.7856 17.4679 32.8816 17.2997 33.0524C17.1316 33.2232 17.0371 33.4548 17.0371 33.6964C17.0371 33.9379 17.1316 34.1695 17.2997 34.3403C17.4679 34.5111 17.696 34.6071 17.9338 34.6071H24.2108C24.4486 34.6071 24.6767 34.5111 24.8448 34.3403C25.013 34.1695 25.1075 33.9379 25.1075 33.6964C25.1075 33.4548 25.013 33.2232 24.8448 33.0524C24.6767 32.8816 24.4486 32.7856 24.2108 32.7856Z" fill="white" />
                            <path d="M24.2108 40.0713H17.9338C17.696 40.0713 17.4679 40.1672 17.2997 40.338C17.1316 40.5088 17.0371 40.7405 17.0371 40.982C17.0371 41.2235 17.1316 41.4552 17.2997 41.626C17.4679 41.7968 17.696 41.8927 17.9338 41.8927H24.2108C24.4486 41.8927 24.6767 41.7968 24.8448 41.626C25.013 41.4552 25.1075 41.2235 25.1075 40.982C25.1075 40.7405 25.013 40.5088 24.8448 40.338C24.6767 40.1672 24.4486 40.0713 24.2108 40.0713Z" fill="white" />
                            <path d="M47.1957 34.1426C46.9464 33.2211 46.4677 32.3804 45.8056 31.7014C45.1435 31.0225 44.3204 30.5281 43.4156 30.2661C44.4648 29.6738 45.2875 28.7404 45.7516 27.616L46.4712 25.8771C46.5633 25.6545 46.5646 25.4038 46.4747 25.1801C46.3848 24.9565 46.2112 24.7784 45.9919 24.6848L44.2799 23.9539C42.9645 23.3925 41.4834 23.3848 40.1624 23.9324C38.8414 24.48 37.7886 25.5381 37.2357 26.874L37.1822 27.0034C36.8901 26.5589 36.5555 26.1446 36.1835 25.7666C36.094 25.6759 35.9865 25.6056 35.8682 25.5602V9.10697C35.8672 8.14115 35.4889 7.2152 34.8165 6.53227C34.1441 5.84933 33.2324 5.46518 32.2814 5.4641H22.1935C22.0152 5.46392 21.8442 5.3919 21.7181 5.26384C21.592 5.13579 21.5211 4.96216 21.5209 4.78106V3.70414C21.5191 3.20835 21.4206 2.71785 21.2311 2.26094C21.0416 1.80404 20.7649 1.38979 20.4169 1.04211C20.0814 0.704553 19.6828 0.438516 19.2446 0.259637C18.8064 0.0807582 18.3374 -0.0073538 17.8652 0.000480073C16.9275 0.0233682 16.0355 0.416595 15.3786 1.09665C14.7218 1.77671 14.3518 2.69004 14.3473 3.64266V4.78106C14.3471 4.96216 14.2762 5.13579 14.1501 5.26384C14.024 5.3919 13.8531 5.46392 13.6748 5.4641H3.58682C2.63587 5.46518 1.72416 5.84933 1.05174 6.53227C0.379307 7.2152 0.00106803 8.14115 0 9.10697V47.3571C0.00106803 48.3229 0.379307 49.2488 1.05174 49.9318C1.72416 50.6147 2.63587 50.9989 3.58682 50.9999H32.2814C32.5598 50.9995 32.8372 50.9663 33.1081 50.9009C33.8475 51.0593 34.6142 51.0274 35.3384 50.8081C36.0626 50.5888 36.7213 50.1891 37.2545 49.6453L37.3423 49.556L37.4301 49.6453C37.8521 50.0761 38.3541 50.4177 38.907 50.6502C39.4599 50.8828 40.0527 51.0016 40.6512 50.9999C41.4373 50.9977 42.2097 50.7898 42.8938 50.3964C43.578 50.003 44.1509 49.4374 44.5573 48.7539L45.4064 47.3167C46.5599 45.3551 47.3128 43.1778 47.6202 40.9144C47.9276 38.6511 47.7832 36.3481 47.1957 34.1426ZM38.8886 27.5798C39.0711 27.1388 39.3374 26.7386 39.6722 26.4021C40.007 26.0656 40.4037 25.7994 40.8399 25.6186C41.276 25.4379 41.7429 25.3461 42.2139 25.3486C42.6849 25.3511 43.1508 25.4478 43.5851 25.6332L44.4706 26.0111L44.0984 26.9105C43.9159 27.3515 43.6496 27.7517 43.3148 28.0882C42.98 28.4247 42.5833 28.6909 42.1471 28.8717C41.711 29.0524 41.2441 29.1442 40.7731 29.1417C40.3021 29.1392 39.8362 29.0425 39.4019 28.8571L38.5164 28.4792L38.8886 27.5798ZM38.707 30.536C38.8953 30.6161 39.0879 30.6852 39.2839 30.743C39.0168 30.8933 38.7627 31.0661 38.5241 31.2596C38.5156 30.9819 38.4932 30.7048 38.4568 30.4294L38.707 30.536ZM36.7263 31.7826L36.6241 31.6787C36.3914 31.4429 36.1384 31.2287 35.8682 31.0385V28.3016C36.4811 29.3526 36.7793 30.5622 36.7263 31.7826ZM34.0748 9.10697V30.2147C33.6447 30.1074 33.2033 30.0533 32.7604 30.0535C32.5993 30.0535 32.4397 30.0611 32.2814 30.0753V10.0177C32.2814 9.77615 32.1869 9.5445 32.0188 9.37371C31.8506 9.20292 31.6225 9.10697 31.3847 9.10697H26.9012C26.9018 8.46723 26.7355 7.83876 26.4192 7.28553H32.2814C32.7569 7.2861 33.2127 7.47819 33.5489 7.81965C33.8851 8.16111 34.0743 8.62407 34.0748 9.10697ZM28.3661 45.5356H5.38024V10.9284H9.4496C9.76434 11.4818 10.2168 11.9414 10.7617 12.2611C11.3066 12.5808 11.9246 12.7493 12.5539 12.7498H23.3144C23.9437 12.7494 24.5619 12.5809 25.1068 12.2612C25.6518 11.9415 26.1044 11.4819 26.4192 10.9284H30.488V30.5597C29.7606 30.898 29.1152 31.3942 28.597 32.0132C28.0789 32.6322 27.7006 33.3591 27.489 34.1427C26.481 37.9296 26.7908 41.9538 28.3661 45.5356ZM16.1407 4.78106V3.64266C16.1428 3.16634 16.3276 2.7096 16.6559 2.36949C16.9843 2.02938 17.4303 1.83269 17.8991 1.82123C18.1331 1.81738 18.3655 1.8615 18.5823 1.95095C18.7991 2.0404 18.9959 2.17334 19.1609 2.34182C19.3393 2.51963 19.4812 2.73158 19.5784 2.9654C19.6757 3.19923 19.7264 3.45031 19.7275 3.70414V4.78106C19.7283 5.44506 19.9883 6.08164 20.4506 6.55116C20.9129 7.02067 21.5397 7.28478 22.1935 7.28553H23.3144C23.79 7.28553 24.2462 7.47743 24.5825 7.81902C24.9188 8.1606 25.1078 8.62389 25.1078 9.10697C25.1078 9.59004 24.9188 10.0533 24.5825 10.3949C24.2462 10.7365 23.79 10.9284 23.3144 10.9284H12.5539C12.0782 10.9284 11.6221 10.7365 11.2857 10.3949C10.9494 10.0533 10.7605 9.59004 10.7605 9.10697C10.7605 8.62389 10.9494 8.1606 11.2857 7.81902C11.6221 7.47743 12.0782 7.28553 12.5539 7.28553H13.6748C14.3285 7.28478 14.9553 7.02067 15.4176 6.55116C15.8799 6.08164 16.14 5.44506 16.1407 4.78106ZM1.79341 47.3571V9.10697C1.79398 8.62407 1.9831 8.16111 2.31931 7.81965C2.65552 7.47819 3.11135 7.2861 3.58682 7.28553H9.4496C9.1331 7.8387 8.9666 8.46718 8.96706 9.10697H4.48353C4.24571 9.10697 4.01763 9.20292 3.84946 9.37371C3.6813 9.5445 3.58682 9.77615 3.58682 10.0177V46.4464C3.58682 46.6879 3.6813 46.9195 3.84946 47.0903C4.01763 47.2611 4.24571 47.3571 4.48353 47.3571H29.3022L30.1274 48.7539C30.215 48.9008 30.3107 49.0425 30.414 49.1785H3.58682C3.11135 49.1779 2.65552 48.9859 2.31931 48.6444C1.9831 48.3029 1.79398 47.84 1.79341 47.3571ZM43.8684 46.3794L43.0195 47.8167C42.7731 48.2311 42.4257 48.5741 42.0109 48.8126C41.5961 49.0511 41.1278 49.1772 40.6512 49.1785C40.2883 49.1796 39.9289 49.1075 39.5937 48.9665C39.2584 48.8255 38.9541 48.6183 38.6982 48.357L37.9765 47.6239C37.8932 47.5393 37.7944 47.4722 37.6856 47.4264C37.5768 47.3807 37.4601 47.3571 37.3424 47.3571C37.2246 47.3571 37.108 47.3807 36.9992 47.4264C36.8904 47.4722 36.7915 47.5393 36.7082 47.6239L35.9864 48.357C35.7305 48.6183 35.4262 48.8255 35.091 48.9665C34.7558 49.1075 34.3964 49.1796 34.0336 49.1785C33.5568 49.1772 33.0885 49.0513 32.6736 48.8127C32.2587 48.5742 31.9113 48.2311 31.6649 47.8167L30.8159 46.3794C29.7864 44.6288 29.1145 42.6856 28.8402 40.6656C28.5658 38.6456 28.6947 36.5903 29.2192 34.622C29.3883 33.992 29.7175 33.4182 30.1736 32.958C30.6297 32.4978 31.1969 32.1674 31.8183 31.9998C32.4397 31.8322 33.0935 31.8333 33.7144 32.003C34.3352 32.1728 34.9013 32.5051 35.3559 32.9668L36.7082 34.3403C36.7915 34.4249 36.8904 34.492 36.9992 34.5378C37.108 34.5836 37.2246 34.6071 37.3424 34.6071C37.4601 34.6071 37.5768 34.5836 37.6856 34.5378C37.7944 34.492 37.8932 34.4249 37.9765 34.3403L39.3288 32.9668C39.7835 32.5051 40.3495 32.1727 40.9703 32.003C41.5912 31.8333 42.245 31.8322 42.8664 31.9998C43.4878 32.1674 44.0549 32.4978 44.5111 32.958C44.9672 33.4182 45.2963 33.992 45.4655 34.622C45.9898 36.5903 46.1187 38.6457 45.8443 40.6656C45.5699 42.6856 44.8979 44.6288 43.8684 46.3794Z" fill="white" />
                            <path d="M43.2333 41.9256C43.1197 41.8939 43.0011 41.8853 42.8842 41.9002C42.7674 41.9151 42.6545 41.9532 42.5522 42.0124C42.4498 42.0716 42.36 42.1507 42.2877 42.2452C42.2155 42.3397 42.1623 42.4477 42.1312 42.5631C42.0534 42.8513 41.9664 43.1419 41.8733 43.427C41.8351 43.5407 41.8194 43.661 41.8271 43.7809C41.8348 43.9008 41.8659 44.018 41.9184 44.1257C41.9709 44.2334 42.0439 44.3294 42.1332 44.4083C42.2224 44.4872 42.3262 44.5474 42.4384 44.5854C42.5507 44.6234 42.6692 44.6385 42.7872 44.6297C42.9053 44.6209 43.0204 44.5886 43.126 44.5344C43.2317 44.4802 43.3257 44.4054 43.4027 44.3141C43.4797 44.2229 43.5382 44.1171 43.5747 44.0028C43.6784 43.687 43.7747 43.3653 43.8611 43.0453C43.8923 42.9299 43.9009 42.8094 43.8862 42.6906C43.8716 42.5719 43.834 42.4573 43.7757 42.3533C43.7174 42.2493 43.6395 42.158 43.5464 42.0846C43.4534 42.0112 43.347 41.9572 43.2333 41.9256Z" fill="white" />
                            <path d="M43.6201 36.4287C43.3823 36.4287 43.1542 36.5247 42.986 36.6955C42.8178 36.8662 42.7234 37.0979 42.7234 37.3394V38.1022C42.7233 38.7263 42.6891 39.35 42.621 39.9703C42.6065 40.0899 42.6154 40.2112 42.6474 40.3272C42.6793 40.4433 42.7336 40.5518 42.8071 40.6463C42.8806 40.7409 42.9719 40.8198 43.0756 40.8783C43.1794 40.9368 43.2935 40.9738 43.4114 40.9871C43.5293 41.0005 43.6487 40.99 43.7626 40.9562C43.8765 40.9224 43.9826 40.8659 44.0749 40.7902C44.1671 40.7144 44.2436 40.6208 44.3 40.5147C44.3564 40.4087 44.3915 40.2923 44.4032 40.1724C44.4787 39.485 44.5166 38.7938 44.5167 38.1022V37.3394C44.5167 37.0979 44.4222 36.8663 44.2541 36.6955C44.0859 36.5247 43.8579 36.4287 43.6201 36.4287Z" fill="white" />
                            <path d="M12.8155 14.838L9.86277 17.837L9.60015 17.5702C9.51688 17.4856 9.41802 17.4185 9.30923 17.3728C9.20043 17.327 9.08383 17.3034 8.96606 17.3034C8.8483 17.3034 8.7317 17.327 8.6229 17.3728C8.51411 17.4185 8.41525 17.4856 8.33198 17.5702C8.24871 17.6548 8.18266 17.7552 8.1376 17.8657C8.09253 17.9762 8.06934 18.0946 8.06934 18.2142C8.06934 18.3338 8.09253 18.4522 8.1376 18.5627C8.18266 18.6732 8.24871 18.7736 8.33198 18.8582L9.22869 19.7689C9.31196 19.8535 9.41081 19.9205 9.51961 19.9663C9.6284 20.0121 9.74501 20.0356 9.86277 20.0356C9.98053 20.0356 10.0971 20.0121 10.2059 19.9663C10.3147 19.9205 10.4136 19.8535 10.4969 19.7689L14.0837 16.126C14.2518 15.9552 14.3463 15.7236 14.3463 15.482C14.3463 15.2405 14.2518 15.0088 14.0837 14.838C13.9155 14.6672 13.6874 14.5713 13.4496 14.5713C13.2118 14.5713 12.9837 14.6672 12.8155 14.838Z" fill="white" />
                        </svg>
                    </div>
                    <p>We’ll calculate calories</p>
                    <p>It will be easy for you to control your diet</p>
                </div>
                <div className={styles.icon}>
                    <div className={styles.icon_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
                            <path d="M37.9043 0C35.5118 0 33.173 0.709456 31.1837 2.03865C29.1944 3.36785 27.644 5.25708 26.7284 7.46746C25.8129 9.67783 25.5733 12.1101 26.0401 14.4566C26.5068 16.8031 27.6589 18.9585 29.3506 20.6503C31.0424 22.342 33.1978 23.4941 35.5443 23.9608C37.8908 24.4276 40.3231 24.188 42.5334 23.2725C44.7438 22.3569 46.6331 20.8065 47.9623 18.8172C49.2915 16.8279 50.0009 14.4891 50.0009 12.0966C49.9973 8.88953 48.7216 5.81481 46.4539 3.54703C44.1861 1.27926 41.1114 0.00362857 37.9043 0ZM37.9043 22.5804C35.8308 22.5804 33.8038 21.9655 32.0798 20.8136C30.3558 19.6616 29.012 18.0243 28.2185 16.1086C27.425 14.1929 27.2174 12.085 27.622 10.0514C28.0265 8.01771 29.025 6.14969 30.4911 4.68351C31.9573 3.21733 33.8253 2.21885 35.859 1.81433C37.8926 1.40981 40.0006 1.61742 41.9162 2.41091C43.8319 3.2044 45.4692 4.54813 46.6212 6.27218C47.7732 7.99622 48.388 10.0232 48.388 12.0966C48.3848 14.8761 47.2793 17.5408 45.3139 19.5062C43.3485 21.4716 40.6837 22.5772 37.9043 22.5804Z" fill="white" />
                            <path d="M41.1704 5.6451C39.9581 5.64153 38.79 6.10039 37.9043 6.92815C37.22 6.29239 36.3651 5.87015 35.4443 5.71323C34.5236 5.5563 33.577 5.67152 32.7208 6.04475C31.8646 6.41797 31.1359 7.03298 30.6242 7.81433C30.1124 8.59568 29.8398 9.50941 29.8398 10.4434C29.8402 11.3308 30.0283 12.208 30.3917 13.0174C30.7552 13.8269 31.2858 14.5503 31.9487 15.1402L37.368 19.9579C37.5157 20.0894 37.7065 20.162 37.9043 20.162C38.102 20.162 38.2929 20.0894 38.4406 19.9579L43.8598 15.1402C44.5227 14.5503 45.0533 13.8269 45.4168 13.0174C45.7803 12.208 45.9683 11.3308 45.9687 10.4434C45.9672 9.1713 45.4612 7.95169 44.5616 7.05215C43.6621 6.15261 42.4425 5.6466 41.1704 5.6451ZM42.7881 13.9345L37.9043 18.2756L33.0205 13.9345C32.5275 13.4962 32.133 12.9586 31.8628 12.3568C31.5926 11.7551 31.4528 11.103 31.4527 10.4434C31.4528 9.81343 31.6396 9.19758 31.9896 8.67376C32.3396 8.14993 32.8371 7.74167 33.4192 7.50058C34.0012 7.25949 34.6417 7.1964 35.2596 7.31931C35.8775 7.44221 36.4451 7.74557 36.8906 8.19104L37.3341 8.63459C37.4853 8.78577 37.6904 8.8707 37.9043 8.8707C38.1181 8.8707 38.3232 8.78577 38.4744 8.63459L38.918 8.19104C39.3635 7.74557 39.931 7.44221 40.5489 7.31931C41.1668 7.1964 41.8073 7.25949 42.3894 7.50058C42.9714 7.74167 43.4689 8.14993 43.8189 8.67376C44.169 9.19758 44.3558 9.81343 44.3558 10.4434C44.3557 11.103 44.216 11.7551 43.9458 12.3568C43.6755 12.9586 43.281 13.4962 42.7881 13.9345Z" fill="white" />
                            <path d="M0.806443 46.7739H8.87087C9.08475 46.7739 9.28987 46.689 9.44111 46.5377C9.59235 46.3865 9.67731 46.1814 9.67731 45.9675H26.6126C27.6235 45.9663 28.5971 45.5859 29.3412 44.9016C30.0852 44.2173 30.5455 43.2788 30.6311 42.2715C31.6824 41.1138 32.2626 39.6047 32.2577 38.0409V37.4305L32.5448 37.1434C32.9664 36.724 33.3007 36.2252 33.5283 35.6758C33.7558 35.1264 33.8722 34.5373 33.8706 33.9426C33.8695 33.2401 33.7061 32.5474 33.3932 31.9184L33.1512 31.4402C33.6235 30.3671 33.8684 29.2078 33.8706 28.0354V27.9177C33.8706 27.1438 33.5632 26.4017 33.016 25.8545C32.4688 25.3074 31.7267 25 30.9529 25H23.0788C22.9933 25.0002 22.9091 24.9784 22.8345 24.9367C22.7598 24.8951 22.6971 24.835 22.6523 24.7621C22.6075 24.6893 22.5822 24.6061 22.5788 24.5207C22.5754 24.4352 22.594 24.3504 22.6328 24.2742L23.3344 22.8726C24.4261 20.682 24.9961 18.2685 24.9997 15.821C24.9997 15.0472 24.6923 14.3051 24.1451 13.7579C23.598 13.2107 22.8558 12.9033 22.082 12.9033H20.9675C20.3259 12.9033 19.7105 13.1582 19.2568 13.6119C18.8031 14.0656 18.5482 14.681 18.5482 15.3226C18.5507 16.2399 18.3713 17.1486 18.0202 17.9961C17.6692 18.8435 17.1535 19.6129 16.503 20.2597L14.2289 22.5339C12.8954 23.8707 11.8896 25.4981 11.2902 27.2886C11.1638 27.6684 10.9496 28.0131 10.665 28.2946C10.3804 28.5761 10.0335 28.7865 9.65231 28.9088C9.62531 28.7203 9.53161 28.5477 9.38823 28.4224C9.24486 28.2971 9.0613 28.2273 8.87087 28.2257H0.806443C0.592561 28.2257 0.387439 28.3107 0.236202 28.4619C0.0849642 28.6132 0 28.8183 0 29.0322V45.9675C0 46.1814 0.0849642 46.3865 0.236202 46.5377C0.387439 46.689 0.592561 46.7739 0.806443 46.7739ZM12.8224 27.7983C13.3423 26.2452 14.2148 24.8336 15.3716 23.6742L17.6458 21.4C18.4462 20.6037 19.0806 19.6566 19.5124 18.6134C19.9441 17.5702 20.1646 16.4517 20.1611 15.3226C20.1611 15.1088 20.246 14.9036 20.3973 14.7524C20.5485 14.6012 20.7536 14.5162 20.9675 14.5162H22.082C22.428 14.5164 22.7598 14.654 23.0044 14.8986C23.2491 15.1433 23.3866 15.475 23.3868 15.821C23.3842 18.0194 22.8725 20.1873 21.8917 22.1548L21.1901 23.5572C21.0293 23.8792 20.9535 24.2368 20.9698 24.5963C20.9861 24.9558 21.0939 25.3052 21.2831 25.6112C21.4723 25.9173 21.7366 26.17 22.0508 26.3453C22.3651 26.5206 22.7189 26.6127 23.0788 26.6128H30.9529C31.1555 26.6131 31.3554 26.6603 31.5367 26.7507C31.7539 26.8586 31.9365 27.025 32.0639 27.2312C32.1913 27.4375 32.2585 27.6753 32.2577 27.9177V28.0354C32.2552 29.0964 32.0068 30.1423 31.5319 31.091C31.476 31.203 31.4469 31.3264 31.4469 31.4515C31.4469 31.5766 31.476 31.7 31.5319 31.812L31.9464 32.6394C32.1492 33.044 32.2557 33.49 32.2577 33.9426C32.2587 34.3254 32.1838 34.7046 32.0373 35.0582C31.8909 35.4119 31.6758 35.733 31.4045 36.0031L30.8811 36.5264C30.7299 36.6776 30.6449 36.8827 30.6448 37.0966V38.0409C30.6467 38.6585 30.5259 39.2704 30.2896 39.841C30.0533 40.4116 29.7062 40.9296 29.2682 41.3651C29.117 41.5163 29.032 41.7214 29.0319 41.9353C29.0319 42.5769 28.777 43.1923 28.3233 43.646C27.8696 44.0997 27.2543 44.3546 26.6126 44.3546H9.67731V30.558C10.399 30.4177 11.0704 30.0883 11.623 29.6034C12.1756 29.1186 12.5896 28.4956 12.8224 27.7983ZM1.61289 29.8386H8.06443V45.161H1.61289V29.8386Z" fill="white" />
                        </svg>
                    </div>
                    <p>We'll deliver it free of charge</p>
                    <p>of free time a week for you</p>
                </div>
                <div className={styles.icon}>
                    <div className={styles.icon_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                            <path d="M47.768 38.5824L47.2023 38.4521C52.6851 33.9401 53.8535 23.9215 48.6892 18.7013C46.702 16.6936 45.515 13.5163 45.515 10.201C45.515 5.39575 42.3681 1.48552 38.4992 1.48552C34.6314 1.48552 31.4834 5.39575 31.4834 10.201C31.4834 11.293 31.3548 12.369 31.1104 13.3931C27.5061 9.21431 21.7825 8.7353 17.9552 11.4065V1.60468C17.9552 1.17986 17.612 0.835148 17.1895 0.835148C16.7666 0.835148 16.4234 1.17986 16.4234 1.60468V4.62622C14.1355 0.480071 9.97219 -0.628995 5.3098 0.313891C4.83888 0.409534 4.57029 0.913257 4.75199 1.36039C4.79484 1.4652 5.82674 3.96349 7.82031 6.15093C10.1797 8.74008 13.108 10.0257 16.4234 9.10353V11.4065C11.9241 8.26625 4.39057 9.39364 1.29567 16.5542C1.12745 16.9439 1.30598 17.3962 1.69399 17.5656C2.08239 17.7349 2.53268 17.5564 2.70129 17.1663C5.53355 10.6147 12.3062 10.0855 15.8982 12.9273C16.646 13.5593 17.7366 13.5561 18.4805 12.9273C22.5696 9.69213 29.6437 11.1001 32.0678 18.1789C33.371 21.9915 33.1104 25.9786 30.8482 30.1028C29.9484 31.7196 29.2089 33.0638 28.5979 34.1832C23.8538 33.1567 23.1766 32.7813 21.5619 32.8163C21.139 32.8247 20.803 33.1754 20.8121 33.6002C20.8204 34.0262 21.1687 34.3646 21.5936 34.3542C21.8714 34.3482 22.1868 34.3626 22.5196 34.4036L22.0602 38.5482C22.0134 38.9702 22.3161 39.3508 22.7366 39.3978C23.1587 39.4448 23.536 39.1392 23.5829 38.7183L24.0272 34.7117C27.0872 35.4134 29.0788 35.8709 31.4516 36.4161L31.2326 38.3923C31.1858 38.8148 31.4885 39.1954 31.9091 39.2424C32.3312 39.2894 32.7085 38.9837 32.7553 38.5625L32.9548 36.7608C33.4281 36.8696 44.301 39.3643 44.437 39.3958L43.8455 44.7307C43.7987 45.1531 44.1018 45.5337 44.5219 45.5807C44.9445 45.6278 45.3214 45.3221 45.3682 44.9013L45.9407 39.7409L47.4272 40.0824C49.27 40.5049 50.4872 42.2245 50.2769 44.1122C50.0687 45.9896 48.4924 47.4087 46.6123 47.4127L38.7713 47.4279L39.0498 44.9188C39.0966 44.4964 38.7939 44.1158 38.3734 44.0688C37.9525 44.0222 37.574 44.3258 37.5272 44.7482L37.2296 47.431L29.7147 47.4454L29.9762 45.0866C30.023 44.6646 29.7203 44.284 29.2998 44.237C28.8804 44.1895 28.5003 44.494 28.4535 44.9164C28.3885 45.5042 28.1794 47.386 28.173 47.4486L24.5751 47.4554L25.0305 43.3495C25.0773 42.9274 24.7746 42.5469 24.3541 42.4998C23.9332 42.4524 23.5547 42.7569 23.5079 43.1793L23.033 47.4585C23.0254 47.4585 23.0199 47.4585 23.0155 47.4585H23.0139H23.0104H23.0056C22.956 47.4585 22.7156 47.4589 21.7369 47.4609C18.73 47.4609 16.1525 45.4006 15.4197 42.5536C14.6679 39.6457 15.9843 36.3986 18.9474 34.9842C19.3295 34.8017 19.4926 34.343 19.3108 33.9593C19.1291 33.5755 18.6725 33.4113 18.2905 33.5942C16.7972 34.306 15.5923 35.4286 14.7905 36.8011C13.2401 36.0244 11.4667 34.8025 10.5209 33.0032C9.29853 30.6707 5.77318 31.5467 5.76128 34.18L3.36105 29.7968C1.71581 26.794 1.11317 23.4237 1.82927 19.9455C1.91496 19.5291 1.64836 19.1218 1.23378 19.0357C0.819192 18.9496 0.414526 19.2174 0.328832 19.6339C-0.43924 23.3664 0.143955 27.116 2.01811 30.5388L5.29075 36.5137L2.89251 36.2451C1.50474 36.0901 0.25623 37.092 0.101901 38.4868C-0.0520304 39.8772 0.947733 41.1349 2.33272 41.2899L6.30361 41.7339C5.31892 42.6194 4.52625 43.422 4.62583 44.6877C4.79801 46.9249 7.60013 47.8571 9.06446 46.1395C10.2697 44.7227 12.153 43.8476 14.0621 43.3754C15.0999 46.634 18.1476 49 21.7369 49C22.904 48.9976 45.2047 48.9546 46.6143 48.9518C49.5101 48.9462 51.8325 46.589 51.8325 43.6966C51.8321 41.2346 50.1611 39.1312 47.768 38.5824ZM6.58846 1.65609C11.6821 0.957491 14.894 3.396 15.9668 7.63341C11.817 8.75562 8.55347 5.46031 6.58846 1.65609ZM45.2043 37.9934L30.1567 34.5399C30.5915 33.7397 31.0739 32.8566 31.6111 31.885C33.0298 34.3398 35.6748 35.9937 38.6971 35.9937C42.5855 35.9937 45.9613 33.2176 46.723 29.3927C46.8059 28.9762 46.5362 28.571 46.1216 28.4881C45.7058 28.4048 45.3035 28.6746 45.2206 29.091C44.6017 32.1986 41.8583 34.455 38.6971 34.455C35.8986 34.455 33.4984 32.7099 32.5169 30.2463C33.7896 27.813 34.3993 25.2418 34.3787 22.6913C38.2222 19.39 44.1482 21.4722 45.1992 26.3496C45.2892 26.7653 45.6955 27.0291 46.1105 26.9386C46.5239 26.8486 46.7865 26.4389 46.6964 26.0237C46.3076 24.2168 45.3023 22.5741 43.8693 21.3985C41.1466 19.1664 37.2546 18.9146 34.2573 20.8673C34.0022 18.8448 33.3329 16.7371 32.2637 14.9812C32.7549 13.4936 33.0155 11.8744 33.0155 10.201C33.0155 6.65067 35.217 3.02459 38.4992 3.02459C41.7464 3.02459 43.9828 6.60205 43.9828 10.201C43.9828 13.9686 45.3023 17.462 47.6026 19.7869C51.5921 23.8167 51.2061 31.2984 47.7406 35.7056C46.9876 36.6628 46.1307 37.4323 45.2043 37.9934ZM13.736 41.8602C11.5536 42.3934 9.34535 43.4415 7.90006 45.1392C7.54339 45.558 6.91418 45.607 6.49761 45.2492C6.07985 44.8893 6.03105 44.2597 6.38851 43.8412C7.05542 43.0582 7.85443 42.3767 8.70463 41.8283C9.30766 41.4366 9.08906 40.4973 8.37375 40.418C7.71042 40.3435 3.00399 39.8162 2.50213 39.76C1.95781 39.6995 1.56346 39.2041 1.62376 38.6574C1.68407 38.1166 2.1661 37.7145 2.72271 37.775C2.72588 37.7754 2.72906 37.7754 2.73183 37.7758L2.72747 37.7754C2.73104 37.7758 2.73699 37.7766 2.74572 37.7774H2.74413C2.75246 37.7782 2.75842 37.7786 2.76199 37.7794C2.75921 37.779 2.75524 37.7786 2.75088 37.7778C2.90759 37.7954 3.82285 37.8978 8.05716 38.372C8.30076 38.3565 9.04304 38.6733 9.36757 38.0046C9.5096 37.7113 9.45247 37.3614 9.22554 37.1287C8.48206 36.3671 7.8703 35.5342 7.40771 34.6539C7.15142 34.1665 7.33828 33.5611 7.8223 33.3037H7.82349C8.31305 33.0451 8.90974 33.2352 9.16642 33.7214C10.2951 35.8697 12.3653 37.2988 14.1466 38.1883C13.7399 39.3404 13.588 40.6204 13.736 41.8602Z" fill="white" />
                        </svg>
                    </div>
                    <p>Everything is ready, just warm it up</p>
                    <p>We’ll bring you ready-made dishes</p>
                </div>
                <div className={styles.icon}>
                    <div className={styles.icon_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="56" viewBox="0 0 42 56" fill="none">
                            <path d="M34.1944 13.2631C33.9792 13.2655 33.7704 13.1924 33.6065 13.0573C33.4425 12.9223 33.3345 12.7344 33.3022 12.5282C32.717 8.82507 33.3803 5.03779 35.1936 1.72922H9.02639C10.4728 4.39115 11.1916 7.36779 11.1141 10.3753C11.1141 10.6046 11.0201 10.8245 10.8527 10.9867C10.6854 11.1488 10.4585 11.2399 10.2219 11.2399C9.98528 11.2399 9.75835 11.1488 9.59104 10.9867C9.42372 10.8245 9.32973 10.6046 9.32973 10.3753C9.40276 7.17019 8.50649 4.0144 6.75137 1.29692C6.67329 1.16586 6.63207 1.01724 6.63184 0.865913C6.6316 0.714582 6.67235 0.565842 6.75002 0.434557C6.82769 0.303273 6.93955 0.194044 7.07443 0.117787C7.20931 0.0415302 7.36248 0.000917066 7.51863 6.81561e-06H36.6835C36.8407 -0.000598036 36.9953 0.0390654 37.1316 0.114981C37.2679 0.190896 37.3811 0.300368 37.4597 0.432311C37.538 0.563748 37.5792 0.712845 37.5792 0.864615C37.5792 1.01639 37.538 1.16548 37.4597 1.29692C35.3429 4.56266 34.4982 8.4533 35.0776 12.2688C35.0953 12.3812 35.09 12.4959 35.0619 12.6064C35.0338 12.7168 34.9835 12.8208 34.9139 12.9123C34.8443 13.0039 34.7567 13.0812 34.6562 13.1399C34.5557 13.1986 34.4442 13.2376 34.3282 13.2545L34.1944 13.2631Z" fill="white" />
                            <path d="M35.7344 55.2632H22.9093C22.6918 55.2656 22.4807 55.1903 22.315 55.051C22.1492 54.9116 22.04 54.7178 22.0074 54.5051C21.5398 50.8903 21.72 47.2222 22.5395 43.6691C21.5365 43.8697 20.5031 43.8697 19.5001 43.6691C20.3088 47.2236 20.4888 50.8898 20.0322 54.5051C19.9996 54.7178 19.8903 54.9116 19.7246 55.051C19.5589 55.1903 19.3478 55.2656 19.1303 55.2632H6.25102C6.09363 55.2623 5.93922 55.2206 5.80315 55.1424C5.66708 55.0642 5.55408 54.9521 5.47538 54.8173C-3.74212 38.9779 0.632135 29.2478 4.48328 20.6682C4.84405 19.8566 5.20481 19.0539 5.54754 18.2602C5.59055 18.1479 5.65603 18.0454 5.74005 17.9588C5.82408 17.8722 5.92492 17.8032 6.03654 17.7561C6.14815 17.7089 6.26825 17.6845 6.38963 17.6843C6.51101 17.6842 6.63118 17.7082 6.74294 17.7551C6.85469 17.8019 6.95573 17.8706 7.04001 17.957C7.12428 18.0433 7.19006 18.1456 7.2334 18.2578C7.27673 18.3699 7.29673 18.4895 7.29221 18.6094C7.28768 18.7294 7.25872 18.8472 7.20705 18.9558C6.86432 19.7585 6.50356 20.5701 6.13378 21.3906C2.30969 29.8989 -1.64068 38.6926 6.78315 53.4973H18.3546C18.658 49.82 18.3379 46.1184 17.4076 42.5454C17.3686 42.3828 17.3765 42.2126 17.4305 42.0542C17.4845 41.8958 17.5825 41.7556 17.7132 41.6496C17.8439 41.5436 18.0021 41.4761 18.1697 41.4547C18.3373 41.4333 18.5077 41.4589 18.6613 41.5287C19.4031 41.8634 20.2089 42.0367 21.0243 42.0367C21.8397 42.0367 22.6455 41.8634 23.3873 41.5287C23.5423 41.4579 23.7144 41.432 23.8836 41.4541C24.0528 41.4762 24.2122 41.5454 24.3433 41.6535C24.4719 41.7601 24.5679 41.9 24.6205 42.0576C24.673 42.2151 24.6801 42.384 24.6409 42.5454C23.6863 46.1082 23.3749 49.8097 23.721 53.4795H35.2113C43.6712 38.6836 39.5675 29.5421 36.2665 22.1843C36.1685 21.9679 36.1614 21.7218 36.2468 21.5002C36.3322 21.2786 36.5031 21.0996 36.722 21.0026C36.9409 20.9056 37.1897 20.8986 37.4139 20.9831C37.638 21.0675 37.819 21.2366 37.917 21.453C41.227 28.8465 45.7727 38.9779 36.5191 54.8173C36.4396 54.9534 36.3252 55.0663 36.1874 55.1446C36.0496 55.2229 35.8933 55.2638 35.7344 55.2632Z" fill="white" />
                            <path d="M22.1139 44.2106C21.0582 44.2132 20.0144 43.9905 19.0546 43.558C18.9033 43.49 18.7746 43.3814 18.6832 43.2448C15.1906 38.0242 9.84124 34.422 2.85609 32.5078C2.64139 32.4484 2.45741 32.3115 2.34099 32.1243C2.22457 31.9371 2.18433 31.7136 2.22831 31.4985C2.54562 29.9954 2.98621 28.5201 3.54576 27.0871C3.6274 26.8779 3.78786 26.7078 3.99374 26.6122C4.19962 26.5166 4.43505 26.5028 4.65101 26.5737C15.966 30.3237 28.2176 30.3237 39.5326 26.5737C39.7497 26.5002 39.9873 26.5127 40.1952 26.6085C40.4031 26.7043 40.565 26.8759 40.6467 27.0871C41.207 28.5213 41.6534 29.9962 41.9818 31.4985C42.0279 31.7161 41.9876 31.9428 41.8692 32.1321C41.7509 32.3214 41.5633 32.4589 41.3452 32.5165C34.2716 34.422 28.9664 38.0329 25.5269 43.2448C25.4317 43.3781 25.304 43.4858 25.1555 43.558C24.2008 43.9873 23.1636 44.2099 22.1139 44.2106ZM20.0095 42.0701C21.3559 42.6094 22.8631 42.6094 24.2094 42.0701C27.7462 36.8495 33.0514 33.1168 40.125 31.0634C39.9216 30.1933 39.6564 29.3754 39.3469 28.4531C28.1668 31.9728 16.1494 31.9728 4.96932 28.4531C4.65101 29.3232 4.39459 30.1933 4.18238 31.0634C11.0968 33.1168 16.4374 36.8147 20.0272 42.0701H20.0095Z" fill="white" />
                            <path d="M38.9063 24.3159H23.1078C11.197 24.3159 2.21094 20.779 2.21094 16.0485V5.30535C2.21094 5.07085 2.30403 4.84594 2.46973 4.68012C2.63544 4.5143 2.86018 4.42114 3.09452 4.42114C3.32887 4.42114 3.55361 4.5143 3.71931 4.68012C3.88502 4.84594 3.97811 5.07085 3.97811 5.30535C3.97811 8.38241 11.8332 11.8043 23.1078 11.8043H38.9063C39.1406 11.8043 39.3654 11.8975 39.5311 12.0633C39.6968 12.2291 39.7899 12.454 39.7899 12.6885V23.4317C39.7899 23.6662 39.6968 23.8911 39.5311 24.0569C39.3654 24.2227 39.1406 24.3159 38.9063 24.3159ZM3.97811 8.73609V16.0485C3.97811 19.1167 11.8332 22.5475 23.1078 22.5475H38.0227V13.555H23.1078C14.3426 13.555 7.15902 11.6363 3.97811 8.73609Z" fill="white" />
                            <path d="M32.0525 24.3159C31.7594 24.3159 31.4783 24.2175 31.271 24.0423C31.0637 23.8672 30.9473 23.6296 30.9473 23.3819V18.6184C30.9473 18.3706 31.0637 18.1331 31.271 17.9579C31.4783 17.7827 31.7594 17.6843 32.0525 17.6843C32.3457 17.6843 32.6268 17.7827 32.8341 17.9579C33.0413 18.1331 33.1578 18.3706 33.1578 18.6184V23.3819C33.1578 23.6296 33.0413 23.8672 32.8341 24.0423C32.6268 24.2175 32.3457 24.3159 32.0525 24.3159Z" fill="white" />
                            <path d="M27.6316 24.3159C27.3385 24.3159 27.0574 24.2247 26.8501 24.0623C26.6428 23.9 26.5264 23.6798 26.5264 23.4502V18.5501C26.5264 18.3205 26.6428 18.1003 26.8501 17.9379C27.0574 17.7755 27.3385 17.6843 27.6316 17.6843C27.9248 17.6843 28.2059 17.7755 28.4132 17.9379C28.6204 18.1003 28.7369 18.3205 28.7369 18.5501V23.4502C28.7369 23.6798 28.6204 23.9 28.4132 24.0623C28.2059 24.2247 27.9248 24.3159 27.6316 24.3159Z" fill="white" />
                            <path d="M20.9998 24.3157C20.7067 24.3157 20.4255 24.2019 20.2183 23.9991C20.011 23.7964 19.8945 23.5215 19.8945 23.2348V16.5546C19.8945 16.2679 20.011 15.9929 20.2183 15.7902C20.4255 15.5875 20.7067 15.4736 20.9998 15.4736C21.2929 15.4736 21.5741 15.5875 21.7813 15.7902C21.9886 15.9929 22.1051 16.2679 22.1051 16.5546V23.2348C22.1051 23.5215 21.9886 23.7964 21.7813 23.9991C21.5741 24.2019 21.2929 24.3157 20.9998 24.3157Z" fill="white" />
                            <path d="M16.5789 22.1052C16.2858 22.1052 16.0046 22.0195 15.7974 21.8669C15.5901 21.7143 15.4736 21.5073 15.4736 21.2915V16.2873C15.4736 16.0715 15.5901 15.8646 15.7974 15.712C16.0046 15.5594 16.2858 15.4736 16.5789 15.4736C16.872 15.4736 17.1532 15.5594 17.3604 15.712C17.5677 15.8646 17.6842 16.0715 17.6842 16.2873V21.2915C17.6842 21.5073 17.5677 21.7143 17.3604 21.8669C17.1532 22.0195 16.872 22.1052 16.5789 22.1052Z" fill="white" />
                            <path d="M9.94706 22.1052C9.65393 22.1052 9.3728 22.0091 9.16552 21.838C8.95824 21.667 8.8418 21.435 8.8418 21.193V16.3858C8.8418 16.1439 8.95824 15.9119 9.16552 15.7408C9.3728 15.5697 9.65393 15.4736 9.94706 15.4736C10.2402 15.4736 10.5213 15.5697 10.7286 15.7408C10.9359 15.9119 11.0523 16.1439 11.0523 16.3858V21.193C11.0523 21.435 10.9359 21.667 10.7286 21.838C10.5213 22.0091 10.2402 22.1052 9.94706 22.1052Z" fill="white" />
                        </svg>
                    </div>
                    <p>We'll deliver it free of charge</p>
                    <p>In a convenient 2-hour interval</p>
                </div>
            </div>
        </section>
    )
}
export default Advantages