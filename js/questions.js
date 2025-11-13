const SIGN_BANK = [

  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_0.png", text: "Пункты государственной геодезической сети (91,6 – высота основания пункта над уровнем моря)" },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_1.png", text: "Пункты государственной геодезической сети, расположенные на курганах..." },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_2.png", text: "Пункты государственной геодезической сети, расположенные на зданиях..." },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_3.png", text: "Точки съёмочной сети, закреплённые на местности центрами." },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_4.png", text: "Точки съёмочной сети, закреплённые на местности, расположенные на курганах" },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_5.png", text: "Астрономические пункты" },
  { cat: "geodetic", img: "assets/images/geodetic_img/topo_x_6.png", text: "Нивелирные марки и реперы" },


  { cat: "hydro", img: "assets/images/hydro_img/topo_h_0.png", text: "Береговая линия, постоянная и определённая" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_1.png", text: "Береговая линия: непостоянная или неопределённая" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_2.png", text: "Береговые отмели и мели" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_3.png", text: "Берега опасные" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_4.png", text: "Песчаные осыхающие берега" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_5.png", text: "Песчано-каменистые и галечно-гравийные осыхающие берега" },
  { cat: "hydro", img: "assets/images/hydro_img/topo_h_6.png", text: "Илистые осыхающие берега" },


  { cat: "relief", img: "assets/images/relief_img/topo_r_0.png", text: "Горизонтали (основные линии рельефа)" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_1.png", text: "Подписи горизонталей в метрах и указатели направления скатов" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_2.png", text: "Сухие русла рек" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_4.png", text: "Отметки высот у ориентиров" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_5.png", text: "Перевалы, отметки их высот и время действия" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_6.png", text: "Овраги и промоины" },
  { cat: "relief", img: "assets/images/relief_img/topo_r_8.png", text: "Ямы" },


  { cat: "roads", img: "assets/images/roads_img/topo_z_15.png", text: "Автострада" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_16.png", text: "Усовершенствованные шоссе" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_17.png", text: "Шоссе" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_20.png", text: "Строящиеся дороги" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_21.png", text: "Граница смены материала покрытия на шоссейных дорогах" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_22.png", text: "Километровые знаки, подписи числа километров" },
  { cat: "roads", img: "assets/images/roads_img/topo_z_23.png", text: "Путепроводы над шоссейной дорогой" },



  { cat: "railways", img: "assets/images/railways_img/topo_z_0.png", text: "Железная дорога трехпутная" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_1.png", text: "Железная дорога двухпутная" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_2.png", text: "Железная дорога однопутная" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_4.png", text: "Электрифицированные железные дороги" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_5.png", text: "Погрузочно-разгрузочные площадки, путевые посты" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_7.png", text: "Строящиеся ширококолейные железные дороги" },
  { cat: "railways", img: "assets/images/railways_img/topo_z_8.png", text: "Полотно разобранных железных дорог" },



  { cat: "settlements", img: "assets/images/settlements_img/topo_w_0.png", text: "Кварталы с преобладанием огнестойких строений" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_1.png", text: "Кварталы с преобладанием неогнестойких строений" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_2.png", text: "Разрушенные и полуразрушенные кварталы" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_3.png", text: "Непроезжие участки улиц" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_4.png", text: "Жилые и нежилые строения в кварталах, в населённых пунктах с бессистемной застройкой" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_5.png", text: "Выдающиеся огнестойкие строения" },
  { cat: "settlements", img: "assets/images/settlements_img/topo_w_6.png", text: "Отдельно расположенные дворы" },



  { cat: "objects", img: "assets/images/objects_img/topo_y_0.png", text: "Заводские и фабричные трубы" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_1.png", text: "Нефтяные и газовые вышки" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_2.png", text: "Капитальные сооружения башенного типа" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_4.png", text: "Вышки легкого типа" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_5.png", text: "Терриконы и отвалы " },
  { cat: "objects", img: "assets/images/objects_img/topo_y_6.png", text: "Будки трансформаторные" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_7.png", text: "Ветряные двигатели" },
  { cat: "objects", img: "assets/images/objects_img/topo_y_8.png", text: "Водяные мельницы и лесопильни" },




  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_0.png", text: "Хвойные леса" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_1.png", text: "Лиственные леса" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_2.png", text: "Смешанные леса" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_4.png", text: "Узкие полосы леса" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_5.png", text: "Небольшие площади леса, не выражающиеся в масштабе карты" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_6.png", text: "Отдельные рощи, не выражающиеся в масштабе карты" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_7.png", text: "Отдельно стоящие деревья, имеющие значение ориентиров" },
  { cat: "vegetation", img: "assets/images/vegetation_img/topo_v_8.png", text: "Отдельные деревья, не имеющие значения ориентиров" },


];

function generateQuestions(signs) {
  const result = [];

  signs.forEach((sign, idx) => {

    const sameCat = signs.filter(s => s.cat === sign.cat && s !== sign);

    const wrongImgs = sameCat
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(s => `<img src="${s.img}" style="height:60px">`);

    const correctImg = `<img src="${sign.img}" style="height:60px">`;
    const allChoices1 = [correctImg, ...wrongImgs].sort(() => Math.random() - 0.5);

    result.push({
      q: `Что из картинок соответствует описанию: «${sign.text}»?`,
      choices: allChoices1,
      answer: allChoices1.indexOf(correctImg)
    });

    const wrongTexts = sameCat
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(s => s.text);

    const correctText = sign.text;
    const allChoices2 = [correctText, ...wrongTexts].sort(() => Math.random() - 0.5);

    result.push({
      q: `Что из описаний соответствует картинке?<br><img src="${sign.img}" style="height:60px">`,
      choices: allChoices2,
      answer: allChoices2.indexOf(correctText)
    });
  });

  return result;
}

const AUTO_QUESTIONS = generateQuestions(SIGN_BANK);
const QUESTION_BANK = AUTO_QUESTIONS;

console.log("Вопросов сгенерировано:", QUESTION_BANK.length);
