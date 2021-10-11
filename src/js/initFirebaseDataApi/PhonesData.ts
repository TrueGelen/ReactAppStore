import { TPhoneData } from "../models/PhoneModel";
import { collection, addDoc } from "firebase/firestore";
import { forEach } from "lodash";
import { db } from "../firebaseConfig/fbConfig";
import { PHONES_COLLECTION_NAME_RU } from "../utils/constants/constants";

const phonesData_ru: Omit<TPhoneData, "id">[] = [
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 48",
		inStock: false,
		imagesPath: ["iPhone/iPhone48/front.png"],
		diagonal: 8,
		processor: "A11",
		os: "iOS",
		frontCamera: 125,
		mainCamera: 200,
		memory: {
			value: 128,
			measure: "Тб"
		},
		about: `Нет такого члена который придется за него отсосать!`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 8",
		inStock: true,
		rest: 20,
		price: 40000,
		imagesPath: ["iPhone/iPhone8/front.png", "iPhone/iPhone8/back.png"],
		diagonal: 4.7,
		processor: "A11",
		os: "iOS",
		frontCamera: 7,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Гб"
		},
		about: `4.7" Смартфон Apple iPhone 8 64 ГБ – отличное решение для поклонников бренда. Задняя панель устройства теперь выполнена из стекла. Оно закаленное, противостоит внешним воздействиям и появлению царапин. Цвет представленной модели – серый.
			Одна из особенностей – поддержка беспроводной зарядки. Теперь можно пополнять аккумулятор смартфона без применения кабеля. Есть функция быстрой зарядки, но необходимы дополнительные аксессуары.
			Apple iPhone 8 64 ГБ оснащается дисплеем с диагональю 4.7 дюйма. Разрешение 1334х750, качество экрана высокое, он отлично передает цвета. Дисплей может подстраиваться под особенности освещения, чтобы сделать изображение максимально насыщенным.
			Применяется процессор A11 Bionic. Он шестиядерный, тактовая частота – 2.5 ГГц. Графический ускоритель теперь собственной разработки Apple, что положительно сказалось на производительности.
			Камера на 12 Мп с диафрагмой ƒ/1.8. Она помогает получать прекрасные снимки в различных условиях. Удобное приложение позволяет комфортно взаимодействовать с камерой, устройство отлично подбирает параметры в автоматическом режиме, без вмешательства владельца.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone X",
		inStock: true,
		rest: 20,
		price: 50000,
		imagesPath: ["iPhone/iPhoneX/front.png", "iPhone/iPhoneX/back.png"],
		diagonal: 5.8,
		processor: "A11",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 256,
			measure: "Гб"
		},
		about: `Смартфон Apple iPhone X в корпусе цвета серого космоса изготовлен из стекла. Диагональ его безрамочного экрана 5.8 дюйма сочетается с разрешением 2436x1125 и плотностью пикселей 458 точек на дюйм. Это делает дисплей идеальным для просмотра видео, фотографий и любой другой графической информации.
			Высочайшая работоспособность модели базируется на процессоре Apple A11 Bionic, графическом ускорителе Apple GPU и оперативной памяти 3 ГБ. Для выполнения идеальных фото и селфи модель имеет две камеры разрешением 7 и 12+12 Мп, дополненных целым набором всевозможных опций и функций для оптимизации изображения, а также защитным сапфировым стеклом шестилинзового объектива. Для обеспечения конфиденциальности хранящихся в смартфоне Apple iPhone X данных в его конструкции предусмотрен сканер лица. Технологии бесконтактной оплаты Apple Pay и модуль NFC расширяют возможности устройства.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 7",
		inStock: true,
		rest: 30,
		price: 30000,
		imagesPath: ["iPhone/iPhone7/front.png", "iPhone/iPhone7/back.png"],
		diagonal: 4.5,
		processor: "A10",
		os: "iOS",
		frontCamera: 7,
		mainCamera: 12,
		memory: {
			value: ,
			measure: "Гб"
		},
		about: `Черный матовый смартфон Apple iPhone 7 хорош с любой точки зрения. Безупречные линии алюминиевого корпуса, 4.7-дюймовый экран с противоударным стеклом, защита от брызг и влаги. Взяв его в руки, становится ясно: это не только высокомощный смартфон со множеством полезных возможностей и интересных опций, это украшение вашего имиджа. Благодаря поддержке множества диапазонов частот в стандартах 3G и 4G(LTE) вам гарантирована кристально чистая связь и быстрый Интернет.
			Камера в 12 Мп с диафрагмой ƒ/1.8 и множеством полезных режимов съемки позволит вам ловить яркие моменты жизни в лучшем свете. Теперь вы можете легко снимать даже ночью. Одно нажатие на кнопку, и у вас готов высококачественный снимок в разрешении 4032x3024 пикселей или видеоролик в качестве Ultra HD 4K. Управлять Apple iPhone 7 максимально просто, ведь на нем установлена грамотно продуманная операционная система iOS 10. А за быстроту работы и загрузки файлов отвечает мощнейший процессор Apple A10 Fusion. Благодаря поддержке Bluetooth 4.2 и NFC меняться файлами проще простого. И не нужно беспокоиться о количестве свободного места в смартфоне, памяти в 32 ГБ хватит надолго.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 7 Plus",
		inStock: true,
		rest: 10,
		price: 35000,
		imagesPath: ["iPhone/iPhone7Plus/front.png", "iPhone/iPhone7Plus/back.png"],
		diagonal: 4.7,
		processor: "A10",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 32,
			measure: "Гб"
		},
		about: `Смартфон Apple iPhone 7 Plus в черном матовом корпусе выглядит очень стильно. Представленная модель объединила в себе все самые актуальные разработки популярного бренда. Диагональ экрана равна 5.5", он изготовлен по IPS-технологии. Высокое разрешение (1920x1080) и плотность пикселей 401 ppi обеспечивают качественную передачу миллионов оттенков.
			Удобство управления Apple iPhone 7 Plus обеспечивает ОС iOS. А за производительность отвечает 4-ядерный процессор, частота которого приравнивается к 2.3 ГГц. Предусмотрено 3 ГБ ОЗУ, а общий объем встроенной памяти равен 32 ГБ. Устройство оснащено 2 камерами высокого разрешения. Корпус смартфона произведен из металла, поэтому его довольно сложно повредить. Специальное покрытие экрана предотвращает появление на экране отпечатков и загрязнений.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 8 Plus",
		inStock: true,
		rest: 10,
		price: 45000,
		imagesPath: ["iPhone/iPhone8Plus/front.png", "iPhone/iPhone8Plus/back.png"],
		diagonal: 5,
		processor: "A11",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Гб"
		},
		about: `Apple iPhone 8 Plus 128 ГБ – стильный и действительно удобный в использовании аппарат. Для изготовления его корпуса применялись премиальные материалы – стекло и металл. Нанесенное олеофобное покрытие исключает появление следов от пальцев на дисплее и задней крышке устройства. Также стекло хорошо противостоит царапинам.
			Смартфон Apple iPhone 8 Plus 128 ГБ защищен от воды и пыли по стандарту IP67. Можете спокойно пользоваться им и не бояться намочить. Операционная система на устройстве – iOS. Она отличается стильным дизайном, высокой стабильностью, простым интерфейсом. Регулярно разработчик обновляет ОС и всячески улучшает ее.
			Мощный процессор A11 Bionic раскрывает широкие возможности. На смартфоне можно играть, пользоваться любыми необходимыми вам программами. Выполнен чип по техпроцессу 10 нм, он энергоэффективный, благодаря ему увеличивается время автономной работы.
			Смартфоны Apple всегда славились своей камерой. В этот аппарат установлен сдвоенный модуль 12+12 Мп. Вы сможете проводить съемку в различных условиях, получая прекрасные фотографии.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 6",
		inStock: true,
		rest: 5,
		price: 20000,
		imagesPath: ["iPhone/iPhone6/front.png", "iPhone/iPhone6/back.png"],
		diagonal: 4.3,
		processor: "A9",
		os: "iOS",
		frontCamera: 1.2,
		mainCamera: 8,
		memory: {
			value: 32,
			measure: "Гб"
		},
		about: `Смартфон Apple iPhone 6 – все, что вам необходимо для полноценных работы и отдыха с мобильным устройством. Изображение на 4.7-дюймовом экране порадует четкостью и максимально детализацией в разрешении 1334х750. Высокоскоростной доступ в Сеть обусловлен поддержкой 4G. А высокая производительность и оперативность исполнения пользовательских команд – результат работы 2-ядерного процессора с частотой и 1.4 ГГц. Запечатлевайте на камеру на 8 Мп все важные моменты, храните все фото и видео на 32 ГБ встроенной памяти. Смартфон Apple iPhone 6 – это металлический корпус, это ионо-закаленное стекло экрана, чтобы его презентабельный вид и работоспособность долгое время оставались на должном уровне.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 6 Plus",
		inStock: true,
		rest: 8,
		price: 40000,
		imagesPath: ["iPhone/iPhone6Plus/front.png", "iPhone/iPhone6Plus/back.png"],
		diagonal: 4.5,
		processor: "A9",
		os: "iOS",
		frontCamera: 1.2,
		mainCamera: 10,
		memory: {
			value: 64,
			measure: "Гб"
		},
		about: `Смартфон Apple iPhone 6 Plus – все, что вам необходимо для полноценных работы и отдыха с мобильным устройством. Изображение на 4.7-дюймовом экране порадует четкостью и максимально детализацией в разрешении 1334х750. Высокоскоростной доступ в Сеть обусловлен поддержкой 4G. А высокая производительность и оперативность исполнения пользовательских команд – результат работы 2-ядерного процессора с частотой и 1.4 ГГц. Запечатлевайте на камеру на 8 Мп все важные моменты, храните все фото и видео на 32 ГБ встроенной памяти. Смартфон Apple iPhone 6 – это металлический корпус, это ионо-закаленное стекло экрана, чтобы его презентабельный вид и работоспособность долгое время оставались на должном уровне.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S10",
		inStock: true,
		price: 60000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS10/front.png", "Samsung/GalaxyS10/back.png"],
		diagonal: 6.4,
		processor: "SD33",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 16,
		memory: {
			value: 128,
			measure: "Гб"
		},
		about: `Приятный тактильно, керамический корпус Samsung Galaxy S10+ Ceramic устойчив к царапинам – можно не бояться класть смартфон в сумку или карман вместе с ключами и другими металлическими предметами. Samsung Galaxy S10+ предлагает возможности, задающие высокий стандарт для смартфонов. Его функционал достигает немыслимых высот, вполне соперничая даже с профессиональным оборудованием. Вы можете смотреть фильмы на иммерсивном экране, делать профессиональные фотографии, снимать видео без дрожания камеры, будто бы снятые экшн-камерой, и без лишних забот пользоваться смартфоном целый день благодаря емкому аккумулятору.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S9",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS9/front.png", "Samsung/GalaxyS9/back.png"],
		diagonal: 6.2,
		processor: "SD30",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 14,
		memory: {
			value: 32,
			measure: "Гб"
		},
		about: `Samsung Galaxy  – смартфон с 6.2-дюймовым экраном. Технология изготовления дисплея – Super AMOLED, а разрешение достигает 2340x1080 пикселей. Воспроизведение картины получается детализированным и ярким, но при этом реалистичным.
			Выкладывайте в социальные сети и сохраняйте в альбом четкие насыщенные фотографии. Основная камера поможет запечатлеть свежие эмоции. Красивые селфи с друзьями и близкими получатся на фронтальную с 32 Мп. Для каждой съемки найдется свой подходящий режим. С объемом аккумулятора в 6000 мА*ч смартфон может работать без подзарядки до 48 ч. Восьмиядерный процессор Exynos 961 и оперативная память 6 ГБ позволят устройству плавно выполнять свои задачи. Вам не понадобится вводить и запоминать пароль. Сканер отпечатка пальца за секунду распознают владельца Samsung Galaxy  и разблокируют доступ.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S8",
		inStock: true,
		price: 40000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS8/front.png", "Samsung/GalaxyS8/back.png"],
		diagonal: 6,
		processor: "SD29",
		os: "iOS",
		frontCamera: 8,
		mainCamera: 12,
		memory: {
			value: 32,
			measure: "Гб"
		},
		about: `Смартфон Samsung Galaxy представляет собой совершенное мобильное устройство для общения, работы и отдыха. Он оснащен достаточно емким аккумулятором (3400 мА•ч) и высокоэффективным, 8-ядерным процессором Exynos 7 Series 7884 собственного производства. Быстродействие процессора дополняет оперативная память емкостью 2 ГБ. Благодаря этим составляющим на смартфоне можно запускать одновременно несколько программ или приложений, постоянно переключаясь между ними.
			Сохранять в смартфоне Samsung Galaxy коллекции любимых песен, фотографий или видео позволяет собственная память, рассчитанная на 32 ГБ. Увеличить ее позволит карта microSD до 512 ГБ. Безрамочный TFT-экран смартфона впечатляет яркой и детализированной картинкой. Любителям фотографий понравятся возможности двух камер: основной (13 Мп) и фронтальной (5 Мп). А выбрать подходящие тарифы для общения позволяет поддержка смартфоном одновременной работы 2 SIM-карт. Расширяют функционал смартфона модули Wi-Fi и Bluetooth.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S7",
		inStock: true,
		price: 30000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS7/front.png", "Samsung/GalaxyS7/back.png"],
		diagonal: 5.8,
		processor: "SD27",
		os: "iOS",
		frontCamera: 5,
		mainCamera: 10,
		memory: {
			value: 16,
			measure: "Гб"
		},
		about: `Смартфон Samsung Galaxy в черном пластиковом корпусе станет отличным выбором для любителя мобильных игр, стриминга видео и серфинга в интернете. Его безрамочный дисплей диагональю 5.7 дюйма обладает разрешением 1520x720 пикселей и соотношением сторон 19.5:9. Технология Dolby Atmos обеспечивает качественное звуковое сопровождение безупречному изображению на дисплее. Восьмиядерный процессор легко «разгоняется» с 1.45 до 1.95 ГГц, а графический ускоритель Adreno 505 и 2 ГБ оперативной памяти способствуют прохождению игр без «зависаний».
			Двойная основная камера с 8-кратным зумом делает фото с разрешением до 10 Мп. Встроенная память 16 ГБ рассчитана на хранение необходимых приложений, а для личных файлов можно задействовать накопитель объемом до 512 ГБ. Сканер лица гарантирует, что смартфоном Samsung Galaxy A01 не сможет воспользоваться никто, кроме владельца.`,
	},
	{
		__typename: "phone",
		manufacturer: "Huawei",
		model: "M9",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Huawei/huaweiM9/front.png", "Huawei/huaweiM9/back.png"],
		diagonal: 6.4,
		processor: "DD32",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 14,
		memory: {
			value: 128,
			measure: "Гб"
		},
		about: `Смартфон Huawei Lite 128 ГБ выпущен в корпусе коричневого цвета. В дизайне устройства нет ничего лишнего, оформление у него лаконичное. Изготовление корпуса аппарата происходит из высококачественного пластика. Полимерный материал прочный, он приятный на ощупь.
			Функционирует аппарат на ОС Android 8.1 Oreo. Поверх операционной системы производитель поставил собственную оболочку EMUI. Она меняет интерфейс, добавляет в него стильные элементы, полезные возможности для пользователей.
			Смартфон Huawei Lite 128 ГБ работает на процессоре MediaTek MT6739. В нем применяются четыре ядра с частотой 1.5 ГГц. Обработкой графики занимается ускоритель PowerVR GE8100.
			Оперативной памяти в устройстве – 1 ГБ, постоянной – 128 ГБ. Дополнительно можно поставить флеш-накопитель для расширения внутреннего хранилища. Смартфон поддерживает сети 4G. Владелец сможет пользоваться необходимыми онлайн-сервисами даже вдали от точек доступа Wi-Fi.`,
	},
	{
		__typename: "phone",
		manufacturer: "Huawei",
		model: "Nova2",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Huawei/huaweiNova2/front.png", "Huawei/huaweiNova2/back.png"],
		diagonal: 5,
		processor: "DD31",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Гб"
		},
		about: `Смартфон Huawei Nova в привлекательном фиолетовом корпусе из металла и стекла объединяет в себе самые прогрессивные и совершенные технологические решения. За счет 8-ядерного процессора HiSilicon Kirin 980, оперативной памяти размером 6 ГБ и графического ускорителя Mali-G76 MP10 устройство буквально «летает» при прохождении мобильных игр и эффективно работает сразу в нескольких приложениях без «зависаний». За сохранность информации владельца отвечает сканер отпечатков пальцев.
			Благодаря датчику бесконтактной оплаты Google Pay можно смело оставлять платежные карты дома и рассчитываться за покупки буквально в одно касание. За счет 128 ГБ встроенной памяти смартфона Huawei Nova внутри можно хранить огромное количество приложений и файлов.`,
	},
];

const phonesData_en: Omit<TPhoneData, "id">[] = [
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 48",
		inStock: false,
		imagesPath: ["iPhone/iPhone48/front.png"],
		diagonal: 8,
		processor: "A11",
		os: "iOS",
		frontCamera: 125,
		mainCamera: 200,
		memory: {
			value: 128,
			measure: "Tb"
		},
		about: `There is no such dick that you have to suck for him!`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 8",
		inStock: true,
		rest: 20,
		price: 40000,
		imagesPath: ["iPhone/iPhone8/front.png", "iPhone/iPhone8/back.png"],
		diagonal: 4.7,
		processor: "A11",
		os: "iOS",
		frontCamera: 7,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Gb"
		},
		about: `4.7" Apple iPhone 8 64 GB smartphone is a great solution for fans of the brand. The back panel of the device is now made of glass. It is hardened, resists external influences and the appearance of scratches. The color of the presented model is gray.
		One of the features is support for wireless charging. Now you can recharge your smartphone battery without using a cable. There is a fast charging function, but additional accessories are needed.
		Apple iPhone 8 64 GB is equipped with a display with a diagonal of 4.7 inches. The resolution is 1334x750, the screen quality is high, it perfectly transmits colors. The display can adjust to the lighting features to make the image as saturated as possible.
		The A11 Bionic processor is used. It is six-core, the clock frequency is 2.5 GHz. The graphics accelerator is now Apple's own design, which has had a positive impact on performance.
		A 12 MP camera with an aperture of 1/8. It helps to get great pictures in various conditions. The convenient application allows you to interact comfortably with the camera, the device perfectly selects parameters in automatic mode, without the intervention of the owner.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone X",
		inStock: true,
		rest: 20,
		price: 50000,
		imagesPath: ["iPhone/iPhoneX/front.png", "iPhone/iPhoneX/back.png"],
		diagonal: 5.8,
		processor: "A11",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 256,
			measure: "Gb"
		},
		about: `The Apple iPhone X smartphone in a space gray case is made of glass. The diagonal of its frameless screen of 5.8 inches is combined with a resolution of 2436x1125 and a pixel density of 458 dots per inch. This makes the display ideal for viewing videos, photos and any other graphic information.
		The highest performance of the model is based on the Apple A11 Bionic processor, the Apple GPU graphics accelerator and 3 GB RAM. To make perfect photos and selfies, the model has two cameras with a resolution of 7 and 12 +12 MP, complemented by a whole set of various options and functions for image optimization, as well as a protective sapphire crystal of a six-lens lens. To ensure the confidentiality of the data stored in the Apple iPhone X smartphone, a face scanner is provided in its design. Apple Pay contactless payment technologies and NFC module expand the capabilities of the device.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 7",
		inStock: true,
		rest: 30,
		price: 30000,
		imagesPath: ["iPhone/iPhone7/front.png", "iPhone/iPhone7/back.png"],
		diagonal: 4.5,
		processor: "A10",
		os: "iOS",
		frontCamera: 7,
		mainCamera: 12,
		memory: {
			value: ,
			measure: "Gb"
		},
		about: `The black matte Apple iPhone 7 smartphone is good from any point of view. Flawless lines of the aluminum case, 4.7-inch screen with shockproof glass, splash and moisture protection. Taking it in hand, it becomes clear: this is not only a high-power smartphone with many useful features and interesting options, it is an ornament to your image. Thanks to the support of many frequency bands in 3G and 4G (LTE) standards, you are guaranteed crystal clear communication and fast Internet.
		A 12 MP camera with a 1.8mm aperture and a variety of useful shooting modes will allow you to catch the bright moments of life in the best light. Now you can easily shoot even at night. One click on the button, and you have a high-quality picture in a resolution of 4032x3024 pixels or a video clip in Ultra HD 4K quality. Managing the Apple iPhone 7 is as simple as possible, because it has a well-thought-out iOS 10 operating system installed on it. And the most powerful Apple A10 Fusion processor is responsible for the speed of work and downloading files. Thanks to Bluetooth 4.2 and NFC support, it's easy to exchange files. And you don't need to worry about the amount of free space in your smartphone, 32 GB of memory will last for a long time.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 7 Plus",
		inStock: true,
		rest: 10,
		price: 35000,
		imagesPath: ["iPhone/iPhone7Plus/front.png", "iPhone/iPhone7Plus/back.png"],
		diagonal: 4.7,
		processor: "A10",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 32,
			measure: "Gb"
		},
		about: `The Apple iPhone 7 Plus smartphone in a black matte case looks very stylish. The presented model combines all the most current developments of the popular brand. The diagonal of the screen is 5.5", it is made using IPS technology. High resolution (1920x1080) and pixel density of 401 ppi provide high-quality transmission of millions of shades.
		The convenience of managing the Apple iPhone 7 Plus is provided by iOS. And a 4-core processor is responsible for performance, the frequency of which is equal to 2.3 GHz. 3 GB of RAM is provided, and the total amount of internal memory is 32 GB. The device is equipped with 2 high-resolution cameras. The smartphone case is made of metal, so it is quite difficult to damage it. A special screen coating prevents fingerprints and dirt from appearing on the screen.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 8 Plus",
		inStock: true,
		rest: 10,
		price: 45000,
		imagesPath: ["iPhone/iPhone8Plus/front.png", "iPhone/iPhone8Plus/back.png"],
		diagonal: 5,
		processor: "A11",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Gb"
		},
		about: `Apple iPhone 8 Plus 128 GB is a stylish and really easy-to-use device. Premium materials – glass and metal - were used to manufacture its body. The applied oleophobic coating eliminates the appearance of finger marks on the display and the back cover of the device. Also, the glass resists scratches well.
		The Apple iPhone 8 Plus 128 GB smartphone is protected from water and dust according to the IP67 standard. You can safely use it and not be afraid to get wet. The operating system on the device is iOS. It has a stylish design, high stability, simple interface. The developer regularly updates the OS and improves it in every possible way.
		The powerful A11 Bionic processor opens up wide possibilities. You can play on your smartphone, use any programs you need. The chip is made according to the 10 nm process technology, it is energy efficient, thanks to it the battery life increases.
		Apple smartphones have always been famous for their camera. A dual module of 12+12 Mp is installed in this unit. You will be able to shoot in various conditions, getting beautiful photos.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 6",
		inStock: true,
		rest: 5,
		price: 20000,
		imagesPath: ["iPhone/iPhone6/front.png", "iPhone/iPhone6/back.png"],
		diagonal: 4.3,
		processor: "A9",
		os: "iOS",
		frontCamera: 1.2,
		mainCamera: 8,
		memory: {
			value: 32,
			measure: "Gb"
		},
		about: `The Apple iPhone 6 smartphone is everything you need for full-fledged work and leisure with a mobile device. The image on the 4.7-inch screen will please with clarity and maximum detail in a resolution of 1334x750. High-speed access to the Network is due to 4G support. And the high performance and efficiency of execution of user commands is the result of the work of a 2-core processor with a frequency of 1.4 GHz. Capture all important moments on an 8 MP camera, store all photos and videos on 32 GB of internal memory. The Apple iPhone 6 smartphone is a metal case, it is an ion-tempered glass screen, so that its presentable appearance and performance remain at the proper level for a long time.`,
	},
	{
		__typename: "phone",
		manufacturer: "Apple",
		model: "Iphone 6 Plus",
		inStock: true,
		rest: 8,
		price: 40000,
		imagesPath: ["iPhone/iPhone6Plus/front.png", "iPhone/iPhone6Plus/back.png"],
		diagonal: 4.5,
		processor: "A9",
		os: "iOS",
		frontCamera: 1.2,
		mainCamera: 10,
		memory: {
			value: 64,
			measure: "Gb"
		},
		about: `The Apple iPhone 6 Plus smartphone is everything you need for full-fledged work and leisure with a mobile device. The image on the 4.7-inch screen will please with clarity and maximum detail in a resolution of 1334x750. High-speed access to the Network is due to 4G support. And the high performance and efficiency of execution of user commands is the result of the work of a 2-core processor with a frequency of 1.4 GHz. Capture all important moments on an 8 MP camera, store all photos and videos on 32 GB of internal memory. The Apple iPhone 6 smartphone is a metal case, it is an ion-tempered glass screen, so that its presentable appearance and performance remain at the proper level for a long time.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S10",
		inStock: true,
		price: 60000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS10/front.png", "Samsung/GalaxyS10/back.png"],
		diagonal: 6.4,
		processor: "SD33",
		os: "iOS",
		frontCamera: 12,
		mainCamera: 16,
		memory: {
			value: 128,
			measure: "Gb"
		},
		about: `Pleasant tactile, the ceramic case of Samsung Galaxy S10+ Ceramic is scratch-resistant – you don't have to be afraid to put your smartphone in a bag or pocket along with keys and other metal objects. Samsung Galaxy S10+ offers features that set a high standard for smartphones. Its functionality reaches unimaginable heights, quite competing even with professional equipment. You can watch movies on an immersive screen, take professional photos, shoot videos without shaking the camera, as if shot with an action camera, and use your smartphone all day without unnecessary worries thanks to a capacious battery.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S9",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS9/front.png", "Samsung/GalaxyS9/back.png"],
		diagonal: 6.2,
		processor: "SD30",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 14,
		memory: {
			value: 32,
			measure: "Gb"
		},
		about: `Samsung Galaxy is a smartphone with a 6.2-inch screen. The manufacturing technology of the display is Super AMOLED, and the resolution reaches 2340 x 1080 pixels. The reproduction of the picture turns out to be detailed and bright, but at the same time realistic.
		Upload to social networks and save clear, rich photos to the album. The main camera will help capture fresh emotions. Beautiful selfies with friends and family will turn out on the front with 32 MP. There is a suitable mode for each shooting. With a battery capacity of 6000 mAh, the smartphone can work without recharging for up to 48 hours. The Exynos 961 octa-core processor and 6 GB RAM will allow the device to smoothly perform its tasks. You will not need to enter and remember the password. The fingerprint scanner recognizes the owner of the Samsung Galaxy in a second and unlocks access.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S8",
		inStock: true,
		price: 40000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS8/front.png", "Samsung/GalaxyS8/back.png"],
		diagonal: 6,
		processor: "SD29",
		os: "iOS",
		frontCamera: 8,
		mainCamera: 12,
		memory: {
			value: 32,
			measure: "Gb"
		},
		about: `The Samsung Galaxy smartphone is a perfect mobile device for communication, work and leisure. It is equipped with a sufficiently capacious battery (3400 mAh• and a highly efficient, 8-core Exynos 7 Series 7884 processor of its own production. Processor performance is complemented by RAM with a capacity of 2 GB. Thanks to these components, you can run several programs or applications simultaneously on your smartphone, constantly switching between them.
			You can save collections of your favorite songs, photos or videos in your Samsung Galaxy smartphone with your own 32 GB memory. The microSD card will allow you to increase it up to 512 GB. The frameless TFT-screen of the smartphone impresses with a bright and detailed picture. Photo lovers will love the capabilities of two cameras: the main (13 MP) and the front (5 MP). And the smartphone's support for simultaneous operation of 2 SIM cards allows you to choose the appropriate tariffs for communication. Wi-Fi and Bluetooth modules expand the functionality of the smartphone.`,
	},
	{
		__typename: "phone",
		manufacturer: "Samsung",
		model: "Galaxy S7",
		inStock: true,
		price: 30000,
		rest: 30,
		imagesPath: ["Samsung/GalaxyS7/front.png", "Samsung/GalaxyS7/back.png"],
		diagonal: 5.8,
		processor: "SD27",
		os: "iOS",
		frontCamera: 5,
		mainCamera: 10,
		memory: {
			value: 16,
			measure: "Gb"
		},
		about: `A Samsung Galaxy smartphone in a black plastic case will be an excellent choice for a lover of mobile games, video streaming and surfing the Internet. Its frameless 5.7-inch display has a resolution of 1520x720 pixels and an aspect ratio of 19.5:9. Dolby Atmos technology provides high-quality sound to the flawless image on the display. The octa-core processor easily "accelerates" from 1.45 to 1.95 GHz, and the Adreno 505 graphics accelerator and 2 GB of RAM contribute to the passage of games without "freezes".
		The dual main camera with 8x zoom takes photos with a resolution of up to 10 MP. The built-in memory of 16 GB is designed to store the necessary applications, and for personal files you can use a drive of up to 512 GB. The face scanner guarantees that no one but the owner will be able to use the Samsung Galaxy A01 smartphone.`,
	},
	{
		__typename: "phone",
		manufacturer: "Huawei",
		model: "M9",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Huawei/huaweiM9/front.png", "Huawei/huaweiM9/back.png"],
		diagonal: 6.4,
		processor: "DD32",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 14,
		memory: {
			value: 128,
			measure: "Gb"
		},
		about: `The Huawei Lite 128 GB smartphone is released in a brown case. There is nothing superfluous in the design of the device, its design is concise. The manufacture of the device body is made of high-quality plastic. The polymer material is durable, it is pleasant to the touch.
		The device operates on Android 8.1 Oreo OS. On top of the operating system, the manufacturer has installed its own EMUI shell. It changes the interface, adds stylish elements to it, useful features for users.
		The Huawei Lite 128 GB smartphone runs on a MediaTek MT6739 processor. It uses four cores with a frequency of 1.5 GHz. Graphics processing is handled by the PowerVR GE8100 accelerator.
		RAM in the device is 1 GB, permanent - 128 GB. Additionally, you can put a flash drive to expand the internal storage. The smartphone supports 4G networks. The owner will be able to use the necessary online services even away from Wi-Fi access points.`,
	},
	{
		__typename: "phone",
		manufacturer: "Huawei",
		model: "Nova2",
		inStock: true,
		price: 50000,
		rest: 30,
		imagesPath: ["Huawei/huaweiNova2/front.png", "Huawei/huaweiNova2/back.png"],
		diagonal: 5,
		processor: "DD31",
		os: "iOS",
		frontCamera: 10,
		mainCamera: 12,
		memory: {
			value: 128,
			measure: "Gb"
		},
		about: `Huawei Nova smartphone in an attractive purple metal and glass case combines the most advanced and advanced technological solutions. Due to the 8-core HiSilicon Kirin 980 processor, 6 GB RAM and the Mali-G76 MP10 graphics accelerator, the device literally "flies" when playing mobile games and works effectively in several applications at once without "freezes". The fingerprint scanner is responsible for the safety of the owner's information.
		Thanks to the Google Play contactless payment sensor, you can safely leave payment cards at home and pay for purchases literally with one touch. Due to the 128 GB of internal memory of the Huawei Nova smartphone, a huge number of applications and files can be stored inside.`,
	},
];

export const addPhonesToServer = () => {
	forEach(phonesData_ru, product => {
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, PHONES_COLLECTION_NAME_RU), product);
		console.log("Document written with ID: ", docRef.id);
	})

	forEach(phonesData_en, product => {
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, PHONES_COLLECTION_NAME_RU), product);
		console.log("Document written with ID: ", docRef.id);
	})
}
