import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="absolute top-0 w-screen px-10 lg:px-20 py-10 flex items-center justify-between text-sm">
        <div className="hover:text-primary transition-all duration-300 font-bold cursor-pointer">
            <Link href="/">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5991 6.99335C11.1707 6.99335 11.7214 7.08168 12.2514 7.25833C12.7813 7.43498 13.2489 7.67918 13.6542 7.99092C14.0595 8.30266 14.3816 8.67674 14.6206 9.11318C14.87 9.54961 14.9947 10.0328 14.9947 10.5628C14.9947 10.781 14.9427 10.994 14.8388 11.2018C14.7453 11.3993 14.6154 11.5759 14.4491 11.7318C14.2829 11.8773 14.0906 11.9968 13.8724 12.0903C13.6646 12.1734 13.4464 12.215 13.2178 12.215C13.197 12.215 13.1762 12.2202 13.1554 12.2306C13.145 12.2306 13.1294 12.2306 13.1086 12.2306C13.0879 12.241 13.0671 12.2462 13.0463 12.2462L13.1086 13.4931C13.1502 14.9791 13.358 16.065 13.7321 16.7508C14.1166 17.4366 14.6154 17.7795 15.2285 17.7795C15.4467 17.7795 15.6389 17.7588 15.8052 17.7172C15.9818 17.6756 16.1429 17.6289 16.2884 17.5769C16.4443 17.5146 16.5897 17.4626 16.7248 17.421C16.8599 17.3795 16.995 17.3587 17.1301 17.3587C17.3691 17.3587 17.5769 17.4626 17.7536 17.6704C17.9406 17.8783 18.0341 18.1276 18.0341 18.4186C18.0341 18.7096 17.9198 19.0005 17.6912 19.2915C17.473 19.5824 17.182 19.8474 16.8183 20.0864C16.4546 20.315 16.0442 20.5021 15.587 20.6475C15.1298 20.793 14.6673 20.8658 14.1997 20.8658C13.3892 20.8658 12.6774 20.5332 12.0643 19.8682C11.4512 19.1928 11.0148 18.2056 10.755 16.9067C10.6927 16.6988 10.6095 16.5949 10.5056 16.5949C10.3809 16.5949 10.2718 16.6573 10.1783 16.782C9.14955 18.0809 8.05327 19.0577 6.88944 19.7123C5.72562 20.3566 4.57737 20.6787 3.44472 20.6787C2.91476 20.6787 2.43676 20.6008 2.01072 20.4449C1.58468 20.289 1.22098 20.0708 0.919631 19.7903C0.628675 19.4993 0.400066 19.1512 0.233805 18.7459C0.0779349 18.3303 0 17.8679 0 17.3587C0 16.6417 0.15587 15.8883 0.467609 15.0986C0.78974 14.3088 1.22098 13.5295 1.76133 12.7605C2.30168 11.9916 2.92516 11.259 3.63177 10.5628C4.34877 9.86655 5.09694 9.25346 5.87629 8.7235C6.66603 8.19355 7.46616 7.7727 8.27668 7.46096C9.08721 7.14922 9.86136 6.99335 10.5991 6.99335ZM10.0848 12.3864C10.2718 12.0331 10.4433 11.7786 10.5991 11.6227C10.755 11.4564 10.9784 11.3473 11.2694 11.2954C11.498 11.2642 11.6123 11.1914 11.6123 11.0771C11.6123 10.994 11.5811 10.9057 11.5188 10.8122C11.3213 10.542 11.1135 10.3082 10.8953 10.1107C10.6771 9.90292 10.3861 9.79901 10.0224 9.79901C9.62755 9.79901 9.18592 9.91331 8.69753 10.1419C8.20914 10.3705 7.71036 10.6771 7.20118 11.0616C6.7024 11.4356 6.20881 11.8669 5.72042 12.3553C5.24242 12.8333 4.81638 13.3269 4.44229 13.836C4.0682 14.3452 3.76685 14.8492 3.53824 15.348C3.30963 15.8468 3.19533 16.2936 3.19533 16.6884C3.19533 17.0418 3.28885 17.3171 3.4759 17.5146C3.67333 17.712 3.93831 17.8107 4.27083 17.8107C5.12292 17.8107 6.05294 17.3587 7.0609 16.4546C8.06886 15.5506 9.07681 14.1945 10.0848 12.3864Z" fill="#FF2121"/>
                    <path d="M18.2143 17.0158C18.0169 14.5842 17.7883 12.1682 17.5285 9.76783C17.2791 7.36744 16.9102 4.97224 16.4218 2.58224C16.401 2.49911 16.3906 2.42637 16.3906 2.36402C16.3906 2.29128 16.3906 2.22374 16.3906 2.16139C16.3906 1.92239 16.4374 1.71456 16.5309 1.53791C16.6348 1.36126 16.7699 1.21578 16.9362 1.10147C17.1024 0.976778 17.2895 0.883256 17.4973 0.820908C17.7155 0.75856 17.9441 0.727386 18.1831 0.727386C18.817 0.727386 19.2534 1.02354 19.4924 1.61584C19.5964 1.91719 19.7003 2.34843 19.8042 2.90956C19.9185 3.47069 20.0328 4.12015 20.1471 4.85793C20.2718 5.59572 20.3913 6.40624 20.5056 7.2895C20.6199 8.16237 20.729 9.06122 20.8329 9.98605C20.8641 10.2458 20.9472 10.3757 21.0823 10.3757C21.1966 10.3757 21.3161 10.2978 21.4408 10.1419C22.9579 8.14679 24.7556 7.14922 26.8339 7.14922C27.6133 7.14922 28.3407 7.32068 29.0161 7.66359C29.6915 8.0065 30.2786 8.47411 30.7774 9.06642C31.2762 9.65872 31.6659 10.3601 31.9464 11.1707C32.2374 11.9812 32.3829 12.8541 32.3829 13.7893C32.3829 14.6621 32.2426 15.4727 31.962 16.2208C31.6919 16.969 31.3126 17.6133 30.8242 18.1536C30.3358 18.694 29.7539 19.12 29.0784 19.4318C28.4134 19.7331 27.686 19.8838 26.8963 19.8838C25.9195 19.8838 24.9635 19.6967 24.0283 19.3226C23.093 18.9382 22.2098 18.4238 21.3785 17.7795C21.2849 17.6964 21.1862 17.6548 21.0823 17.6548C20.9472 17.6548 20.8225 17.7276 20.7082 17.8731C20.542 18.0601 20.3653 18.1848 20.1783 18.2471C19.9912 18.2991 19.7626 18.3251 19.4924 18.3251C18.6715 18.3251 18.2455 17.8886 18.2143 17.0158ZM26.2884 10.0484C25.8727 10.0484 25.4571 10.1471 25.0414 10.3445C24.6361 10.5316 24.2517 10.8018 23.888 11.1551C23.5243 11.5084 23.1866 11.9344 22.8748 12.4332C22.5735 12.9216 22.3189 13.4671 22.1111 14.0698C22.0903 14.101 22.0747 14.1478 22.0643 14.2101C22.0539 14.2725 22.0487 14.3244 22.0487 14.366C22.0487 14.5426 22.1111 14.6777 22.2358 14.7713C22.6098 15.0934 22.9943 15.3947 23.3892 15.6753C23.7945 15.9559 24.1945 16.2001 24.5894 16.4079C24.9843 16.6157 25.3739 16.782 25.7584 16.9067C26.1429 17.021 26.5014 17.0781 26.8339 17.0781C27.5821 17.0781 28.1484 16.8599 28.5329 16.4235C28.9278 15.987 29.1252 15.3532 29.1252 14.5219C29.1252 13.8776 29.0525 13.2853 28.907 12.7449C28.7615 12.1942 28.5641 11.7214 28.3147 11.3265C28.0653 10.9213 27.7639 10.6095 27.4106 10.3913C27.0677 10.1627 26.6936 10.0484 26.2884 10.0484Z" fill="#FF2121"/>
                    <path d="M35.8363 4.71765C35.535 4.71765 35.2492 4.67609 34.979 4.59296C34.7193 4.49943 34.4906 4.37474 34.2932 4.21887C34.1062 4.05261 33.9555 3.86037 33.8412 3.64215C33.7269 3.42393 33.6697 3.18493 33.6697 2.92515C33.6697 2.48871 33.8412 2.13541 34.1841 1.86524C34.5374 1.59506 35.005 1.45997 35.5869 1.45997C35.8571 1.45997 36.1169 1.51193 36.3663 1.61584C36.6157 1.70937 36.8339 1.83926 37.0209 2.00552C37.2184 2.17178 37.3742 2.36921 37.4885 2.59782C37.6028 2.81604 37.66 3.04465 37.66 3.28365C37.66 3.73048 37.4937 4.08378 37.1612 4.34356C36.8391 4.59296 36.3975 4.71765 35.8363 4.71765ZM33.7009 9.47168C33.7009 9.10798 33.8568 8.81183 34.1685 8.58322C34.4906 8.34422 34.9115 8.22472 35.4311 8.22472C36.3663 8.22472 36.8651 8.54685 36.9274 9.19111C36.969 9.63794 37.0105 10.1419 37.0521 10.7031C37.1041 11.2642 37.1508 11.8617 37.1924 12.4956C37.2443 13.119 37.2859 13.7685 37.3171 14.4439C37.3587 15.109 37.395 15.7688 37.4262 16.4235C37.4574 17.0677 37.4833 17.6912 37.5041 18.2939C37.5249 18.8966 37.5353 19.4473 37.5353 19.9461C37.5353 20.4657 37.3483 20.8554 36.9742 21.1151C36.6105 21.3749 36.0753 21.5048 35.3687 21.5048C35.0466 21.5048 34.792 21.4269 34.605 21.271C34.4283 21.1255 34.34 20.9073 34.34 20.6164C34.34 19.1824 34.3036 17.8419 34.2309 16.5949C34.1685 15.3376 34.0958 14.2205 34.0126 13.2437C33.9399 12.2669 33.8672 11.4564 33.7944 10.8122C33.7321 10.1575 33.7009 9.71068 33.7009 9.47168Z" fill="#FF2121"/>
                    <path d="M49.8889 9.22229C49.9305 9.24307 49.9928 9.25346 50.076 9.25346C50.3046 9.25346 50.4189 9.10279 50.4189 8.80144V3.95389C50.4189 3.3408 50.554 2.90437 50.8241 2.64458C51.1047 2.3848 51.5671 2.25491 52.2114 2.25491C52.866 2.25491 53.3284 2.39 53.5986 2.66017C53.8688 2.93035 54.0039 3.39276 54.0039 4.04741C54.0039 4.2968 53.9883 4.6657 53.9571 5.15409C53.9259 5.63209 53.8896 6.17763 53.848 6.79072C53.8168 7.40381 53.7857 8.06366 53.7545 8.77027C53.7233 9.46648 53.7077 10.1575 53.7077 10.8433C53.7077 11.9032 53.7805 12.8177 53.9259 13.5866C54.0714 14.3556 54.2792 14.9947 54.5494 15.5038C54.8196 16.0026 55.1417 16.3767 55.5158 16.6261C55.8899 16.8651 56.3108 16.9846 56.7784 16.9846C57.0381 16.9846 57.2719 16.9534 57.4798 16.8911C57.698 16.8183 57.9526 16.782 58.2435 16.782C58.4514 16.782 58.6228 16.8911 58.7579 17.1093C58.9034 17.3171 58.9761 17.5717 58.9761 17.8731C58.9761 18.1432 58.893 18.3978 58.7267 18.6368C58.5709 18.8758 58.3526 19.0836 58.0721 19.2603C57.8019 19.437 57.485 19.5772 57.1213 19.6811C56.7576 19.7747 56.3783 19.8214 55.9834 19.8214C55.1313 19.8214 54.352 19.5616 53.6454 19.0421C52.9388 18.5121 52.4088 17.7068 52.0555 16.6261C52.0243 16.4598 51.9724 16.3767 51.8996 16.3767C51.8165 16.3767 51.749 16.4598 51.697 16.6261C51.4164 17.3847 51.0475 18.0705 50.5903 18.6836C50.1435 19.2863 49.6187 19.8058 49.016 20.2423C48.4237 20.6683 47.7691 20.9956 47.0521 21.2243C46.3455 21.4529 45.5973 21.5672 44.8076 21.5672C43.9763 21.5672 43.2125 21.4269 42.5163 21.1463C41.8305 20.8761 41.2381 20.4969 40.7394 20.0085C40.2406 19.5097 39.8509 18.9278 39.5703 18.2627C39.2898 17.5873 39.1495 16.8599 39.1495 16.0806C39.1495 15.083 39.3573 14.1426 39.773 13.2593C40.1886 12.3761 40.7498 11.6071 41.4564 10.9524C42.1734 10.2874 43.0047 9.76264 43.9503 9.37816C44.8959 8.99368 45.9038 8.80144 46.9742 8.80144C47.4106 8.80144 47.873 8.83781 48.3614 8.91055C48.8498 8.9729 49.359 9.07681 49.8889 9.22229ZM45.4155 18.7615C46.0078 18.7615 46.5325 18.6316 46.9897 18.3718C47.4573 18.1121 47.8678 17.7847 48.2211 17.3899C48.5848 16.9846 48.8914 16.543 49.1407 16.065C49.3901 15.5766 49.5928 15.1038 49.7486 14.6466C49.9045 14.1893 50.0188 13.7789 50.0915 13.4152C50.1643 13.0515 50.2007 12.7917 50.2007 12.6358C50.2007 12.5215 50.1695 12.4228 50.1071 12.3397C50.0448 12.2462 49.9513 12.1734 49.8266 12.1215C49.546 12.0487 49.255 11.9864 48.9537 11.9344C48.6524 11.8721 48.3562 11.8201 48.0652 11.7786C47.7743 11.737 47.4937 11.7058 47.2235 11.685C46.9638 11.6642 46.7248 11.6539 46.5065 11.6539C45.8831 11.6539 45.3167 11.7474 44.8076 11.9344C44.2984 12.1215 43.862 12.3864 43.4983 12.7294C43.145 13.0723 42.8696 13.4827 42.6721 13.9607C42.4747 14.4283 42.376 14.9427 42.376 15.5038C42.376 16.0026 42.4487 16.4546 42.5942 16.8599C42.7501 17.2548 42.9579 17.5925 43.2177 17.8731C43.4879 18.1536 43.81 18.3718 44.1841 18.5277C44.5582 18.6836 44.9686 18.7615 45.4155 18.7615Z" fill="#FF2121"/>
                    <path d="M70.4725 17.2028C70.7738 16.943 71.07 16.8131 71.3609 16.8131C71.5272 16.8131 71.6778 16.8547 71.8129 16.9378C71.948 17.021 72.0987 17.1509 72.265 17.3275C72.4208 17.5665 72.5299 17.7639 72.5923 17.9198C72.665 18.0653 72.7014 18.2108 72.7014 18.3563C72.7014 18.668 72.5455 18.9641 72.2338 19.2447C71.735 19.6604 71.1946 20.0345 70.6127 20.367C70.0308 20.6891 69.4229 20.9645 68.7891 21.1931C68.1552 21.4217 67.5005 21.5931 66.8251 21.7075C66.1497 21.8322 65.4794 21.8945 64.8144 21.8945C63.9727 21.8945 63.1829 21.7854 62.4452 21.5672C61.7074 21.3593 61.0475 21.058 60.4656 20.6631C59.8941 20.2683 59.4109 19.7955 59.016 19.2447C58.6212 18.6836 58.3406 18.0549 58.1743 17.3587C58.0808 17.0677 57.9925 16.8807 57.9093 16.7976C57.8366 16.704 57.7119 16.6573 57.5353 16.6573C57.1508 16.6573 56.8546 16.5638 56.6468 16.3767C56.439 16.1897 56.3351 15.9195 56.3351 15.5662C56.3351 15.4207 56.3455 15.3272 56.3662 15.2856L56.3974 14.9739C56.4494 14.5998 56.5481 14.3296 56.6936 14.1634C56.8494 13.9971 57.0884 13.914 57.4106 13.914H57.6444C58.0808 13.914 58.3874 13.7113 58.564 13.3061C58.8861 12.5891 59.2966 11.9344 59.7954 11.3421C60.2942 10.7498 60.8553 10.2458 61.4788 9.83018C62.1022 9.40414 62.7673 9.07681 63.4739 8.8482C64.1909 8.6092 64.9183 8.4897 65.6561 8.4897C66.425 8.4897 67.142 8.604 67.8071 8.83261C68.4825 9.05083 69.0696 9.35737 69.5684 9.75224C70.0672 10.1471 70.4569 10.6095 70.7374 11.1395C71.0284 11.6694 71.1739 12.241 71.1739 12.8541C71.1739 13.2801 71.0907 13.6698 70.9245 14.0231C70.7582 14.3764 70.5192 14.6881 70.2075 14.9583C69.8957 15.2181 69.5165 15.4311 69.0696 15.5974C68.6332 15.7636 68.1344 15.8727 67.5733 15.9247L62.1646 16.4702C61.9568 16.4702 61.7853 16.5222 61.6502 16.6261C61.5255 16.73 61.4632 16.8703 61.4632 17.0469C61.4632 17.3171 61.5619 17.5769 61.7593 17.8263C61.9672 18.0757 62.2373 18.2991 62.5699 18.4965C62.9128 18.6836 63.3024 18.8343 63.7389 18.9486C64.1857 19.0629 64.6429 19.12 65.1105 19.12C65.5574 19.12 66.0146 19.0785 66.4822 18.9953C66.9602 18.9018 67.4278 18.7719 67.885 18.6056C68.3526 18.4394 68.8046 18.242 69.2411 18.0133C69.6775 17.7743 70.088 17.5042 70.4725 17.2028ZM66.9966 13.1814C67.1524 13.1502 67.2875 13.0775 67.4018 12.9632C67.5161 12.8385 67.5733 12.6878 67.5733 12.5111C67.5733 12.3553 67.5161 12.2098 67.4018 12.0747C67.2875 11.9396 67.1316 11.8201 66.9342 11.7162C66.7368 11.6019 66.5082 11.5136 66.2484 11.4512C65.9886 11.3889 65.7132 11.3577 65.4223 11.3577C64.9962 11.3577 64.5598 11.4201 64.113 11.5447C63.6661 11.6694 63.2609 11.8357 62.8972 12.0435C62.5335 12.241 62.2373 12.4644 62.0087 12.7138C61.7801 12.9528 61.6658 13.1918 61.6658 13.4308C61.6658 13.6698 61.8113 13.7893 62.1022 13.7893C62.2789 13.7893 62.5647 13.7685 62.9595 13.7269C63.3544 13.6854 63.7908 13.6386 64.2688 13.5866C64.7468 13.5243 65.23 13.4567 65.7184 13.384C66.2068 13.3113 66.6329 13.2437 66.9966 13.1814Z" fill="#FF2121"/>
                    <path d="M74.1285 21.2866C74.0558 19.9046 73.9363 18.6316 73.77 17.4678C73.6142 16.2936 73.4479 15.27 73.2713 14.3972C73.105 13.5243 72.9543 12.8177 72.8192 12.2773C72.6945 11.737 72.6322 11.3993 72.6322 11.2642C72.6322 11.0667 72.7049 10.8745 72.8504 10.6875C73.0063 10.5004 73.1985 10.3394 73.4271 10.2043C73.6557 10.0588 73.8999 9.94448 74.1597 9.86135C74.4299 9.77822 74.6741 9.73666 74.8923 9.73666C75.0689 9.73666 75.2196 9.76783 75.3443 9.83018C75.4794 9.89253 75.5729 9.99644 75.6249 10.1419C75.6768 10.3186 75.7236 10.5056 75.7652 10.7031C75.8171 10.8901 75.8691 11.1187 75.921 11.3889C75.9834 11.7734 76.0665 11.9656 76.1704 11.9656C76.2847 11.9656 76.4146 11.7941 76.5601 11.4512C76.7679 10.9732 76.9913 10.5784 77.2303 10.2666C77.4693 9.95488 77.7239 9.71068 77.9941 9.53403C78.2747 9.34698 78.5604 9.21709 78.8514 9.14435C79.1527 9.07161 79.4645 9.03524 79.7866 9.03524C80.7634 9.03524 81.5895 9.41972 82.2649 10.1887C82.9508 10.9576 83.4859 12.0695 83.8704 13.5243C83.9224 13.6906 83.9691 13.7997 84.0107 13.8516C84.0522 13.8932 84.099 13.914 84.151 13.914C84.2029 13.914 84.2549 13.8932 84.3068 13.8516C84.3692 13.7997 84.4263 13.7009 84.4783 13.5555C84.7277 12.88 85.0186 12.3085 85.3512 11.8409C85.6837 11.3629 86.0266 10.9784 86.3799 10.6875C86.7436 10.3861 87.1125 10.1679 87.4866 10.0328C87.8607 9.89772 88.2192 9.83018 88.5621 9.83018C89.1959 9.83018 89.7675 10.064 90.2766 10.5316C90.7962 10.9888 91.2534 11.7006 91.6483 12.667C92.0536 13.623 92.4017 14.8388 92.6926 16.3144C92.994 17.7795 93.2434 19.5201 93.4408 21.536C93.4408 22.0971 93.2693 22.4868 92.9264 22.705C92.5835 22.9336 92.1159 23.0479 91.5236 23.0479C91.1391 23.0479 90.8378 22.9648 90.6196 22.7985C90.4013 22.6323 90.2766 22.4141 90.2455 22.1439C90.1104 20.6995 89.9597 19.4162 89.7934 18.2939C89.6376 17.1613 89.4661 16.2104 89.2791 15.4415C89.092 14.6621 88.8842 14.0698 88.6556 13.6646C88.4374 13.2593 88.1932 13.0567 87.923 13.0567C87.7879 13.0567 87.6165 13.1554 87.4086 13.3528C87.2112 13.5503 86.9982 13.914 86.7696 14.4439C86.541 14.9635 86.302 15.6805 86.0526 16.5949C85.8032 17.499 85.5642 18.6576 85.3356 20.0708C85.2732 20.4657 85.081 20.767 84.7589 20.9749C84.4471 21.1827 84.0626 21.2866 83.6054 21.2866C83.0755 21.2866 82.7066 21.2035 82.4987 21.0372C82.3013 20.871 82.1922 20.5904 82.1714 20.1955C82.1298 19.5097 82.0571 18.8291 81.9532 18.1536C81.8597 17.4678 81.7402 16.8183 81.5947 16.2053C81.4492 15.5818 81.2882 15.0103 81.1115 14.4907C80.9348 13.9607 80.7478 13.5035 80.5504 13.119C80.3529 12.7242 80.1503 12.4176 79.9425 12.1994C79.7347 11.9812 79.532 11.8721 79.3346 11.8721C79.0748 11.8721 78.8202 12.0539 78.5708 12.4176C78.3318 12.7813 78.1136 13.2957 77.9162 13.9607C77.7291 14.6258 77.5785 15.4259 77.4641 16.3611C77.3498 17.2963 77.2927 18.3407 77.2927 19.4941C77.2927 19.6915 77.2979 19.889 77.3083 20.0864C77.3187 20.2735 77.3239 20.4709 77.3239 20.6787C77.3239 20.9905 77.2719 21.245 77.168 21.4425C77.0745 21.6399 76.9342 21.7958 76.7471 21.9101C76.5705 22.0244 76.3627 22.1023 76.1237 22.1439C75.8847 22.1855 75.6249 22.2062 75.3443 22.2062C75.0845 22.2062 74.8767 22.1855 74.7208 22.1439C74.565 22.1127 74.4455 22.0608 74.3623 21.988C74.2792 21.9153 74.2221 21.8166 74.1909 21.6919C74.1597 21.5776 74.1389 21.4425 74.1285 21.2866Z" fill="#FF2121"/>
                    <path d="M96.7851 4.71765C96.4838 4.71765 96.198 4.67609 95.9279 4.59296C95.6681 4.49943 95.4395 4.37474 95.242 4.21887C95.055 4.05261 94.9043 3.86037 94.79 3.64215C94.6757 3.42393 94.6185 3.18493 94.6185 2.92515C94.6185 2.48871 94.79 2.13541 95.1329 1.86524C95.4862 1.59506 95.9538 1.45997 96.5357 1.45997C96.8059 1.45997 97.0657 1.51193 97.3151 1.61584C97.5645 1.70937 97.7827 1.83926 97.9697 2.00552C98.1672 2.17178 98.3231 2.36921 98.4374 2.59782C98.5517 2.81604 98.6088 3.04465 98.6088 3.28365C98.6088 3.73048 98.4426 4.08378 98.11 4.34356C97.7879 4.59296 97.3463 4.71765 96.7851 4.71765ZM94.6497 9.47168C94.6497 9.10798 94.8056 8.81183 95.1173 8.58322C95.4395 8.34422 95.8603 8.22472 96.3799 8.22472C97.3151 8.22472 97.8139 8.54685 97.8762 9.19111C97.9178 9.63794 97.9594 10.1419 98.0009 10.7031C98.0529 11.2642 98.0996 11.8617 98.1412 12.4956C98.1932 13.119 98.2347 13.7685 98.2659 14.4439C98.3075 15.109 98.3438 15.7688 98.375 16.4235C98.4062 17.0677 98.4322 17.6912 98.4529 18.2939C98.4737 18.8966 98.4841 19.4473 98.4841 19.9461C98.4841 20.4657 98.2971 20.8554 97.923 21.1151C97.5593 21.3749 97.0241 21.5048 96.3175 21.5048C95.9954 21.5048 95.7408 21.4269 95.5538 21.271C95.3771 21.1255 95.2888 20.9073 95.2888 20.6164C95.2888 19.1824 95.2524 17.8419 95.1797 16.5949C95.1173 15.3376 95.0446 14.2205 94.9615 13.2437C94.8887 12.2669 94.816 11.4564 94.7432 10.8122C94.6809 10.1575 94.6497 9.71068 94.6497 9.47168Z" fill="#FF2121"/>
                    <path d="M31.4389 3.19221C31.4389 4.95522 33.759 6.65044 35.5954 6.65044C37.4319 6.65044 38.0894 4.95522 38.0894 3.19221C38.0894 1.4292 36.6006 0 34.7641 0C32.9277 0 31.4389 1.4292 31.4389 3.19221Z" fill="#FF2121"/>
                    <path d="M92.623 3.19221C92.623 4.95522 94.9431 6.65044 96.7795 6.65044C98.616 6.65044 99.2734 4.95522 99.2734 3.19221C99.2734 1.4292 97.7847 0 95.9482 0C94.1117 0 92.623 1.4292 92.623 3.19221Z" fill="#FF2121"/>
                </svg>
            </Link>
        </div>
        <div>
          <Link href="resume"><span className="cursor-pointer border-primary border px-3 py-2 rounded-lg outline-btn">Resume</span></Link>
        </div>
      </nav>
    )
}

export default Navbar
