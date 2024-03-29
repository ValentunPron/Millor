import React from "react";

import { Link, useLocation } from "react-router-dom";
import { Footer, Header, CategoryButton, NewsItem, Spoiler, HowCooking } from "../../component";

import filterImage01 from '../../assets/image/Cooking/01.jpg';
import filterImage02 from '../../assets/image/Cooking/02.jpg';
import filterImage03 from '../../assets/image/Cooking/03.jpg';
import filterImage04 from '../../assets/image/Cooking/04.jpg';
import filterImage05 from '../../assets/image/Cooking/05.jpg';
import newsImage from '../../assets/image/News/01.jpg'
import styles from "./Blog.module.scss";
import { HashLink } from "react-router-hash-link";

interface newsListInterface {
	name: string,
	desc: string,
	image: string,
	author: string
}

const newsList: newsListInterface[] = [
	{
		name: 'Танзанійська кава. Звідки він узявся і чому ми його так любимо?',
		desc: "Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія. <span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою",
		image: newsImage,
		author: 'Іван Петренко',
	},
	{
		name: 'Танзанійська кава. Звідки він узявся і чому ми його так любимо?',
		desc: "Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія. <span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою",
		image: newsImage,
		author: 'Іван Петренко',
	},
	{
		name: 'Танзанійська кава. Звідки він узявся і чому ми його так любимо?',
		desc: "Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія. <span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою",
		image: newsImage,
		author: 'Іван Петренко',
	},
	{
		name: 'Танзанійська кава. Звідки він узявся і чому ми його так любимо?',
		desc: "Танзанія – найкрасивіша африканська країна. Саме тут розташовані легендарні географічні об'єкти – вулкан Кіліманджаро та озеро Вікторія. <span /> Але наш інтерес викликаний не стільки природною красою, скільки кавою",
		image: newsImage,
		author: 'Іван Петренко',
	}
]

export const Blog = () => {

	React.useEffect(() => {
		window.scroll(0, 0);
	}, [])

	return (
		<>
			<Header headerActive={true} />
			<div className={styles.blog}>
				<div className="container">
					<div className={styles.blogBody}>
						<div className='catalogLinks'>
							<Link className='catalogLink black' to="/">Головна</Link>
							<Link className='catalogLink black' to="/blog">Блог</Link>
						</div>
						<div className={styles.blogScroll}>
							<HashLink className={`${styles.scrollButton} buttonTransition`} smooth to='/blog#blogCooking'>Навчання</HashLink>
							<HashLink className={`${styles.scrollButton} buttonTransition`} smooth to='/blog#blogNews'>Новини</HashLink>
							<HashLink className={`${styles.scrollButton} buttonTransition`} smooth to='/blog#blogSpoiler'>Популярні питання</HashLink>
						</div>
						<div className={styles.blogHowCooking} id="blogCooking">
							<h2 className="title titleMiddle">Приготування кави різними способами</h2>
							<HowCooking />
							<ul className={styles.howCookingList}>
								<li className={styles.howCookingItem} id="turka">
									<h2 className="title titleMiddle">Як зварити каву в турці:</h2>
									<p className={styles.howCookingText}>
										Кава в турці – це віддача від усіх крупинок кави для створення ідеального напою.
										<span /> Кожне приготування кави в турці поділяється на три етапи: Вибір кави, приготування та своєчасне зняття турки з плити при піднятті пінки (креми).
										<span /> Як вибрати каву для турки:
										<span /> Для турки – найкраще підходить кава середньої обсмажування. В інтернет-магазині Millor майже вся кава середньої обсмажування, крім сортів для фільтра та Dark Side.
										<span /> Чому потрібна кава середньої обсмажування:
										Темна обсмажування кави – надасть палений смак кави. Зерно не зможе розкрити свій смаковий профіль і у смаку буде лише класична гіркота кави, що теж непогано, якщо ви любите італійську каву.
										<span /> Світла обсмажування кави – може надати смаку надмірної кислотності, що не зовсім відповідає очікуванням приготування кави в турці.
										<span /> Оптимальним варіантом є середня обсмажування кави Millor. Зерно зможе передати свої смакові профілі та розкритися у вашому напої.
										<span /> Беремо каву середньої обсмажування і робимо дрібний помел (пил). Чому пил? Тому що чим дрібнішим буде помел кави – тим сильнішою буде екстракція напою. Краще молоти свіжообсмажену каву. Чим довше кава стоїть на полиці або відкритою у вас у шафі – тим менш насиченою яскравою вона стає. Кількість меленої в пилюку кави залежить від вашої турки. Якщо обсяг турки становить 200 мл, то вам потрібно буде 15 гр. кава. Як розрахувати цю пропорцію: Заявлений об'єм турки 250 мл. - отже води краще наливати на 50 мл. менше обсягу. Мелену каву багато хто радить засипати 1 до 10 (ідеальні пропорції).
										<span /> Тобто на 200 мл. води 20 гр. Кава, але наша компанія вважає, що краще спиратися на свої смакові рецептори та підібрати для себе унікальні пропорції. Воду для приготування кави використовуємо холодну фільтровану. Важливо, щоб вода не містила хлор або луг, це може мати згубну дію на напій. Оптимальна кислотність води 6,7-7,0 Ph.
										<span /> Засипаємо мелену каву в турку, при необхідності додаємо спеції та цукор, заливаємо холодну воду до моменту звуження шийки. Це необхідно для підняття пінки (крему). Багато любителів кави зі спеціями, прогрівають спеції заздалегідь у турці, що дозволяє сильніше виділити смак спецій у каві. Ви можете урізноманітнити свій напій, оскільки вам подобається. В інтернеті багато рецептів кави в турці зі спеціями. Є й інший шлях урізноманітнити ваш щоденний кухоль кави – це пробувати різні сорти Millor з нашого магазину. Кожен сорт надасть свій унікальний смаковий відтінок. Згодом ви складете свій список улюблених сортів Millor.
										Бажано відразу не розмішувати каву, а зробити це через хвилину після початку заварювання, щоб кава сильніше дало екстракцію.
										<span /> Намагайтеся регулювати температуру плити або вогню, вона повинна бути мінімальною, щоб кава краще заварилася. Краще бути поруч із плитою, щоб вчасно зняти турку з плити.
										Коли вода стане потрібної температури, то пінка (крема) почне підніматися і потрібно відразу зняти турку з плити. Після цього можна перелити каву в попередньо прогріту чашку та дати настоятися ще дві хвилини. Тим самим ви отримаєте завершену екстракцію у чашці кави.
										<span /> Наша компанія радить використовувати мідні турки з внутрішнім посрібленням. Така турка додасть напою рівномірного нагрівання та приготує збалансований напій.
									</p>
									<img className={styles.howCookingImage} src={filterImage01} alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='french'>
									<h2 className="title titleMiddle">Як зварити каву у френч-пресі:</h2>
									<p className={styles.howCookingText}>
										Заварюємо каву у френч-пресі
										Френч-прес – кухонний атрибут, який має майже кожен будинок. Френч-прес підходить для заварювання чаю, трав і також може бути використаний для приготування чудової кави в домашніх умовах.
										Для приготування кави за допомогою френч-пресу нам знадобиться: свіжа кава марки Millor, жорна кавомолка (щоб зробити помел) та фільтрована питна вода.
										Помел для приготування кави має бути великою (розміром із цукровий пісок або велику морську сіль). Кількість меленої кави коливається в залежності від ваших смаків та розмірів френч-пресу. Вироблені норми приготування кави 60 гр. зерна на 1 літр води. Тобто стандартний розмір френч-пресу 350 мл. вам знадобиться 21 грам кави. Для вимірювання радимо користуватися або мірною ложкою або вагами.
										<span /> Заповніть кавоварку водою та нагрійте її до 90°C. Температура води важлива, щоб уникнути гіркоти чи недостатньої витримки смаку.
										<span /> Очистіть френч-прес. Це можна зробити, промиваючи його водою або навіть використовуючи спеціальний порошок, що чистить. Насипте каву у френч-прес. Рекомендується використовувати 20 г кави на 200 мл води.
										<span /> Розподіліть каву рівним шаром у френч-пресі і прилеглим до дна. Це допоможе рівномірно розчинити каву та уникнути нерівномірного витримування. Додайте воду на каву і дайте їй увібратися на 30 секунд. Це називається збиванням і дозволяє кавовим зернам розчинитись.
										<span /> Натисніть платформу вниз, щоб стиснути каву. Це допоможе отримати всі смаки та аромати з кави
									</p>
									<img className={styles.howCookingImage} src={filterImage02} alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='maka'>
									<h2 className="title titleMiddle">Як зварити каву в маці:</h2>
									<p className={styles.howCookingText}>
										Візьміть макей, промийте холодною водою. Залийте у маку воду до бажаного рівня. Викладіть у маку бажану кількість кавових зерен.
										Поставте макей на вогонь і доведіть воду до кипіння. Знизьте вогонь і доведіть каву до завершення варіння. Видаліть макей з вогню та дайте каві трохи перестати кипіти. Перелийте каву в чашку та насолоджуйтесь готовим напоєм.
									</p>
									<img className={styles.howCookingImage} src={filterImage03} alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='ecspreso'>
									<h2 className="title titleMiddle">Як зварити каву в еспресо:</h2>
									<p className={styles.howCookingText}>
										Наберіть необхідну кількість води та нагрійте її до 90-95°C. Висока температура води важлива, щоб отримати насичений смак та аромат кави. Промити еспресо машину, щоб очистити її та видалити будь-які залишки попередніх приготувань.
										<span /> Насипте свіжомелену каву в дозатор, приблизно 7 г на кожні 30 мл води. Запакуйте каву в дозаторі, використовуючи тиск рук або кавову лопатку. Це допоможе отримати рівномірний тарілчастий шар та підвищити якість кави. Виставте дозатор в еспресо машину та налийте гарячу воду на каву. Увімкніть еспресо машину і дочекайтеся, доки не закінчиться процес приготування. Зазвичай це займає від 20 до 30 секунд. Залийте готовий еспресо у чашку
									</p>
									<img className={styles.howCookingImage} src={filterImage04} alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='voronka'>
									<h2 className="title titleMiddle">Як зварити каву у воронці:</h2>
									<p className={styles.howCookingText}>
										Приготування кави у вирві займає 3-5 хвилин. Вам знадобиться: лійка, фільтр, кавомолка, 27 г кави та вода температурою 92-95°С. Намалюємо необхідну кількість кави. Помел має бути великий, більше цукру. Частинки розміром із морську сіль. Якщо у вас немає терезів – у столовій ложці «з гіркою» приблизно 9 г кави. Для приготування 500 мл кави у вирві знадобляться 3 столові ложки меленої кави «з гіркою». Ставимо вирву на сервер або будь-яку іншу ємність, яка підійде за обсягом та діаметром шийки.
										<span />Встановлюємо фільтр у вирву. Наливаємо трохи гарячої води, щоб змочити фільтр і прогріти вирву з сервером – так заварювання буде «рівніше», а кава не почне миттєво остигати, доторкнувшись до холодних поверхонь. Зливаємо цю воду. Засипаємо весь обсяг кави у вирву. Поступово розподіляємо всередині. Змочуючи всю поверхню, заливаємо круговими рухами 50 мл води і чекаємо, поки вона пройде через каву. Чекаємо 30 секунд, доливаємо ще 150 мл і знову робимо паузу на півхвилини. Потім доливаємо всю воду, що залишилася - ще 300 мл. Чекаємо, доки останні краплі напою пройдуть через каву. Забираємо фільтр та лійку. Збовтуємо сервер із готовою кавою. Наливаємо у чашку.
									</p>
									<img className={styles.howCookingImage} src={filterImage05} alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='airPress'>
									<h2 className="title titleMiddle">Как сварить кофе в аэропресс:</h2>
									<p className={styles.howCookingText}>
										Помел для аеропресу – середній. Приблизно для пуровера. Оптимальна закладка кави для аеропресу – 18 грам. На відміну від інших методів приготування, в аеропресі використовують більше кави по відношенню до води: близько 70 г на 1 літр. Але це не означає, що завжди потрібно використовувати саме стільки кави. Ми рекомендуємо ставитись до цього як до орієнтира і регулювати пропорції залежно від смаку.
										<span /> Оптимальна температура для приготування кави в аеропресі - 90 ° С. Щоб отримати таку температуру, потрібно закип'ятити воду, а потім остудити її протягом півтори хвилини з відкритою кришкою.
										<span /> Вибір температури також залежить від ступеня обсмажування кави - чим темніша кава, тим нижче потрібна температура. А також від часу заварювання чим менше час заварювання, тим вище слід вибирати температуру заварювання. При цьому винахідник аеропресу рекомендує використовувати воду із температурою 80°С. Однак, мало хто слідує цій рекомендації і найчастіше використовують воду з температурою 90°С.
										<span /> Перед встановленням сітки з паперовим фільтром в аеропрес потрібно пролити через фільтр трохи гарячої води, щоб позбавитися можливого присмаку паперу.
										<span /> Потім потрібно засипати мелену каву в аеропрес. Ми рекомендуємо вливати воду у два етапи для більш повної екстракції кави. Спочатку потрібно влити третину всього обсягу води по відношенню до кави. Тобто на 18 г кави можна взяти 50-60 мл води і почекати 30 секунд. Потім залити воду, що залишилася.
										<span /> Якщо загальний обсяг води дорівнює 180 мл, то потрібно влити залишок - 120-130 мл води і встановити поршень зверху на місце, але зробити невеликий зворотний рух, щоб вода не протікала через фільтр вниз. У такому положенні аеропрес потрібно залишити ще на 40 секунд. Після заварювання потрібно зняти поршень, перемішати каву, встановити поршень назад і з постійним тиском плавно опускати його протягом 20-30 секунд. Не рекомендується продавлювати поршнем воду до самого кінця, оскільки є ймовірність попадання в напій більшої кількості дрібних частинок, що призведе до продовження екстракції напою вже в чашці або чайнику для сервіровки.
									</p>
									<img className={styles.howCookingImage} src='https://images4.alphacoders.com/100/1001474.jpg' alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='caska'>
									<h2 className="title titleMiddle">Як зварити каву в чашці:</h2>
									<p className={styles.howCookingText}>
										Заварювати каву в кухлі – це один із найзручніших і найкомфортніших способів заварювання кави. Кухоль завжди під рукою, якщо знайти кавомолку і каву, то можна приготувати напій ідеального смаку і пропорцій.
										<span /> Найголовніше правило приготування будь-якого напою - слідувати інструкції. Для заварювання кави вона проста: засипали каву, залили, перемішали, дали настоятися, повторно перемішали та насолоджуємося напоєм.
										<span /> Вибираючи чашку для кави зверніть увагу на товщину стінок чашки та на висоту. Товщина стін довше збереже тепло вашого напою, висота не дасть кавовій гущі завадити вам насолоджуватися напоєм.
										<span /> Помел краще робити свіжообсмажену каву. Це дозволить розкрити яскравіше всі смакові характеристики заявленого сорту кави. Ступінь помелу для кухля – середня. Бажано, щоб частки кави були однакового розміру для заварювання рівномірного напою.
										<span /> Для приготування 200 мл кави потрібно 12 гр. меленої кави. Пропорція розраховується з 60 гр. на 1000 мл. Якщо під рукою немає терезів, можна розрахувати з чайних ложок. Зазвичай у чайну ложку міститься 4 гр. меленої кави з гіркою. Значить потрібно 3 чайні ложки. На смак можна підвищувати до 4.
										<span /> Краще для приготування використовувати бутильовану питну воду, у якої ph буде близько 7. Вода повинна бути 93-95 ℃. Для отримання потрібної температури в домашніх умовах дайте охолонути чайнику після 2 хвилини закипання. Заливаємо каву в кухоль непририваючи струмінь, щоб температура була однакова. Потім перемішуємо каву та залишаємо заварюватися 4-5 хв. Можна також попередньо прогріти чашку.
										<span /> Коли минуло 4 хв. ще раз актвино перемішуємо каву, чекаємо поки частки кави осядуть і починаємо пити. Якщо кухоль залишився стояти довго, то кава продовжить ексрагуватися, що додасть напою сильну гіркоту. Багато хто вважає за краще прибирати спливаючі частки кави з напою, щоб вони не потрапляли в рот. Великі частинки, які піднялися на поверхню, краще прибрати каву, вже перед вживанням кави.
										<span /> Якщо надаєте перевагу каві з цукром або корицею, то краще додавати цукор і корицю на 4 хв. заварювання напою, завдяки цьому вдасться поєднати смак кави та необхідні добавки.
										<span /> Для зниження гіркоти купленої кави, можна використовувати кухоль з широкими краями або покласти в каву пару льодів, щоб охолодити каву і сповільнити екстракцію.
										Існує багато способів приготування кави в кухлі. Експерементуючи з різними сортами Millor, ви можете вибрати свій унікальний спосіб заварювання кави.
									</p>
									<img className={styles.howCookingImage} src='https://wallpapersmug.com/download/3840x2160/9f259b/coffee-cup-beans.jpg' alt="wrapper coffee" />
								</li>
								<li className={styles.howCookingItem} id='avtomat'>
									<h2 className="title titleMiddle">Як зварити каву в автоматі:</h2>
									<p className={styles.howCookingText}>
										Заповніть водонагрівач водою до потрібної позначки. Помістіть фільтр і засипте в нього каву. Натисніть кнопку варіння кави. Дочекайтеся завершення процесу варіння.
									</p>
									<img className={styles.howCookingImage} src='https://i.pinimg.com/originals/95/66/3f/95663f10d4647758d559f2e87e9f3065.jpg' alt="wrapper coffee" />
								</li>
							</ul>
						</div>
						<div className={styles.blogNews} id="blogNews">
							<div className={styles.newsTop}>
								<h2 className="title titleMiddle">Новони <span>компанії</span>:</h2>
							</div>
							<div className={styles.newsMain}>
								<div className={styles.newsMainList}>
									{
										newsList.map((obj: newsListInterface, index: number) => <NewsItem key={`${index}_${obj.name}`} {...obj} />)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.blogQuestion} id="blogSpoiler">
					<div className="container">
						<div className={styles.question}>
							<h2 className="title titleMiddle">Популярні питання:</h2>
							<div className={styles.questionSpoiler}>
								<Spoiler />
								<Spoiler />
								<Spoiler />
								<Spoiler />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer bgInfo='mainPages' />
		</>
	);
}