import firebase from '../firebaseConfig/fbConfig'

//addPhones()
// addTelevisions()
// addTablets()

function addPhones() {
  console.log('addPhones was called')

  let phones = [
    {//1
      title: 'Iphone 8',
      price: 40000,
      rest: 20,
      description: {
        diagonal: "4.7",
        camera: "12",
        processor: "A11"
      },
      imgs: ['iPhone/iPhone8/front.webp', 'iPhone/iPhone8/back.webp']
    },
    {//2
      title: 'Iphone X',
      price: 50000,
      rest: 20,
      description: {
        diagonal: "5.8",
        camera: "12",
        processor: "A11"
      },
      imgs: ['iPhone/iPhoneX/front.webp', 'iPhone/iPhoneX/back.webp']
    },
    {//3
      title: 'Iphone 7',
      price: 30000,
      rest: 30,
      description: {
        diagonal: "4.5",
        camera: "10",
        processor: "A10"
      },
      imgs: ['iPhone/iPhone7/front.webp', 'iPhone/iPhone7/back.webp']
    },
    {//4
      title: 'Iphone 7 Plus',
      price: 35000,
      rest: 10,
      description: {
        diagonal: "4.7",
        camera: "12",
        processor: "A10"
      },
      imgs: ['iPhone/iPhone7Plus/front.webp', 'iPhone/iPhone7Plus/back.webp']
    },
    {//5
      title: 'Iphone 8 Plus',
      price: 45000,
      rest: 10,
      description: {
        diagonal: "5",
        camera: "11",
        processor: "A11"
      },
      imgs: ['iPhone/iPhone8Plus/front.webp', 'iPhone/iPhone8Plus/back.webp']
    },
    {//6
      title: 'Iphone 6',
      price: 20000,
      rest: 5,
      description: {
        diagonal: "4.3",
        camera: "8",
        processor: "A9"
      },
      imgs: ['iPhone/iPhone6/front.webp', 'iPhone/iPhone6/back.webp']
    },
    {//7
      title: 'Iphone 6 Plus',
      price: 40000,
      rest: 8,
      description: {
        diagonal: "4.5",
        camera: "10",
        processor: "A9"
      },
      imgs: ['iPhone/iPhone6Plus/front.webp', 'iPhone/iPhone6Plus/back.webp']
    },
    {//8
      title: 'Iphone 6S',
      price: 25000,
      rest: 7,
      description: {
        diagonal: "4.4",
        camera: "12",
        processor: "A10"
      },
      imgs: ['iPhone/iPhone6S/front.webp', 'iPhone/iPhone6S/back.webp']
    },
    {//9
      title: 'Samsung Galaxy S10',
      price: 60000,
      rest: 30,
      description: {
        diagonal: "6.4",
        camera: "16",
        processor: "SD33"
      },
      imgs: ['Samsung/GalaxyS10/front.webp', 'Samsung/GalaxyS10/back.webp']
    },
    {//10
      title: 'Samsung Galaxy S9',
      price: 50000,
      rest: 30,
      description: {
        diagonal: "6.2",
        camera: "14",
        processor: "SD30"
      },
      imgs: ['Samsung/GalaxyS9/front.webp', 'Samsung/GalaxyS9/back.webp']
    },
    {//11
      title: 'Samsung Galaxy S8',
      price: 40000,
      rest: 30,
      description: {
        diagonal: "6",
        camera: "12",
        processor: "SD29"
      },
      imgs: ['Samsung/GalaxyS8/front.webp', 'Samsung/GalaxyS8/back.webp']
    },
    {//12
      title: 'Samsung Galaxy S7',
      price: 30000,
      rest: 30,
      description: {
        diagonal: "5.8",
        camera: "10",
        processor: "SD27"
      },
      imgs: ['Samsung/GalaxyS7/front.webp', 'Samsung/GalaxyS7/back.webp']
    },
    {//13
      title: 'Huawei M9',
      price: 50000,
      rest: 30,
      description: {
        diagonal: "6.4",
        camera: "14",
        processor: "DD32"
      },
      imgs: ['Huawei/huaweiM9/front.webp', 'Huawei/huaweiM9/back.webp']
    },
    {//14
      title: 'Huawei Nova2',
      price: 50000,
      rest: 30,
      description: {
        diagonal: "5",
        camera: "12",
        processor: "DD31"
      },
      imgs: ['Huawei/huaweiNova2/front.webp', 'Huawei/huaweiNova2/back.webp']
    }
  ]

  phones.forEach(phone => {
    firebase.firestore().collection("phones").add(phone)
      .then(function (docRef) {
        console.log("docRef: ", docRef)
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  })
}

function addTelevisions() {
  console.log('addTelevisions was called')

  let televisions = [
    {//1
      title: 'Samsung UE32T5300AU',
      price: 16890,
      rest: 20,
      description: {
        diagonal: "32",
        screenResolution: "1920x1080",
        wifi: "true",
        hz: 50,
        about: 'Телевизор Samsung UE32T5300AU обладает диагональю 32 дюйма (80 см), оптимальной для установки в помещения со средней площадью. Благодаря поддержке Smart TV эта модель приобрела функционал компьютера: вы сможете просматривать ролики на YouTube, общаться в Skype, воспользоваться браузером и устанавливать различный софт. Подключение к сети Интернет осуществляется через интегрированный Wi-Fi-адаптер. Вам обеспечена детализированная передача изображения, отображаемого в формате высокой четкости Full HD (разрешение 1920x1080 пикселей).'
      },
      imgs: ['samsung/UE32T5300AU/front.webp', 'samsung/UE32T5300AU/1.webp']
    },
    {//2
      title: 'Samsung T32E310EX',
      price: 14490,
      rest: 25,
      description: {
        diagonal: "31.5",
        screenResolution: "1920x1080",
        wifi: "true",
        hz: 50,
        about: `Телевизор Samsung T32E310EX оснащен экраном с разрешающей способностью 1920x1080 пикселей. Прием сигнала производится в формате цифрового и кабельного вещания. Поддерживаются телевизионные стандарты PAL, SECAM. За звучание отвечают встроенные двухканальные стереодинамики мощностью 10 Вт. Даже без подключения дополнительных аудиоустройств звук будет приятным и чистым.
        Телевизор идеально подойдет для больших семей, его углы обзора по 178 градусов обеспечат качественное изображения вне зависимости от угла просмотра.ЖК - телевизор Samsung T32E310EX объединяет в себе как стандартное ТВ- устройство, так и монитор для консоли или ПК.Широкоформатное разрешение позволит даже вблизи ощущать четкость и глубину передаваемого изображения.Прибор можно устанавливать на стену при помощи VESA- крепления или пользоваться стандартной подставкой с антибликовым покрытием.`
      },
      imgs: ['samsung/T32E310EX/front.webp', 'samsung/T32E310EX/1.webp']
    },
    {//3
      title: 'Samsung UE43TU8000U',
      price: 31000,
      rest: 30,
      description: {
        diagonal: "43",
        screenResolution: "3840x2160",
        wifi: "true",
        hz: 100,
        about: `Телевизор Samsung UE43TU8000U обладает широким набором функций, с которыми достигается абсолютный комфорт при просмотре не только телевизионного контента, но и всевозможных видео. Это возможно с поддержкой Smart TV, позволяющего выбирать действительно стоящий контент для просмотра, отфильтровывая ненужное. Стабильному соединению с сетью способствует модуль Wi-Fi. Модель с диагональю 43" (109 см) функционирует под управлением Tizen.
        Samsung UE43T5300AUXRU поддерживает формат FullHD, при котором изображение обладает разрешением 3840x2160. Технология HDR поражает точной цветопередачей и улучшенной четкостью изображения, поэтому даже в самых темных эпизодах изображение будет детализированным. Демонстрация изображения с минимальными искажениями возможна благодаря функции "Ultra Clean View", которая анализирует контент. С тюнерами DVB-T, DVB-C, DVB-T2, DVB-S вы получаете все, чтобы насладиться просмотром телеканалов без установки дополнительного оборудования: нужно всего лишь включить автопоиск.`
      },
      imgs: ['samsung/UE43TU8000U/front.webp', 'samsung/UE43TU8000U/1.webp']
    },
    {//4
      title: 'Samsung UE50NU7002U',
      price: 35990,
      rest: 20,
      description: {
        diagonal: "50",
        screenResolution: "3840x2160",
        wifi: "true",
        hz: 100,
        about: `Телевизор Samsung UE50NU7002U с диагональю экрана 50" (125 см) позволит насладиться реалистичным и детальным изображением, поскольку поддерживает формат 4K, который соответствует разрешению 3840x2160 пикселей. Технология Direct LED предполагает равномерное распределение светодиодов по всему периметру экрана, что обеспечивает более насыщенное и яркое изображение. Порт USB позволяет подключать к телевизору внешние носители, чтобы вы могли воспроизводить файлы, содержащиеся на флеш-картах и мобильных устройствах.
        Samsung UE50NU7002U предусматривает встроенные тюнеры DVB-T, DVB-T2, DVB-C, DVB-S2, что избавляет от необходимости установки внешней приставки, позволяя насладиться просмотром любимых цифровых телеканалов. Для этого нужно включить автоматический поиск. Возможность пользоваться неограниченно сетевым контентом предоставляет встроенный модуль Wi-Fi и технология Smart TV. Модель поддерживает объемное звучание благодаря динамикам общей мощностью 20 Вт.`
      },
      imgs: ['samsung/UE50NU7002U/front.webp', 'samsung/UE50NU7002U/1.webp']
    },
    {//5
      title: 'LG 43UK6200',
      price: 23990,
      rest: 22,
      description: {
        diagonal: "43",
        screenResolution: "3840x2160",
        wifi: "true",
        hz: 50,
        about: `Телевизор LG 43UK6200 поддерживает цифровые тюнеры DVB-T, DVB-T2, DVB-C, DVB-S и DVB-S2, благодаря чему вам доступно не только кабельное, но и спутниковое телевещание. Имеется функция телетекста, которая позволит вам ознакомиться с интересующей вас информацией касательно погоды, расписания транспорта, мировых новостей и др., не отрываясь от просмотра телепередачи. Качественный звук не менее важен, чем красочный видеоряд, поэтому модель оснащена динамиками, выдающими глубокий и насыщенный звук мощностью 20 Вт. Функция объемного звучания позволит вам с головой погрузиться в происходящее на экране.
        Телевизор DVB-T, DVB-T2, DVB-C, DVB-S, DVB-S2 поддерживает огромное количество файлов и кодеков, благодаря чему у вас не возникнет проблем с воспроизведением того или иного файла. Благодаря присутствию в конструкции устройства сразу двух USB-портов вы сможете подключить к нему внешние накопители данных для просмотра интересующего вас видео и различную периферию для более удобной навигации по меню.`
      },
      imgs: ['lg/43UK6200/front.webp', 'lg/43UK6200/1.webp']
    },
    {//5
      title: 'LG 55UM7300',
      price: 36180,
      rest: 25,
      description: {
        diagonal: "55",
        screenResolution: "3840x2160",
        wifi: "true",
        hz: 100,
        about: "Телевизор LG 50UM7300PLB показывает картинку с разрешением Ultra HD, 3840х2160 пикселей, что соответствует стандарту 4K. Она выглядит чрезвычайно реалистично, и у вас не возникнет сложностей с тем, чтобы рассмотреть мельчайшие детали. Технология TruMotion 100 обеспечивает плавную передачу движения в динамичных сценах, а благодаря поддержке HDR цвета будут яркими, насыщенными и совершенно естественными."
      },
      imgs: ['lg/55UM7300/front.webp', 'lg/55UM7300/1.webp']
    },
    {//7
      title: 'LG 50UM7300',
      price: 33110,
      rest: 24,
      description: {
        diagonal: "50",
        screenResolution: "3840x2160",
        wifi: "false",
        hz: 50,
        about: `Телевизор поддерживает цифровые тюнеры DVB-T, DVB-T2, DVB-C, DVB-S и DVB-S2, благодаря чему вам доступно не только кабельное, но и спутниковое телевещание. Имеется функция телетекста, которая позволит вам ознакомиться с интересующей вас информацией касательно погоды, расписания транспорта, мировых новостей и др., не отрываясь от просмотра телепередачи. Качественный звук не менее важен, чем красочный видеоряд, поэтому модель оснащена динамиками, выдающими глубокий и насыщенный звук мощностью 20 Вт.`
      },
      imgs: ['lg/50UM7300/front.webp', 'lg/50UM7300/1.webp']
    },
    {//8
      title: 'Sony KDL-40RE353',
      price: 25000,
      rest: 60,
      description: {
        diagonal: "40",
        screenResolution: "1920x1080",
        wifi: "false",
        hz: 50,
        about: `LED-телевизор Sony KDL-40RE353 с диагональю экрана 40" (101 см) представлен в черном корпусе с устойчивой подставкой. Подставку при необходимости можно убрать и тогда вы получаете возможность закрепить аппарат на стене, ведь модель соответствует стандарту VESA 100x100.
        Разрешение 1920x1080 (FullHD) позволяет оценить естественность и детализацию изображения, перейти к нюансам. Пользователь получает четкое изображение, обладающее повышенной степенью контрастности, что доставляет при просмотре удовольствие. Углы обзора Sony KDL-40RE353 составляют 178°/178°, поэтому не стоит переживать об искажении картинки: с любого ракурса она будет стабильной четкой.
        DVB-T, DVB-T2, DVB-C – поддерживаемые моделью цифровые тюнеры. Благодаря им пользователь получает возможность выбора предпочитаемого канала вещания. Для подключения накопителей, а также мультимедийной и цифровой техники телевизор оборудован разъемами HDMI, USB.`
      },
      imgs: ['sony/KDL-40RE353/front.webp', 'sony/KDL-40RE353/1.webp']
    },
    {//9
      title: 'Sony KD-55XG7005',
      price: 54000,
      rest: 15,
      description: {
        diagonal: "54.6",
        screenResolution: "3840x2160",
        wifi: "true",
        hz: 50,
        about: `Телевизор LED Sony KD-55XG7005 с диагональю экрана 55" (139 см) представлен в черном корпусе и устанавливается на съемную подставку. С ним вы получаете возможность просмотра любимых цифровых телеканалов при поддержке встроенных тюнеров DVB-T, DVB-T2, DVB-C, DVB-S: вам необходимо будет лишь включить автоматический поиск. Телевизор поддерживает фиксацию на стене, поскольку поддерживает стандарт крепления VESA 200x200. Такой способ крепления будет оптимальным для устройства таких размеров. Встроенный модуль Wi-Fi, а также поддержка Smart TV открывают доступ к сетевому контенту.
        Sony KD-55XG7005 поддерживает технологию 4K X-Reality PRO, что способствует повышению разрешения изображения до 3840x2160, позволяя достичь невероятной четкости и улучшенной обработки деталей изображения. Благодаря технологии TRILUMINOS Display телевизор будет отображать живые цвета в широком диапазоне, что позволит видеть на экране реалистичные оттенки и тона. Система Motionflow XR способствует плавности динамичных сцен.`
      },
      imgs: ['sony/KD-55XG7005/front.webp', 'sony/KD-55XG7005/1.webp']
    },
    {//10
      title: 'Sony KDL-43WF665',
      price: 30999,
      rest: 28,
      description: {
        diagonal: "40",
        screenResolution: "1920x1080",
        wifi: "false",
        hz: 50,
        about: `43-дюймовый телевизор LED Sony KDL-43WF665 имеет классический дизайн: корпус телеприемника окрашен в строгий черный цвет. Телевизор имеет широко распространенное разрешение: 1920x1080. Этот параметр, а также размер экрана свидетельствуют о возможности эффективного использования модели в больших помещениях, например – в гостиных или конференц-залах. Одним из преимуществ телевизора является тип подсветки (Direct LED), сильной стороной которого является равномерность освещенности экрана.
        Телевизор LED Sony KDL-43WF665 имеет поддержку Smart TV. Вам будет доступен широчайший выбор каналов интернет-телевидения. Smart TV также позволяет использовать и другие онлайн-развлечения. В наличии встроенный модуль Wi-Fi. Есть и возможность проводного подключения к Интернету, с использованием порта Ethernet (RJ-45). Для подключения внешних источников мультимедиа-данных применяются 2 порта USB. Телевизор имеет возможность записи видео и функцию отложенного просмотра. Полезной для многих пользователей станет возможность подключения наушников.`
      },
      imgs: ['sony/KDL-43WF665/front.webp', 'sony/KDL-43WF665/1.webp']
    },
    {//11
      title: 'Sony KD-55XG9505',
      price: 99990,
      rest: 30,
      description: {
        diagonal: "40",
        screenResolution: "3840x2160",
        wifi: "false",
        hz: 120,
        about: `Детализированная 4К картинка с яркой цветопередачей прекрасно сочетается с технологией Sound-from-Picture Reality в телевизоре Sony KD-55XG9505. Благодаря невероятной вычислительной мощности процессор обработки изображений X1 Ultimate обнаруживает сотни различных объектов на экране и улучшает яркость, детализацию и цветопередачу так, что все выглядит четким и чрезвычайно реалистичным. Система Acoustic Multi-Audio предусматривает установку двух высокочастотных динамиков для создания эффекта перемещения звука в задней части телевизора, где расположены динамики с фазоинвертором. Эти динамики обеспечивают работу технологии Sound-from-Picture Reality. Благодаря четко слаженным картинке и звуку впечатления от просмотра будут еще ярче. Телевизор Sony KD-55XG9505 создан, чтобы дарить незабываемые впечатления от просмотра на большом экране. Превосходная картинка ни на секунду не позволит вам усомниться в реалистичности происходящего на экране.`
      },
      imgs: ['sony/KD-55XG9505/front.webp', 'sony/KD-55XG9505/1.webp']
    }
  ]

  televisions.forEach(tv => {
    firebase.firestore().collection("televisions").add(tv)
      .then(function (docRef) {
        console.log("docRef: ", docRef)
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  })
}

function addTablets() {
  console.log('addPhones was called')

  let tablets = [
    {//1
      title: 'Apple iPad (2019)',
      price: 26999,
      rest: 25,
      description: {
        diagonal: "10.2",
        frontCamera: "1.2",
        mainCamera: "8",
        processor: "Apple A10",
        memory: "32"
      },
      imgs: ["ipad/ipad2019-32/front.webp", "ipad/ipad2019-32/1.webp"]
    },
    {//2
      title: 'Apple iPad (2019)',
      price: 34490,
      rest: 30,
      description: {
        diagonal: "10.2",
        frontCamera: "1.2",
        mainCamera: "8",
        processor: "Apple A10",
        memory: "128"
      },
      imgs: ["ipad/ipad2019-128/front.webp", "ipad/ipad2019-128/1.webp"]
    },
    {//3
      title: 'Apple iPad mini (2019)',
      price: 41990,
      rest: 30,
      description: {
        diagonal: "7.9",
        frontCamera: "8",
        mainCamera: "7",
        processor: "Apple A12 Bionic",
        memory: "64"
      },
      imgs: ["ipad/ipad-mini-2019-64/front.webp", "ipad/ipad-mini-2019-64/1.webp"]
    },
    {//4
      title: 'Apple iPad Pro 11 (2020)',
      price: 69900,
      rest: 15,
      description: {
        diagonal: "11",
        frontCamera: "8",
        mainCamera: "12/10 (две камеры)",
        processor: "Apple A12Z Bionic",
        memory: "128"
      },
      imgs: ["ipad/ipad-pro-11-128/front.webp", "ipad/ipad-pro-11-128/1.webp"]
    },
    {//5
      title: 'Apple iPad Air (2019)',
      price: 54000,
      rest: 10,
      description: {
        diagonal: "10.5",
        frontCamera: "7",
        mainCamera: "8",
        processor: "Apple A12 Bionic",
        memory: "256"
      },
      imgs: ["ipad/ipad-air-2019-256/front.webp", "ipad/ipad-air-2019-256/1.webp"]
    },
    {//6
      title: 'Samsung Galaxy Tab A 10.1',
      price: 16990,
      rest: 10,
      description: {
        diagonal: "10.1",
        frontCamera: "5",
        mainCamera: "8",
        processor: "Samsung Exynos 7904",
        memory: "32"
      },
      imgs: ["galaxy-tab/a10-32/front.webp", "galaxy-tab/a10-32/1.webp"]
    },
    {//7
      title: 'Samsung Galaxy Tab S6 Lite',
      price: 27460,
      rest: 20,
      description: {
        diagonal: "10.4",
        frontCamera: "5",
        mainCamera: "8",
        processor: "Samsung Exynos 9611",
        memory: "64"
      },
      imgs: ["galaxy-tab/a10-32/front.webp", "galaxy-tab/a10-32/1.webp"]
    },
    {//8
      title: 'Samsung Galaxy Tab S7',
      price: 57990,
      rest: 30,
      description: {
        diagonal: "11",
        frontCamera: "8",
        mainCamera: "13/5 (две камеры)",
        processor: "Qualcomm Snapdragon 865+",
        memory: "128"
      },
      imgs: ["galaxy-tab/s6-lite/front.webp", "galaxy-tab/s6-lite/1.webp"]
    },
    {//9
      title: 'HUAWEI MediaPad T5',
      price: 14950,
      rest: 30,
      description: {
        diagonal: "10.1",
        frontCamera: "2",
        mainCamera: "5",
        processor: "HiSilicon Kirin 659",
        memory: "32"
      },
      imgs: ["hyawei/t5/front.webp", "hyawei/t5/1.webp"]
    },
    {//10 todo
      title: 'HUAWEI MatePad LTE',
      price: 21590,
      rest: 30,
      description: {
        diagonal: "10.4",
        frontCamera: "8",
        mainCamera: "8",
        processor: "HiSilicon Kirin 810",
        memory: "64"
      },
      imgs: ["hyawei/matepad-lte/front.webp", "hyawei/matepad-lte/1.webp"]
    }
  ]

  tablets.forEach(tablet => {
    firebase.firestore().collection("tablets").add(tablet)
      .then(function (docRef) {
        console.log("docRef: ", docRef)
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  })
}
