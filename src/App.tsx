import React, { useState } from 'react';
import './App.css';

const p1 = require('./img/2.png');
const p2 = require('./img/3.png');
const p3 = require('./img/4.png');
const p4 = require('./img/5.png');
const p5 = require('./img/6.png');
const p6 = require('./img/7.png');
const p7 = require('./img/8.png');
const p8 = require('./img/9.png');
const p9 = require('./img/10.png');
const p10 = require('./img/11.png');
const p11 = require('./img/12.png');
const p12 = require('./img/13.png');
const p30 = require('./img/30.png');
const p31 = require('./img/31.png');
const p32 = require('./img/32.png');
const p33 = require('./img/33.png');
const p34 = require('./img/34.png');
const p35 = require('./img/35.png');


function App() {
 




  const [ question, setQuestion ] = useState('1');
  const [ hider, setHider ] = useState(0);
  const [ score, setScore ] = useState(0);

  const [ score6, setScore6 ] = useState(0);
  const [ score7, setScore7 ] = useState(0);
const [text, setText ] = useState(0);
  const [ score811, setScore811 ] = useState(0);

  const timer = setTimeout(
    () => setText(1), 
    30000
  );

  return (
    
     <>
{hider === 0 ? (
<>
{question === '1' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p1)} />
<p style={{ width: '38%', marginTop: '10%', marginLeft: '10%', fontSize: '14px' }}>Здороваемся, улыбаемся и объясняем процедуру:<br />
- Добрый день! Меня хорошо видно, слышно?<br />
- Отлично! Я вас тоже вижу и слышу!<br />
- Готовы начинать?<br />
- Прекрасно! Меня зовут ... -- методист онлайн-школы
Учи.Дома.<br />
С нами сегодня на уроке мама/папа, как Вас зовут?<br />
- Очень приятно! А тебя как зовут .... ?<br />
- *Имя ребенка, расскажи, ты уже учишься в школе? Тебе
нравится предмет “математика”?<br />
- Сегодня у нас с вами первое вводное занятие.<br />
За это время я протестирую уровень знаний *Имя ребенка,
подберу наиболее подходящую программу и дам
рекомендации по дальнейшему изучению предмета.<br />
- Как у *Имя ребенка с математикой? Какие оценки? Что
говорит учитель? Есть ли у вас домашние задания?
Справляется ли с ними *Имя ребенка самостоятельно? Был
ли опыт дополнительного обучения математике? А других
предметов?<br />
Какая цель от дополнительных занятий по математике? Каких
целей хотите достичь?<br />
(Используем эти ответы для адаптации дальнейшей
презентации курса, а цель родителя “визуализируем” для
ребенка в том числе на слайде 3)<br />
Что ж, тогда давай проверим, что ты уже знаешь и умеешь.
Согласен/сна?</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('2') }} >Следующий слайд</button>


  
</div> </>
) : null}


{question === '2' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p2)} />
<p style={{ width: '38%', marginTop: '10%', marginLeft: '10%', fontSize: '14px' }}>Здороваемся, улыбаемся и объясняем процедуру:<br />
- Добрый день! Меня хорошо видно, слышно?<br />
- Отлично! Я вас тоже вижу и слышу!<br />
- Готовы начинать?<br />
- Прекрасно! Меня зовут ... -- методист онлайн-школы
Учи.Дома.<br />
С нами сегодня на уроке мама/папа, как Вас зовут?<br />
- Очень приятно! А тебя как зовут .... ?<br />
- *Имя ребенка, расскажи, ты уже учишься в школе? Тебе
нравится предмет “математика”?<br />
- Сегодня у нас с вами первое вводное занятие.<br />
За это время я протестирую уровень знаний *Имя ребенка,
подберу наиболее подходящую программу и дам
рекомендации по дальнейшему изучению предмета.<br />
- Как у *Имя ребенка с математикой? Какие оценки? Что
говорит учитель? Есть ли у вас домашние задания?
Справляется ли с ними *Имя ребенка самостоятельно? Был
ли опыт дополнительного обучения математике? А других
предметов?<br />
Какая цель от дополнительных занятий по математике? Каких
целей хотите достичь?<br />
(Используем эти ответы для адаптации дальнейшей
презентации курса, а цель родителя “визуализируем” для
ребенка в том числе на слайде 3)<br />
Что ж, тогда давай проверим, что ты уже знаешь и умеешь.
Согласен/сна?</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('3')}} >Следующий слайд</button>
 
</div> </>
) : null}


{question === '3' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p3)} />
<p style={{ width: '38%', marginTop: '10%', marginLeft: '10%', fontSize: '14px' }}>Здороваемся, улыбаемся и объясняем процедуру:<br />
- Добрый день! Меня хорошо видно, слышно?<br />
- Отлично! Я вас тоже вижу и слышу!<br />
- Готовы начинать?<br />
- Прекрасно! Меня зовут ... -- методист онлайн-школы
Учи.Дома.<br />
С нами сегодня на уроке мама/папа, как Вас зовут?<br />
- Очень приятно! А тебя как зовут .... ?<br />
- *Имя ребенка, расскажи, ты уже учишься в школе? Тебе
нравится предмет “математика”?<br />
- Сегодня у нас с вами первое вводное занятие.<br />
За это время я протестирую уровень знаний *Имя ребенка,
подберу наиболее подходящую программу и дам
рекомендации по дальнейшему изучению предмета.<br />
- Как у *Имя ребенка с математикой? Какие оценки? Что
говорит учитель? Есть ли у вас домашние задания?
Справляется ли с ними *Имя ребенка самостоятельно? Был
ли опыт дополнительного обучения математике? А других
предметов?<br />
Какая цель от дополнительных занятий по математике? Каких
целей хотите достичь?<br />
(Используем эти ответы для адаптации дальнейшей
презентации курса, а цель родителя “визуализируем” для
ребенка в том числе на слайде 3)<br />
Что ж, тогда давай проверим, что ты уже знаешь и умеешь.
Согласен/сна?</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('4')}} >Следующий слайд</button>
</div> </>
) : null}




{question === '4' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p4)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>Тогда мы с тобой отправимся в гости к сообразительному
завру Грише. Вместе с ним мы подготовим к открытию
настоящий парк аттракционов!</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('5')}} >Следующий слайд</button>
</div> </>
) : null}



{question === '5' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p5)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>Нам нужно очень постараться, чтобы справиться с задачей! В
этом деле Грише не обойтись без твоей помощи! По мере
выполнения заданий это место превратится в настоящий остров мечты каждого ребёнка, где можно покататься на
множестве аттракционов и весело провести время. Что ж,
*Имя ребёнка, давай начинать?</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('6'); clearTimeout(timer); setText(0)}} >Следующий слайд</button>
</div> </>
) : null}






{question === '6' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p6)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>Сначала займёмся возведением самого большого
аттракциона - колеса обозрения.
Найди номера кабинок, которые зашифрованы в примерах.
Для выполнения задания используйте маркер или
инструмент “Впечатывание”.<br />
Перед решением спрашиваем, знает ли ребёнок таблицу
умножения. Если нет, НЕ предлагаем решать слайды 7-8, а
переходим к слайду 10<br />
17 + 8 = 25 (Какое число нужно прибавить к 17, чтобы
получилось 25?)
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('7'); setScore6(score6 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('7'); clearTimeout(timer); setText(0)}} >Ребёнок не справился</button>
</div>
<br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div> </>
) : null}



{question === '7' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p7)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>93 - 45 = 48 (Какое число нужно отнять от 93, чтобы
получилось 48?)
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('8'); setScore7(score7 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('8'); clearTimeout(timer); setText(0)}} >Ребёнок не справился и говорит что знаком с трёхзначными числами</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('12'); clearTimeout(timer); setText(0)}} >Ребёнок не справился и говорит что не знает таблицу умножения</button>
</div><br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div>  </>
) : null}


{question === '8' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p8)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>139 - 83 = 56 (Какое число
нужно отнять от 139, чтобы получить 83?)
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('9'); setScore811(score811 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился и знает таблицу умножения</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('9'); clearTimeout(timer); setText(0)}} >Ребёнок не справился и говорит что изучал/знает таблицу умножения</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('12'); clearTimeout(timer); setText(0)}} >Ребёнок не справился и говорит что не знает таблицу умножения</button>
</div><br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div>  </>
) : null}


{question === '9' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p9)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>4 ∙ 6 + 2 = 26 (На какое число нужно умножить
число 4 и прибавить
получилось 26?)
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('10'); setScore811(score811 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился</button><br /><br />
  <button className="button-23"  onClick={() => {setQuestion('12'); clearTimeout(timer); setText(0)}} >Ребёнок не справился</button>
</div><br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div>  </>
) : null}

{question === '10' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p10)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>(5 ∙ 3 + 3) ∙ 2 = 36 (Подбери подходящее число)
Подсказка: попробуй подобрать необходимое число, советую
начать с малого (с числа 1).
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('11'); setScore811(score811 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился</button>&nbsp;&nbsp;&nbsp;
  <button className="button-23"  onClick={() => {setQuestion('12'); clearTimeout(timer); setText(0)}} >Ребёнок не справился</button>
</div><br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div>  </>
) : null}


{question === '11' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p11)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>275 : 25 + 25 ∙ 3 = 86 (Найди неизвестный
номер кабинки)
Подсказка: на какие числа число 275 делится нацело? (1, 5,
11, 25, 55, 275)
</p>
</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <button className="button-23"  onClick={() => {setQuestion('12'); setScore811(score811 + 1); clearTimeout(timer); setText(0)}} >Ребёнок справился</button>&nbsp;&nbsp;&nbsp;
  <button className="button-23"  onClick={() => {setQuestion('12'); clearTimeout(timer); setText(0)}} >Ребёнок не справился</button>
</div><br /><br />
<div>
{text === 1 ? (<p><span style={{ fontSize: '50px', color: 'red'}}>⚠</span>&nbsp;&nbsp;&nbsp;Вы тратите много врмемени на задание. Переходите к следующему.</p>) : null}
  </div>  </>
) : null}


{question === '12' ? ( <>
  <div style={{ display: 'flex' }}>
<img style={{ width: '350px', height: '280px', marginTop: '10%', marginLeft: '17%', borderRadius: "10px" }} src={String(p12)} />
<p style={{ width: '40%', marginTop: '15%', marginLeft: '10%' }}>Превосходно! Такое огромное сооружение точно привлечет в
парк многих жителей Заврогорода. Думаю, они с
удовольствием прокатятся на нашем колесе обозрения. А
какие аттракционы твои самые любимые?
</p>


</div>
<br /><br />
<div style={{ display: 'inline-flex', marginLeft: '25%', marginRight: '50%'}}>
  <br />
  <p>Ваш уровень: {score6 === 1 && score7 === 1 && score811 === 4 ? (<p>Высокий, 2 балла</p>) : null }


{score6 === 1 && score7 === 1 && (score811 === 3 || score811 === 2 || score811 === 1 || score811 === 0) ? (<p>Средний, 1 балл</p>) : null}

{score6 === 1 && score7 === 0 ? (<p>Низкий, 0 баллов</p>) : null}
{score6 === 0 && score7 === 1 ? (<p>Низкий, 0 баллов</p>) : null}
{score6 === 0 && score7 === 0 ? (<p>Низкий, 0 баллов</p>) : null}

</p>
</div> </>
) : null}






</>



) : <div>
<p>Всего очков: {score}.</p> 
{score == 0 ? (
  <p>Ваша методичка "А"</p>
) : score == 1 ? (
  <p>Ваша методичка "Б"</p>
) : score == 2 ? (
  <p>Ваша методичка "Б"</p>
) : score == 3 ? (
  <p>Ваша методичка "В"</p>
) : null }
</div> }






    </>
  );
}

export default App;

