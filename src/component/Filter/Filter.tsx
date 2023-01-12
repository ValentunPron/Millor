import React from "react";
import { CategoryButton } from "../CategoryButton/CategoryButton";
import { RadioButton } from "../RadioButton/RadioButton";
import { SortBy } from "../SortBy/SortBy";

import styles from './Filter.module.scss';
import { FilterProps } from "./Filter.props";

const Roasting = (roasting: number) => {
	return Array(roasting).fill(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="#505050" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.04723 20.2866C-1.25785 16.2226 0.3107 9.84864 5.07929 5.0797C10.4945 -0.333678 17.9822 -1.62425 21.8052 2.1972C21.8097 2.2022 21.8134 2.20787 21.8196 2.21295C21.0545 4.4385 18.618 9.17387 11.3145 11.734C4.62422 14.0805 2.04343 17.8112 1.04723 20.2866ZM22.8805 3.5884C22.301 4.93992 21.2924 6.70615 19.5547 8.44339C17.808 10.1905 15.3254 11.9064 11.8089 13.1396C4.67193 15.6418 2.67784 19.738 2.12147 21.723C2.14775 21.7495 2.17035 21.777 2.1959 21.8027C6.0185 25.6243 13.5065 24.3338 18.9214 18.9195C23.7396 14.1022 25.2891 7.64562 22.8805 3.5884Z" />
		</svg>
	);
}

export const Filter = ({ sortBy, sortActive, setSortBy, sortByRadioItems, setSortRadio }: FilterProps): JSX.Element => {
	return (
		<div className={styles.filter}>
			<div className={styles.filterTop}>
				<div className={`${styles.filterRoasting} ${styles.filterMenu}`}>
					<div className={styles.roastingContainer}>
						<div className={styles.roastingBody}>
							<h3 className={styles.roastingTitle}>Ступінь обжарки</h3>
							<ul className={styles.roastingList}>
								{
									sortByRadioItems.roasting.map((item: number) => (
										<li key={`roasting_${item}`} className={styles.roastingItem}>
											<RadioButton type={'roasting'} value={Roasting(item)} setSort={setSortRadio} />
										</li>)
									)
								}
							</ul>
						</div>
					</div>
				</div>
				<div className={`${styles.filterDetalies} ${styles.filterMenu}`}>
					<div className={styles.detaliesContainer}>
						<ul className={styles.detaliesList}>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Географія</h2>
								<ul className={styles.detaliesMenu}>
									{
										sortByRadioItems.country.map((item) => (
											<li key={`country_${item}`} className={styles.detaliesMenuItem}>
												<RadioButton type={'country'} value={item} setSort={setSortRadio} />
											</li>
										))
									}
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Кислинка</h2>
								<ul className={styles.detaliesMenu}>
									{
										sortByRadioItems.acid.map((item) => (
											<li key={`acid_${item}`} className={styles.detaliesMenuItem}>
												<RadioButton type={'acid'} value={item} setSort={setSortRadio} />
											</li>
										))
									}
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Спосіб обробки</h2>
								<ul className={styles.detaliesMenu}>
									{
										sortByRadioItems.processing.map((item) => (
											<li key={`processing_${item}`} className={styles.detaliesMenuItem}>
												<RadioButton type={'processing'} value={item} setSort={setSortRadio} />
											</li>
										))
									}
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Особливі</h2>
								<ul className={styles.detaliesMenu}>
									{
										sortByRadioItems.special.map((item) => (
											<li key={`special_${item}`} className={styles.detaliesMenuItem}>
												<RadioButton type={'special'} value={item} setSort={setSortRadio} />
											</li>
										))
									}
								</ul>
							</li>
							<li className={styles.detaliesItem}>
								<h2 className={styles.detaliesTitle}>Вид кави</h2>
								<ul className={styles.detaliesMenu}>
									{
										sortByRadioItems.typeCoffe.map((item) => (
											<li key={`typeCoffe_${item}`} className={styles.detaliesMenuItem}>
												<RadioButton type={'typeCoffe'} value={item} setSort={setSortRadio} />
											</li>
										))
									}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.filterCategory}>
				<CategoryButton name='Турка'>
					<svg width="82" height="77" viewBox="0 0 82 77" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M80.5575 1.45711C78.6346 -0.485704 75.5063 -0.485704 73.5835 1.45711L63.6076 11.5379C63.1381 12.0124 63.1374 12.782 63.6062 13.2571C64.075 13.7323 64.8356 13.7329 65.3048 13.2586L75.2808 3.17785C76.2677 2.18058 77.8734 2.18091 78.8601 3.17785C79.3356 3.65848 79.5975 4.30123 79.5975 4.98774C79.5975 5.67425 79.3355 6.31699 78.8601 6.79747L45.2247 40.7868C44.2378 41.7839 42.6323 41.7839 41.6454 40.7868C41.1699 40.3063 40.9079 39.6636 40.9079 38.9771C40.9079 38.5467 41.011 38.1336 41.205 37.7668C41.208 37.7614 41.2115 37.7564 41.2144 37.7509C41.3286 37.5389 41.4724 37.3421 41.6454 37.1672L60.2757 18.3409C60.7453 17.8664 60.746 17.0967 60.2772 16.6216C59.8086 16.1465 59.048 16.1457 58.5786 16.6202L40.3119 35.0786C40.7314 31.5618 42.0786 28.411 42.9378 26.6901C43.2575 26.0522 43.2244 25.2738 42.8512 24.6587C42.5202 24.1131 41.9743 23.7873 41.3914 23.7873H38.5705C37.907 23.7873 37.3694 24.3316 37.3694 25.003C37.3694 25.6745 37.907 26.2188 38.5705 26.2188H40.4905C39.4652 28.3952 38.0709 32.0061 37.8196 35.9567H6.2838C6.03187 32.0001 4.63787 28.3913 3.61335 26.2188H15.5532C15.7489 27.1318 16.0921 28.563 16.5985 30.0931C17.5527 32.9803 21.2863 34.7726 21.7088 34.9674C22.0249 35.1131 22.3887 35.1131 22.7048 34.9674C23.1271 34.7726 26.8585 32.9807 27.8168 30.0929C28.3221 28.563 28.6642 27.1318 28.8595 26.2188H30.7363C31.3999 26.2188 31.9375 25.6745 31.9375 25.003C31.9375 24.3316 31.3999 23.7873 30.7363 23.7873H27.8742C27.2899 23.7873 26.7901 24.2133 26.6905 24.7962C26.6869 24.8178 26.3134 26.9755 25.5391 29.3204C25.0878 30.6802 23.2846 31.9072 22.2072 32.4997C21.1503 31.9155 19.3239 30.6752 18.8764 29.3213C18.0997 26.9747 17.7249 24.8168 17.7211 24.7957C17.6214 24.2129 17.1219 23.7874 16.5375 23.7874H2.85197C2.19677 23.7874 1.5965 24.1309 1.24656 24.7061C0.883965 25.3016 0.852414 26.0606 1.16504 26.6892C1.91729 28.1937 3.57603 31.9137 3.87457 35.9569H2.52685C1.38045 35.9569 0.447698 36.9007 0.447698 38.0607V40.618C0.447698 41.778 1.38045 42.7218 2.52685 42.7218H3.36655C3.16043 44.2402 2.89072 46.1129 2.5954 48.0724C2.4953 48.7362 2.94582 49.3562 3.60166 49.4576C3.663 49.4671 3.72402 49.4717 3.7844 49.4717C4.36769 49.4717 4.87955 49.0406 4.9702 48.4391C5.28891 46.3246 5.57831 44.3082 5.79116 42.7218H38.3112C38.9049 47.1404 39.9953 54.1354 41.5587 63.5506C42.0442 66.4686 41.2772 69.3934 39.4543 71.5752C37.8417 73.5054 35.6448 74.5683 33.2684 74.5683H10.8351C8.45872 74.5683 6.26186 73.5054 4.64908 71.5752C2.82618 69.3934 2.05919 66.4686 2.54511 63.5502C2.99595 60.8345 3.41396 58.2804 3.78728 55.9589C3.89394 55.2962 3.44951 54.6715 2.79479 54.5637C2.13927 54.4547 1.52283 54.9055 1.41632 55.5682C1.04364 57.8857 0.626273 60.4356 0.176233 63.1469C-0.427076 66.7719 0.534663 70.4161 2.81497 73.1453C4.86177 75.595 7.78511 77 10.8354 77H33.2687C36.3191 77 39.2422 75.595 41.2889 73.1455C43.5692 70.4163 44.5311 66.7719 43.9281 63.1472C42.4604 54.3074 41.4114 47.6135 40.8012 43.196C41.6026 43.7079 42.5186 43.9651 43.4353 43.9651C44.6981 43.9651 45.9608 43.4793 46.9222 42.508L80.5575 8.5182C81.4877 7.57816 82 6.32445 82 4.98774C82 3.65103 81.4878 2.39715 80.5575 1.45711ZM2.85004 40.2898V38.388H38.5404C38.5182 38.582 38.5055 38.7785 38.5055 38.9769C38.5055 39.4271 38.5649 39.8673 38.6775 40.2898H2.85004Z" />
						<path d="M10.8353 67.7897C10.4552 67.7897 10.097 67.5916 9.77024 67.201C9.22171 66.5449 8.99749 65.6247 9.1554 64.6759C10.3928 57.2236 11.3446 51.2153 11.9846 46.8177C12.0813 46.1534 11.6276 45.5356 10.9713 45.4377C10.3165 45.3398 9.70458 45.7989 9.60801 46.4633C8.97042 50.8447 8.02102 56.8367 6.78637 64.2724C6.51074 65.9283 6.93003 67.5683 7.93661 68.7719C8.71834 69.7066 9.74782 70.2213 10.8353 70.2213C11.4988 70.2213 12.0365 69.6769 12.0365 69.0055C12.0365 68.3341 11.4988 67.7897 10.8353 67.7897Z" />
						<path d="M43.5224 40.1564C44.1858 40.1564 44.7236 39.612 44.7236 38.9406C44.7236 38.2691 44.1858 37.7248 43.5224 37.7248C42.859 37.7248 42.3212 38.2691 42.3212 38.9406C42.3212 39.612 42.859 40.1564 43.5224 40.1564Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Френч-пресс'>
					<svg width="67" height="79" viewBox="0 0 67 79" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M56.4902 25.0167H54.6746C53.7265 24.1725 52.5034 23.7043 51.2352 23.7H48.6078V18.4333C48.9562 18.4333 49.2903 18.2946 49.5367 18.0477C49.7831 17.8008 49.9215 17.4659 49.9215 17.1167V11.85C49.9215 11.5008 49.7831 11.1659 49.5367 10.919C49.2903 10.6721 48.9562 10.5333 48.6078 10.5333H31.5293V7.9H32.843C33.8883 7.9 34.8907 7.48384 35.6298 6.74307C36.369 6.0023 36.7842 4.99761 36.7842 3.95C36.7842 2.9024 36.369 1.8977 35.6298 1.15693C34.8907 0.41616 33.8883 0 32.843 0H22.3331C21.2879 0 20.2854 0.41616 19.5463 1.15693C18.8072 1.8977 18.392 2.9024 18.392 3.95C18.392 4.99761 18.8072 6.0023 19.5463 6.74307C20.2854 7.48384 21.2879 7.9 22.3331 7.9H23.6469V10.5333H6.56837C6.21995 10.5333 5.8858 10.6721 5.63943 10.919C5.39305 11.1659 5.25464 11.5008 5.25464 11.85V15.8H1.31345C1.05366 15.8001 0.799719 15.8773 0.583728 16.022C0.367738 16.1667 0.199396 16.3723 0.099986 16.6128C0.000575969 16.8534 -0.0254389 17.1181 0.0252285 17.3735C0.0758958 17.6288 0.200971 17.8634 0.384643 18.0476L6.56837 24.2451V71.1C6.21995 71.1 5.8858 71.2387 5.63943 71.4856C5.39305 71.7326 5.25464 72.0675 5.25464 72.4167V77.6833C5.25464 78.0325 5.39305 78.3674 5.63943 78.6144C5.8858 78.8613 6.21995 79 6.56837 79H48.6078C48.9562 79 49.2903 78.8613 49.5367 78.6144C49.7831 78.3674 49.9215 78.0325 49.9215 77.6833V72.4167C49.9215 72.0675 49.7831 71.7326 49.5367 71.4856C49.2903 71.2387 48.9562 71.1 48.6078 71.1V65.8333H51.2352C52.5034 65.829 53.7265 65.3608 54.6746 64.5167H56.4902C58.8771 64.5153 61.1702 63.5849 62.8858 61.9217C64.6015 60.2584 65.6055 57.9924 65.6863 55.6015C66.0984 55.2321 66.4284 54.7798 66.6547 54.2742C66.8811 53.7686 66.9987 53.2209 67 52.6667V36.8667C66.9987 36.3125 66.8811 35.7648 66.6547 35.2591C66.4284 34.7535 66.0984 34.3013 65.6863 33.9318C65.6055 31.5409 64.6015 29.2749 62.8858 27.6117C61.1702 25.9484 58.8771 25.018 56.4902 25.0167ZM57.7763 55.5712C57.7142 55.867 57.5525 56.1323 57.3183 56.3226C57.0841 56.513 56.7917 56.6168 56.4902 56.6167H54.6746C53.7265 55.7725 52.5034 55.3043 51.2352 55.3H48.6078V34.2333H51.2352C52.5034 34.229 53.7265 33.7608 54.6746 32.9167H56.4902C56.7917 32.9165 57.0841 33.0204 57.3183 33.2107C57.5525 33.4011 57.7142 33.6664 57.7763 33.9621C57.3729 34.3306 57.0503 34.7791 56.8289 35.279C56.6075 35.779 56.4922 36.3197 56.4902 36.8667V52.6667C56.4922 53.2137 56.6075 53.7543 56.8289 54.2543C57.0503 54.7543 57.3729 55.2027 57.7763 55.5712ZM26.2743 18.4333V22.3833H9.19584V18.4333H26.2743ZM45.9803 32.9167H9.19584V25.0167H45.9803V32.9167ZM9.19584 35.55H26.2743V53.9833H9.19584V35.55ZM28.9018 35.55H45.9803V53.9833H28.9018V35.55ZM51.2352 26.3333C51.9321 26.3333 52.6004 26.6108 53.0931 27.1046C53.5859 27.5985 53.8627 28.2683 53.8627 28.9667C53.8627 29.6651 53.5859 30.3349 53.0931 30.8287C52.6004 31.3226 51.9321 31.6 51.2352 31.6H48.6078V26.3333H51.2352ZM45.9803 22.3833H28.9018V18.4333H45.9803V22.3833ZM21.0194 3.95C21.0194 3.6008 21.1578 3.2659 21.4042 3.01898C21.6506 2.77205 21.9847 2.63333 22.3331 2.63333H32.843C33.1914 2.63333 33.5256 2.77205 33.7719 3.01898C34.0183 3.2659 34.1567 3.6008 34.1567 3.95C34.1567 4.2992 34.0183 4.6341 33.7719 4.88102C33.5256 5.12795 33.1914 5.26667 32.843 5.26667H22.3331C21.9847 5.26667 21.6506 5.12795 21.4042 4.88102C21.1578 4.6341 21.0194 4.2992 21.0194 3.95ZM26.2743 7.9H28.9018V10.5333H26.2743V7.9ZM7.88211 13.1667H47.294V15.8H7.88211V13.1667ZM6.56837 18.4333V20.5216L4.4848 18.4333H6.56837ZM47.294 76.3667H7.88211V73.7333H47.294V76.3667ZM9.19584 71.1V56.6167H45.9803V71.1H9.19584ZM51.2352 63.2H48.6078V57.9333H51.2352C51.9321 57.9333 52.6004 58.2108 53.0931 58.7046C53.5859 59.1985 53.8627 59.8683 53.8627 60.5667C53.8627 61.2651 53.5859 61.9349 53.0931 62.4287C52.6004 62.9226 51.9321 63.2 51.2352 63.2ZM64.3725 52.6667C64.3723 52.8963 64.3114 53.1218 64.196 53.3202C64.0806 53.5187 63.9149 53.6829 63.7157 53.7964C63.5162 53.9118 63.3504 54.0778 63.2351 54.2777C63.1199 54.4776 63.059 54.7044 63.0588 54.9353V55.3C63.0567 57.0454 62.364 58.7187 61.1326 59.9528C59.9012 61.187 58.2316 61.8812 56.4902 61.8833H56.3036C56.5523 61.0233 56.5523 60.1101 56.3036 59.25H56.4902C57.5354 59.25 58.5379 58.8338 59.277 58.0931C60.0161 57.3523 60.4313 56.3476 60.4313 55.3V54.9353C60.4311 54.7044 60.3703 54.4776 60.255 54.2777C60.1397 54.0778 59.974 53.9118 59.7745 53.7964C59.5752 53.6829 59.4095 53.5187 59.2941 53.3202C59.1788 53.1218 59.1179 52.8963 59.1176 52.6667V36.8667C59.1179 36.637 59.1788 36.4115 59.2941 36.2131C59.4095 36.0147 59.5752 35.8504 59.7745 35.737C59.974 35.6215 60.1397 35.4555 60.255 35.2556C60.3703 35.0557 60.4311 34.8289 60.4313 34.5981V34.2333C60.4313 33.1857 60.0161 32.181 59.277 31.4403C58.5379 30.6995 57.5354 30.2833 56.4902 30.2833H56.3036C56.5523 29.4233 56.5523 28.5101 56.3036 27.65H56.4902C58.2316 27.6521 59.9012 28.3464 61.1326 29.5805C62.364 30.8147 63.0567 32.488 63.0588 34.2333V34.5981C63.059 34.8289 63.1199 35.0557 63.2351 35.2556C63.3504 35.4555 63.5162 35.6215 63.7157 35.737C63.9149 35.8504 64.0806 36.0147 64.196 36.2131C64.3114 36.4115 64.3723 36.637 64.3725 36.8667V52.6667Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Мока'>
					<svg width="74" height="84" viewBox="0 0 74 84" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M72.5954 22.2987L67.0215 15.1054C66.2753 14.1422 65.1526 13.5898 63.9413 13.5898H59.3384C58.904 12.7811 58.0556 12.2307 57.0822 12.2307H51.8959L36.7595 7.13705C36.4035 7.01712 36.0393 6.92934 35.6703 6.87241L36.4181 3.09734C36.5694 2.33362 36.3757 1.55023 35.8866 0.947789C35.3978 0.345516 34.6748 0 33.9032 0H29.1108C28.3394 0 27.6166 0.345352 27.1275 0.947625C26.6382 1.5499 26.4445 2.3333 26.5958 3.09717L27.3436 6.87241C26.9747 6.92934 26.6106 7.01712 26.2545 7.13705L11.1182 12.2309H5.93172C4.7071 12.2309 3.53756 12.8213 2.80305 13.8103L0.380128 17.0719C-0.0526174 17.6543 -0.121031 18.4208 0.201375 19.0719C0.523944 19.7233 1.17233 20.1278 1.89352 20.1278H3.90498C3.94528 20.1278 3.98347 20.1474 4.00752 20.1802L12.3334 31.5993L13.0307 37.2309C13.1079 37.8533 13.6327 38.3089 14.2386 38.3089C14.2891 38.3089 14.34 38.3056 14.3913 38.2992C15.059 38.2149 15.5329 37.6 15.4495 36.9257L14.7244 31.0693L15.1924 14.692H21.0088L24.6188 43.849C24.6622 44.1991 24.7523 44.5328 24.8791 44.8468H16.5427C16.4785 44.8468 16.4242 44.7984 16.4164 44.7343L16.0591 41.8478C15.9756 41.1733 15.3676 40.6949 14.6984 40.7794C14.0307 40.8637 13.5569 41.4786 13.6402 42.1529L13.9976 45.0396C14.1578 46.3326 15.2521 47.3077 16.5427 47.3077H16.8277V54.3596H16.5136C15.2337 54.3596 14.1671 55.2871 13.9771 56.565L10.5744 79.4658C10.4053 80.6037 10.7348 81.7563 11.4784 82.6281C12.2221 83.5001 13.3024 84 14.4418 84H17.4166C18.0899 84 18.6354 83.4491 18.6354 82.7695C18.6354 82.09 18.0899 81.5391 17.4166 81.5391H14.4418C14.0062 81.5391 13.6098 81.3555 13.3255 81.0223C13.0412 80.6891 12.9203 80.2659 12.9848 79.8308L13.173 78.5641H49.8407L50.0289 79.8308C50.0934 80.2658 49.9725 80.6889 49.6881 81.0223C49.4037 81.3555 49.0074 81.5391 48.5717 81.5391H22.2919C21.6186 81.5391 21.0731 82.09 21.0731 82.7695C21.0731 83.4491 21.6186 84 22.2919 84H48.5719C49.7115 84 50.7915 83.4999 51.5353 82.6283C52.2789 81.7564 52.6085 80.6037 52.4396 79.466L49.037 56.5648C48.847 55.2869 47.7803 54.3596 46.5005 54.3596H46.1863V47.3074H46.4714C47.762 47.3074 48.8563 46.3324 49.0165 45.0391L51.2597 26.9227H55.211C55.7173 26.9227 56.212 26.8252 56.6811 26.6329L58.9527 25.7025C60.7193 24.9795 62.7422 25.5559 63.8725 27.1053C64.6077 28.1128 64.8768 29.3918 64.6108 30.6142L60.6475 48.8225C60.6345 48.8819 60.5833 48.9236 60.523 48.9236H57.0822C55.6679 48.9236 54.5174 50.0852 54.5174 51.513V54.2309C54.5174 55.6587 55.6679 56.8204 57.0822 56.8204H63.8953C65.7124 56.8204 67.2765 55.5744 67.6988 53.7902L73.8167 27.9566C74.2872 25.9696 73.8419 23.9075 72.5954 22.2987ZM57.2096 14.8204V17.9703C57.2096 18.6951 56.6962 19.3115 55.9887 19.4357L52.1021 20.1182L52.7739 14.6918H57.0822C57.1524 14.6918 57.2096 14.7494 57.2096 14.8204ZM29.0124 2.50802C29.0504 2.46094 29.0959 2.46094 29.1108 2.46094H33.9032C33.9182 2.46094 33.9635 2.46094 34.0019 2.50802C34.04 2.55495 34.0313 2.5999 34.0282 2.61466L33.2001 6.79481H29.814L28.9859 2.61466C28.9829 2.60006 28.9742 2.55511 29.0124 2.50802ZM3.90498 17.6667H2.98505L4.75325 15.2867C5.02983 14.9141 5.47038 14.6918 5.93172 14.6918H12.7536L12.387 27.5216L5.97072 18.7213C5.48939 18.061 4.71717 17.6667 3.90498 17.6667ZM27.0256 9.47166C27.4509 9.32843 27.894 9.25591 28.3427 9.25591H34.6715C35.1202 9.25591 35.5632 9.32843 35.9886 9.47182L44.1876 12.2309H18.8265L27.0256 9.47166ZM27.0375 43.5435L23.4652 14.6918H39.5487L35.9768 43.5433C35.8848 44.2862 35.2561 44.8465 34.5147 44.8465H28.4993C27.7578 44.8465 27.1293 44.2864 27.0375 43.5435ZM16.3875 56.9297C16.3969 56.8664 16.4499 56.8203 16.5134 56.8203H24.9176C24.8013 57.1057 24.7138 57.4066 24.667 57.7219L21.936 76.1032H13.5388L16.3875 56.9297ZM36.0299 58.0871L38.7067 76.103H24.401L27.0778 58.087C27.185 57.3649 27.8115 56.8203 28.5348 56.8203H34.5731C35.2962 56.8203 35.9226 57.3649 36.0299 58.0871ZM46.6266 56.9297L49.4752 76.1032H41.1713L38.4403 57.7223C38.3935 57.4069 38.3061 57.1059 38.1896 56.8204H46.5005C46.5642 56.8203 46.6171 56.8664 46.6266 56.9297ZM43.749 54.3593H19.2651V47.3074H43.749V54.3593ZM46.5978 44.7338C46.5898 44.7981 46.5356 44.8465 46.4715 44.8465H38.1351C38.262 44.5326 38.3522 44.1988 38.3956 43.8487L42.0053 14.6918H50.3173L46.5978 44.7338ZM71.4461 27.3842L65.3282 53.2178C65.1691 53.8899 64.5799 54.3593 63.8954 54.3593H57.0822C57.012 54.3593 56.9549 54.3016 56.9549 54.2307V51.5128C56.9549 51.442 57.0121 51.3844 57.0822 51.3844H60.523C61.7182 51.3844 62.7717 50.5291 63.0282 49.3507L66.9915 31.1425C67.4081 29.2276 66.9867 27.224 65.8349 25.6458C64.043 23.1899 60.8357 22.2754 58.0364 23.4224L55.7648 24.3528C55.588 24.4251 55.4017 24.4619 55.211 24.4619H51.5644L51.786 22.6716L56.4063 21.8603C58.2842 21.5306 59.647 19.8947 59.647 17.9704V16.0509H63.9413C64.3976 16.0509 64.8204 16.2591 65.1017 16.6218L70.6756 23.8151C71.4621 24.8299 71.7427 26.1309 71.4461 27.3842Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Эспрессо'>
					<svg width="76" height="79" viewBox="0 0 76 79" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.3228 34.2333H19.7558C20.4833 34.2333 21.0728 33.6439 21.0728 32.9164V31.6H23.706V32.9164C23.706 33.6439 24.2955 34.2333 25.0224 34.2333H26.6274L27.6954 38.503C27.8425 39.0888 28.3687 39.4999 28.9726 39.4999H34.2392C34.8431 39.4999 35.3699 39.0888 35.5164 38.503L36.5844 34.2333H38.1894C38.9163 34.2333 39.5058 33.6439 39.5058 32.9164V26.3335C40.0072 26.3359 40.4671 26.0538 40.6913 25.6054L42.9533 21.0663H48.7226V65.8334H39.9415C42.1354 64.3784 43.4548 61.9217 43.456 59.2896V50.033C43.456 49.3062 42.8665 48.7167 42.139 48.7167H21.0728C20.3453 48.7167 19.7558 49.3062 19.7558 50.033H13.1723C12.4454 50.033 11.856 50.6225 11.856 51.35V59.2499C11.856 59.9773 12.4454 60.5668 13.1723 60.5668H19.8691C20.2247 62.7173 21.4561 64.6243 23.2703 65.8334H13.1729C12.4454 65.8334 11.856 66.4228 11.856 67.1497V77.6835C11.856 78.4103 12.4454 78.9998 13.1729 78.9998H73.7391C74.4666 78.9998 75.056 78.4103 75.056 77.6835V1.31694C75.056 0.589461 74.4666 0 73.7391 0H13.1729C12.4454 0 11.856 0.589461 11.856 1.31694V19.75C11.856 20.4774 12.4454 21.0669 13.1729 21.0669H20.2591L22.5277 25.6054C22.7507 26.0514 23.207 26.3335 23.706 26.3335V28.9668H21.0728V27.6498C21.0728 26.9229 20.4833 26.3335 19.7558 26.3335H1.3228C0.59532 26.3335 0.00585938 26.9229 0.00585938 27.6498V32.9164C0.00585938 33.6439 0.59532 34.2333 1.3228 34.2333ZM14.4892 52.6663H19.7558V57.9335H14.4892V52.6663ZM22.3891 59.2499V51.35H40.8227V59.2896C40.8191 62.1749 38.4811 64.5128 35.5953 64.5164H27.6165C24.7313 64.5128 22.3927 62.1749 22.3897 59.2896L22.3891 59.2499ZM33.2109 36.8666H30.0009L29.3427 34.2333H33.8691L33.2109 36.8666ZM51.3559 21.0663H72.4227V65.8334H51.3559V21.0663ZM72.4227 76.3665H14.4892V68.4667H72.4227V76.3665ZM14.4892 2.63329H72.4227V18.433H14.4892V2.63329ZM23.2028 21.0663H40.009L38.6921 23.7002H24.5197L23.2028 21.0663ZM36.8725 26.3335V31.6H26.3393V26.3335H36.8725ZM2.63915 28.9668H18.4395V31.6H2.63915V28.9668Z" />
						<path d="M31.6061 15.7998C34.5148 15.7998 36.8727 13.4419 36.8727 10.5332C36.8727 7.62447 34.5148 5.26662 31.6061 5.26662C28.6974 5.26662 26.3395 7.62447 26.3395 10.5332C26.3395 13.4419 28.6974 15.7998 31.6061 15.7998ZM31.6061 7.89992C33.0605 7.89992 34.2394 9.07884 34.2394 10.5332C34.2394 11.9876 33.0605 13.1665 31.6061 13.1665C30.1517 13.1665 28.9728 11.9876 28.9728 10.5332C28.9728 9.07884 30.1517 7.89992 31.6061 7.89992Z" />
						<path d="M39.5059 9.21681H42.1392V11.8501H39.5059V9.21681Z" />
						<path d="M44.773 9.21681H47.4063V11.8501H44.773V9.21681Z" />
						<path d="M60.5726 51.3501H63.2059V61.8833H60.5726V51.3501Z" />
						<path d="M55.3061 51.3501H57.9394V61.8833H55.3061V51.3501Z" />
						<path d="M65.8393 51.3501H68.4726V61.8833H65.8393V51.3501Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Воронка'>
					<svg width="54" height="73" viewBox="0 0 54 73" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.4998 21.9999C15.9478 21.9999 15.4198 21.6969 15.1558 21.1719L6.15582 3.17188C5.78682 2.43088 6.08682 1.52788 6.82782 1.15888C7.57182 0.786877 8.46882 1.08688 8.84082 1.83088L17.8408 19.8309C18.2128 20.5719 17.9098 21.4719 17.1688 21.8439C16.9558 21.9489 16.7278 21.9999 16.4998 21.9999Z" />
						<path d="M37.4999 21.9999C37.2749 21.9999 37.0469 21.9489 36.8309 21.8409C36.0899 21.4689 35.7899 20.5689 36.1589 19.8279L45.1589 1.8279C45.5309 1.0839 46.4309 0.7869 47.1719 1.1559C47.9129 1.5249 48.2129 2.4279 47.8439 3.1689L38.8439 21.1689C38.5769 21.6969 38.0489 21.9999 37.4999 21.9999Z" />
						<path d="M49.5001 3.99997H4.50008C3.67208 3.99997 3.00008 3.32797 3.00008 2.49997C3.00008 1.67197 3.67208 0.999968 4.50008 0.999968H49.5001C50.3281 0.999968 51.0001 1.67197 51.0001 2.49997C51.0001 3.32797 50.3281 3.99997 49.5001 3.99997Z" />
						<path d="M43.4999 31H10.4999C8.01893 31 5.99993 28.981 5.99993 26.5V23.5C5.99993 21.019 8.01893 19 10.4999 19H43.4999C45.9809 19 47.9999 21.019 47.9999 23.5V26.5C47.9999 28.981 45.9809 31 43.4999 31ZM10.4999 22C9.67193 22 8.99993 22.672 8.99993 23.5V26.5C8.99993 27.328 9.67193 28 10.4999 28H43.4999C44.3279 28 44.9999 27.328 44.9999 26.5V23.5C44.9999 22.672 44.3279 22 43.4999 22H10.4999Z" />
						<path d="M43.5 73H10.5C4.71 73 0 68.29 0 62.5C0 61.072 0.282 59.686 0.837 58.384L12.099 28.963C12.396 28.189 13.269 27.808 14.037 28.099C14.811 28.396 15.198 29.263 14.901 30.037L3.618 59.512C3.201 60.49 3 61.48 3 62.5C3 66.634 6.366 70 10.5 70H43.5C47.634 70 51 66.634 51 62.5C51 61.48 50.799 60.49 50.403 59.563L39.099 30.037C38.802 29.263 39.189 28.396 39.963 28.099C40.734 27.805 41.601 28.186 41.901 28.963L53.184 58.438C53.718 59.689 54 61.072 54 62.5C54 68.29 49.29 73 43.5 73Z" />
						<path d="M36.366 50.5C33.417 50.5 31.875 49.021 30.636 47.833C29.529 46.768 28.728 46 26.985 46C25.245 46 24.447 46.768 23.34 47.833C22.101 49.021 20.562 50.5 17.616 50.5C14.67 50.5 13.131 49.021 11.895 47.83C10.788 46.768 9.987 46 8.25 46C7.422 46 6.75 45.328 6.75 44.5C6.75 43.672 7.422 43 8.25 43C11.196 43 12.735 44.479 13.971 45.67C15.078 46.732 15.879 47.5 17.616 47.5C19.353 47.5 20.154 46.732 21.261 45.67C22.497 44.482 24.039 43 26.985 43C29.934 43 31.476 44.479 32.715 45.667C33.825 46.729 34.626 47.5 36.366 47.5C38.109 47.5 38.91 46.732 40.02 45.667C41.259 44.479 42.801 43 45.75 43C46.578 43 47.25 43.672 47.25 44.5C47.25 45.328 46.578 46 45.75 46C44.007 46 43.206 46.768 42.096 47.833C40.857 49.021 39.315 50.5 36.366 50.5Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Аэропресс'>
					<svg width="83" height="83" viewBox="0 0 83 83" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M57.4081 56.7167H54.6414V53.95H58.7914C59.5554 53.95 60.1747 53.3306 60.1747 52.5667V47.0333C60.1747 46.2694 59.5554 45.65 58.7914 45.65H56.0247V13.8333C56.0247 13.0694 55.4054 12.45 54.6414 12.45H50.4914V2.76667H56.0247V0H25.5914V2.76667H31.1247V12.45H26.9747C26.2108 12.45 25.5914 13.0694 25.5914 13.8333V45.65H22.8247C22.0608 45.65 21.4414 46.2694 21.4414 47.0333V52.5667C21.4414 53.3306 22.0608 53.95 22.8247 53.95H26.9747V80.2333C26.9747 81.7614 28.2133 83 29.7414 83H51.8747C53.4028 83 54.6414 81.7614 54.6414 80.2333V76.0833H57.4081C59.7001 76.0833 61.5581 74.2253 61.5581 71.9333V60.8667C61.5581 58.5747 59.7001 56.7167 57.4081 56.7167ZM33.8914 2.76667H47.7247V12.45H33.8914V2.76667ZM33.8914 15.2167H47.7247V40.1167H33.8914V15.2167ZM51.8747 80.2333H29.7414V67.7833H51.8747V80.2333ZM51.8747 65.0167H29.7414V53.95H51.8747V65.0167ZM24.2081 51.1833V48.4167H26.9747C27.7387 48.4167 28.3581 47.7973 28.3581 47.0333V15.2167H31.1247V41.5C31.1247 42.2639 31.7441 42.8833 32.5081 42.8833H49.1081C49.872 42.8833 50.4914 42.2639 50.4914 41.5V15.2167H53.2581V47.0333C53.2581 47.7973 53.8775 48.4167 54.6414 48.4167H57.4081V51.1833H24.2081ZM58.7914 71.9333C58.7914 72.6973 58.172 73.3167 57.4081 73.3167H54.6414V59.4833H57.4081C58.172 59.4833 58.7914 60.1027 58.7914 60.8667V71.9333Z" />
						<path d="M42.1915 17.9833H39.4248V20.75H42.1915V17.9833Z" />
						<path d="M42.1915 23.5166H39.4248V26.2833H42.1915V23.5166Z" />
						<path d="M42.1915 29.05H39.4248V31.8166H42.1915V29.05Z" />
						<path d="M42.1915 34.5834H39.4248V37.3501H42.1915V34.5834Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Чашка'>
					<svg width="67" height="66" viewBox="0 0 67 66" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M65.6914 26.6191H54.9609V23.8906C54.9609 23.1786 54.3749 22.6015 53.6523 22.6015H25.3867C24.6641 22.6015 24.0781 23.1786 24.0781 23.8906C24.0781 24.6025 24.6641 25.1796 25.3867 25.1796H52.3438V35.0624C52.3438 43.7439 47.6384 51.8127 40.0406 56.203H14.9203C7.3225 51.8128 2.61719 43.7439 2.61719 35.0625V25.1798H11.3848C12.1074 25.1798 12.6934 24.6027 12.6934 23.8907C12.6934 23.1788 12.1074 22.6016 11.3848 22.6016H1.30859C0.585988 22.6016 0 23.1788 0 23.8907V35.0625C0 39.9351 1.32953 44.7129 3.84491 48.8791C5.54124 51.6888 7.74229 54.17 10.3198 56.2031H1.30859C0.585988 56.2031 0 56.7802 0 57.4922C0 62.1835 3.87435 66 8.63672 66H49.4648C54.2272 66 58.1016 62.1835 58.1016 57.4922C58.1016 56.7802 57.5156 56.2031 56.793 56.2031H44.6411C47.0135 54.3319 49.0657 52.0803 50.7002 49.5429H54.3939C61.3449 49.5429 67 43.9722 67 37.125V27.9082C67 27.1962 66.4141 26.6191 65.6914 26.6191ZM55.3411 58.7812C54.742 61.4331 52.3347 63.4219 49.4648 63.4219H8.63672C5.76684 63.4219 3.35968 61.4331 2.76048 58.7812H14.5698H40.3912H55.3411ZM54.9609 35.0625V34.3535H59.1484V37.125C59.1484 39.7075 57.0156 41.8085 54.3939 41.8085H54.0967C54.6679 39.6164 54.9609 37.3499 54.9609 35.0625ZM64.3828 37.125C64.3828 42.5507 59.9018 46.9648 54.3939 46.9648H52.1667C52.5845 46.1242 52.9577 45.2636 53.2838 44.3867H54.3939C58.4588 44.3867 61.7656 41.1291 61.7656 37.125V33.0644C61.7656 32.3525 61.1796 31.7754 60.457 31.7754H54.9609V29.1973H64.3828V37.125Z" />
						<path d="M28.7301 7.13406L28.0493 6.29191C27.0498 5.05596 27.0483 3.32823 28.0457 2.09047C28.4951 1.53282 28.4004 0.722002 27.8343 0.279466C27.268 -0.163327 26.4451 -0.0698695 25.9957 0.487779C24.2367 2.67094 24.2393 5.71815 26.0021 7.89821L26.683 8.74036C27.9891 10.3556 27.991 12.6133 26.6877 14.231L25.9899 15.097C25.5406 15.6546 25.6353 16.4654 26.2014 16.908C26.4421 17.0961 26.729 17.1875 27.014 17.1875C27.3996 17.1875 27.7815 17.0204 28.04 16.6997L28.7377 15.8337C30.8027 13.2708 30.7997 9.69336 28.7301 7.13406Z" />
						<path d="M35.9836 10.0324L35.3027 9.19038C34.3032 7.95429 34.3018 6.22656 35.2992 4.9888C35.7485 4.43116 35.6538 3.62034 35.0877 3.1778C34.5215 2.73501 33.6985 2.82846 33.2491 3.38611C31.4901 5.56927 31.4927 8.61648 33.2555 10.7967L33.9364 11.6388C35.2424 13.2541 35.2443 15.5121 33.941 17.1296L33.2434 17.9954C32.794 18.5531 32.8887 19.3639 33.4548 19.8064C33.6955 19.9945 33.9825 20.0858 34.2675 20.0858C34.653 20.0858 35.0351 19.9186 35.2934 19.598L35.9909 18.7321C38.056 16.1694 38.053 12.592 35.9836 10.0324Z" />
						<path d="M21.4767 10.0325L20.7959 9.1905C19.7964 7.95455 19.7949 6.22669 20.7922 4.98893C21.2416 4.43128 21.1468 3.62046 20.5807 3.1778C20.0145 2.73513 19.1915 2.82872 18.7422 3.38611C16.9833 5.56926 16.9859 8.61661 18.7487 10.7967L19.4296 11.6388C20.7355 13.2541 20.7375 15.5121 19.4343 17.1294L18.7365 17.9953C18.2872 18.553 18.3818 19.3638 18.9479 19.8064C19.1885 19.9945 19.4754 20.0859 19.7605 20.0859C20.146 20.0859 20.528 19.9188 20.7863 19.5983L21.4842 18.7323C23.5492 16.1695 23.5461 12.5921 21.4767 10.0325Z" />
						<path d="M19.6654 22.9788C19.422 22.7391 19.0844 22.6011 18.7402 22.6011C18.3961 22.6011 18.0585 22.7391 17.8151 22.9788C17.5718 23.2199 17.4316 23.5512 17.4316 23.8902C17.4316 24.2292 17.5717 24.5618 17.8151 24.8028C18.0585 25.0426 18.3961 25.1793 18.7402 25.1793C19.0844 25.1793 19.422 25.0426 19.6654 24.8028C19.91 24.5618 20.0488 24.2305 20.0488 23.8902C20.0488 23.5512 19.91 23.2186 19.6654 22.9788Z" />
						<path d="M47.3711 33.7734C46.6485 33.7734 46.0625 34.3506 46.0625 35.0625C46.0625 39.8474 44.0923 44.5497 40.657 47.9638C40.1482 48.4694 40.152 49.2856 40.6652 49.7868C40.9204 50.036 41.2534 50.1604 41.5865 50.1604C41.9233 50.1603 42.2601 50.0329 42.516 49.7786C46.4331 45.8856 48.6797 40.5218 48.6797 35.0625C48.6797 34.3506 48.0937 33.7734 47.3711 33.7734Z" />
						<path d="M38.4575 51.4626C38.1023 50.8424 37.3042 50.6234 36.6748 50.9731L36.6449 50.9898C36.0154 51.3396 35.793 52.1258 36.148 52.7458C36.3886 53.1658 36.832 53.4018 37.289 53.4018C37.5068 53.4018 37.7276 53.3481 37.9307 53.2353L37.9606 53.2187C38.5901 52.8688 38.8125 52.0826 38.4575 51.4626Z" />
					</svg>
				</CategoryButton>
				<CategoryButton name='Автомат'>
					<svg width="64" height="84" viewBox="0 0 64 84" fill="#505050" xmlns="http://www.w3.org/2000/svg">
						<path d="M58.0947 69.9338H56.1502V23.1258C56.1502 23.0467 56.1445 22.9688 56.1336 22.8926C57.7728 20.9137 58.7591 18.3755 58.7591 15.611V3.25221C59.5181 3.10816 60.092 2.44141 60.092 1.64062C60.092 0.734672 59.3573 0 58.4513 0H5.54889C4.64294 0 3.90827 0.734672 3.90827 1.64062C3.90827 2.44141 4.48216 3.10816 5.24111 3.25221V15.611C5.24111 18.3661 6.22073 20.8966 7.85004 22.8726V69.9338H5.90573C3.14866 69.9338 0.905762 72.1768 0.905762 74.9339V82.3594C0.905762 83.2653 1.64043 84 2.54639 84H61.4538C62.3598 84 63.0945 83.2653 63.0945 82.3594V74.9337C63.0945 72.1768 60.8516 69.9338 58.0947 69.9338ZM55.478 3.28125V15.611C55.478 20.105 51.8221 23.761 47.3282 23.761H16.6722C12.1783 23.761 8.52236 20.105 8.52236 15.611V3.28125H55.478ZM29.5358 33.6374H34.4647V37.202H29.5358V33.6374ZM23.8305 30.3562V27.0423H40.1699V30.3562H23.8305ZM11.1314 25.6074C12.7737 26.5214 14.6632 27.0423 16.6722 27.0423H20.5493V31.9968C20.5493 32.9027 21.284 33.6374 22.1899 33.6374H26.2544V38.8426C26.2544 39.7486 26.9891 40.4832 27.895 40.4832H36.1052C37.0112 40.4832 37.7458 39.7486 37.7458 38.8426V33.6374H41.8103C42.7163 33.6374 43.4509 32.9027 43.4509 31.9968V27.0423H47.3281C49.337 27.0423 51.2267 26.5212 52.8688 25.6074V69.9338H41.6443C42.2165 68.956 42.5448 67.8188 42.5448 66.6064V65.754H46.8826C47.7886 65.754 48.5233 65.0193 48.5233 64.1133V56.1045C48.5233 55.1985 47.7886 54.4638 46.8826 54.4638H42.5448V53.1584C42.5448 52.2524 41.8102 51.5178 40.9042 51.5178H23.1441C22.2382 51.5178 21.5035 52.2524 21.5035 53.1584V66.6064C21.5035 67.8188 21.8318 68.956 22.404 69.9338H11.1314V25.6074ZM24.7847 66.6063V54.7988H39.2639V66.6063C39.2639 68.4411 37.7711 69.9336 35.9364 69.9336H28.1124C26.2774 69.9338 24.7847 68.4411 24.7847 66.6063ZM42.545 57.7451H45.2422V62.4725H42.545V57.7451ZM59.8132 80.7188H4.18718V74.9337C4.18718 73.9861 4.95811 73.2149 5.90589 73.2149H58.0948C59.0425 73.2149 59.8136 73.986 59.8136 74.9337L59.8132 80.7188Z" />
						<path d="M17.0044 19.7253C19.7163 19.7253 21.9228 17.5189 21.9228 14.8068C21.9228 12.0947 19.7165 9.88839 17.0044 9.88839C14.2923 9.88839 12.086 12.0947 12.086 14.8068C12.086 17.5189 14.2923 19.7253 17.0044 19.7253ZM17.0044 13.1698C17.9071 13.1698 18.6416 13.9043 18.6416 14.807C18.6416 15.7097 17.9071 16.4442 17.0044 16.4442C16.1017 16.4442 15.3672 15.7097 15.3672 14.807C15.3672 13.9043 16.1017 13.1698 17.0044 13.1698Z" />
						<path d="M40.8073 13.5157H50.2741C51.18 13.5157 51.9147 12.781 51.9147 11.875C51.9147 10.9691 51.18 10.2344 50.2741 10.2344H40.8073C39.9014 10.2344 39.1667 10.9691 39.1667 11.875C39.1667 12.781 39.9012 13.5157 40.8073 13.5157Z" />
						<path d="M40.8073 19.3798H50.2741C51.18 19.3798 51.9147 18.6451 51.9147 17.7392C51.9147 16.8332 51.18 16.0986 50.2741 16.0986H40.8073C39.9014 16.0986 39.1667 16.8332 39.1667 17.7392C39.1667 18.6451 39.9012 19.3798 40.8073 19.3798Z" />
					</svg>
				</CategoryButton>
			</div>
			<div className={styles.sortBy}>
				<SortBy activeItem={sortActive} items={sortBy.map((item) => item)} setSort={setSortBy} />
			</div>
		</div>
	)
}
