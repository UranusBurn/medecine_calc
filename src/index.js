import React from 'react';
import ReactDOM from "react-dom";

let Medical_failure = 0;
let Infection = 0;
let Bleeding = 0;
let Panic = 0;
let Zone = 0;
let diagnosis_random_min=1;
let diagnosis_random_max=5;
let operation_random_min=1;
let operation_random_max=5;
let medic_skill = 0;
let operation_kit = '';
let t1 = '';
let t2 = '';
let t3 = '';
let t4 = '';
let t5 = '';
let t6 = '';
let t7 = '';
let t8 = '';
let t9 = '';
let Symptoms_count = 0;
let Symptoms_multi = 3;

function Diagnosis_Random(min, max) {
    min = Math.ceil(diagnosis_random_min)
    max = Math.floor(diagnosis_random_max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function Operation_Random(min, max) {
    min = Math.ceil(operation_random_min)
    max = Math.floor(operation_random_max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function Answer_1 () {
    if (document.getElementById("male").checked)  {
        diagnosis_random_min = 3;
        diagnosis_random_max = 9;
        t1 = 'Мужчина'
    }
    if (document.getElementById("female").checked)  {
        operation_random_min = 3;
        operation_random_max = 9;
        t2 = 'Женщина'
    }
    if (document.getElementById("fat").checked)  {
        Zone = Zone + 2;
        Panic = Panic - 2;
        t3 = 'полное'
    }
    if (document.getElementById("normal").checked)  {
        Zone = Zone + 1;
        Panic = Panic + 1;
        Bleeding = Bleeding +1;
        Medical_failure = Medical_failure - 1;
        Infection = Infection -1;
        t3 = 'среднее'
    }
    if (document.getElementById("athletic").checked)  {
        Panic = Panic + 2;
        Bleeding = Bleeding - 2;
        t3 = 'атлетичное'
    }
    if (document.getElementById("age").value <= 30 && document.getElementById("age").value > 0) {
        Medical_failure = Medical_failure - 2;
        Infection = Infection - 2;
        t2 = document.getElementById("age").value
    }
    if (document.getElementById("age").value > 30) {
        Zone = Zone - 1;
        Panic = Panic - 1;
        Bleeding = Bleeding - 1;
        t2 = document.getElementById("age").value
    }
}
function Answer_2 () {
    if (document.getElementById("newbie").checked)  {
        Panic = Panic + 2;
        Infection = Infection + 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone - 3;
        t4 = 'сталкером-новичком'
    }
    if (document.getElementById("skilled").checked)  {
        Panic = Panic + 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone + 1;
        Infection = Infection - 1;
        Bleeding = Bleeding - 1;
        t4 = 'опытным сталкером'
    }
    if (document.getElementById("legendary").checked)  {
        Panic = Panic - 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone + 2;
        Infection = Infection - 1;
        Bleeding = Bleeding - 1;
        t4 = 'легендарным сталкером'
    }
    if (document.getElementById("poor").checked)  {
        Zone = Zone + 2;
        Panic = Panic -1;
        Medical_failure = Medical_failure - 1;
        Infection = Infection + 1;
        t5 = 'низким'
    }
    if (document.getElementById("average").checked)  {
        Zone = Zone + 1;
        Infection = Infection - 2;
        Medical_failure = Medical_failure +1;
        t5 = 'средним'
    }
    if (document.getElementById("rich").checked) {
        Panic = Panic + 1;
        Medical_failure = Medical_failure + 1;
        Infection = Infection - 2;
        Zone = Zone - 1;
        t5 = 'высоким'
    }
}
function Answer_3 () {
    if (document.getElementById("gunshot").checked)  {
        Panic = Panic + 2;
        Infection = Infection + 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone - 3;
        t6 = 'Огнестрельное'
    }
    if (document.getElementById("other").checked )    {
        Panic = Panic + 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone + 1;
        Infection = Infection - 1;
        Bleeding = Bleeding - 1;
        t6 = 'Колотое'
    }
    if (document.getElementById("head").checked)  {
        Panic = Panic - 1;
        Medical_failure = Medical_failure + 1;
        Zone = Zone + 2;
        Infection = Infection - 1;
        Bleeding = Bleeding - 1;
        t7 = 'область головы'
    }
    if (document.getElementById("leg").checked)  {
        Zone = Zone + 2;
        Panic = Panic -1;
        Medical_failure = Medical_failure - 1;
        Infection = Infection + 1;
        t7 = 'конечность'
    }
    if (document.getElementById("torso").checked)  {
        Zone = Zone + 1;
        Infection = Infection - 2;
        Medical_failure = Medical_failure +1;
        t7 = 'область торса'
    }
    if (document.getElementById("<30").checked) {
        medic_skill = medic_skill + 2;
        t8 = 'менее тридцати минут'
    }
    if (document.getElementById("30-45").checked) {
        t8 = 'около сорока минут'
    }
    if (document.getElementById("45-90").checked) {
        medic_skill = medic_skill - 1;
        t8 = 'около часа'
    }
    if (document.getElementById("90+").checked) {
        medic_skill = medic_skill - 3;
        t8 = 'более полутора часа'
    }
    if (document.getElementById("gunshot").checked && document.getElementById("head").checked) {
        operation_kit = 'извлечение дроби';
        Panic = Panic +5;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
    }
    if (document.getElementById("other").checked && document.getElementById("head").checked) {
        operation_kit = 'наложение шва';
        Panic = Panic + 3;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
        Zone = Zone +1;
    }
    if (document.getElementById("gunshot").checked && document.getElementById("torso").checked) {
        operation_kit = 'извлечение дроби';
        Zone = Zone +5;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
        Bleeding = Bleeding + 2;
    }
    if (document.getElementById("other").checked && document.getElementById("torso").checked) {
        operation_kit = 'операция на внутренних органах';
        Zone = Zone + 3;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
        Bleeding = Bleeding + 1;
    }
    if (document.getElementById("gunshot").checked && document.getElementById("leg").checked) {
        operation_kit = 'извлечение дроби';
        Bleeding = Bleeding +5;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
    }
    if (document.getElementById("other").checked && document.getElementById("leg").checked) {
        operation_kit = 'наложение шва';
        Bleeding = Bleeding + 3;
        Medical_failure = Medical_failure + 2;
        Infection = Infection + 2;
        Zone = Zone + 1;
    }
}
function Symp_count () {
    if (document.getElementById("кашель").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_кашель'
    }
    if (document.getElementById("хрип").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_хрип'
    }
    if (document.getElementById("рвота").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_рвота'
    }
    if (document.getElementById("резкая боль").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_резкая боль'
    }
    if (document.getElementById("длительная боль").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_длительная боль'
    }
    if (document.getElementById("мигрень").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_мигрень'
    }
    if (document.getElementById("кровотечение").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_кровотечение'
    }
    if (document.getElementById("слабость").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_слабость'
    }
    if (document.getElementById("обширная потеря крови").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_обширная потеря крови'
    }
    if (document.getElementById("галлюцинации").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_галлюцинации'
    }
    if (document.getElementById("амнезия").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_амнезия'
    }
    if (document.getElementById("потеря чувствительности").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_потеря чувствительности'
    }
    if (document.getElementById("головокружение").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_головокружение'
    }
    if (document.getElementById("жар").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_жар'
    }
    if (document.getElementById("тремор").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_тремор'
    }
    if (document.getElementById("неадекватное поведение").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_неадекватное поведение'
    }
    if (document.getElementById("упадок сил").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_упадок сил'
    }
    if (document.getElementById("облучение").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_облучение'
    }
    if (document.getElementById("недавний контакт с артефактами").checked)  {
        Symptoms_count = Symptoms_count + 1;
        t9 = t9 + '_недавний контакт с артефактами'
    }
    if (Symptoms_count <= 3) {
        Symptoms_multi = 3;
    }

    t9 = t9.replace(/_/gi, ', ');
    t9 = t9.replace(', ', ' ')
}
function Answer_4() {
    if (document.getElementById("кашель").checked)  {
        Infection = Infection + 2*Symptoms_multi;
        Medical_failure = Medical_failure + Symptoms_multi;
        Zone = Zone + Symptoms_multi;
        Bleeding = Bleeding +Symptoms_multi
    }
    if (document.getElementById("хрип").checked)  {
        Bleeding = Bleeding + 2*Symptoms_multi;
        Infection=Infection+Symptoms_multi;
        Zone=Zone+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("рвота").checked)  {
        Infection=Infection+3*Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Medical_failure=Medical_failure+1**Symptoms_multi
    }
    if (document.getElementById("резкая боль").checked)  {
        Zone=Zone+2*Symptoms_multi;
        Bleeding=Bleeding+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
        Panic=Panic+Symptoms_multi
    }
    if (document.getElementById("длительная боль").checked)  {
        Panic=Panic+Symptoms_multi;
        Zone=Zone +Symptoms_multi;
        Bleeding=Bleeding+Symptoms_multi;
        Infection=Infection+Symptoms_multi
    }
    if (document.getElementById("мигрень").checked)  {
       Panic=Panic+3*Symptoms_multi;
       Zone=Zone+Symptoms_multi;
       Infection=Infection+Symptoms_multi;
       Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("кровотечение").checked)  {
        Bleeding=Bleeding+3*Symptoms_multi;
        Zone=Zone+Symptoms_multi;
        Infection=Infection+Symptoms_multi;
        Medical_failure=Symptoms_multi+Symptoms_multi
    }
    if (document.getElementById("слабость").checked)  {
        Infection=Infection+2*Symptoms_multi;
        Zone=Zone+Symptoms_multi;
        Infection=Infection+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("обширная потеря крови").checked)  {
        Bleeding=Bleeding+3*Symptoms_multi;
        Zone=Zone+Symptoms_multi;
        Infection=Infection+2*Symptoms_multi
    }
    if (document.getElementById("галлюцинации").checked)  {
        Panic=Panic+3*Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("амнезия").checked)  {
        Panic=Panic+3*Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
    }
    if (document.getElementById("потеря чувствительности").checked)  {
        Infection=Infection+2*Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Panic=Panic+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("головокружение").checked)  {
        Zone=Zone+Symptoms_multi;
        Panic=Panic+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
        Bleeding=Bleeding+Symptoms_multi
    }
    if (document.getElementById("жар").checked)  {
        Infection=Infection+2*Symptoms_multi;
        Zone=Zone+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
        Bleeding=Bleeding+Symptoms_multi
    }
    if (document.getElementById("тремор").checked)  {
        Panic=Panic+2*Symptoms_multi;
        Infection=Infection+Symptoms_multi;
        Zone=Zone+Symptoms_multi;
    }
    if (document.getElementById("неадекватное поведение").checked)  {
        Panic=Panic+3*Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
    }
    if (document.getElementById("упадок сил").checked)  {
        Zone=Zone+2*Symptoms_multi;
        Panic=Panic+2*Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi;
        Infection=Infection+Symptoms_multi
    }
    if (document.getElementById("облучение").checked)  {
        Panic=Panic+Symptoms_multi;
        Zone=Zone+2*Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
    if (document.getElementById("недавний контакт с артефактами").checked)  {
        Zone=Zone+2*Symptoms_multi;
        Panic=Panic+Symptoms_multi;
        Bleeding=Bleeding+Symptoms_multi;
        Infection=Infection+Symptoms_multi;
        Medical_failure=Medical_failure+Symptoms_multi
    }
}


class Complications extends React.Component{
    render() {
        return(
            <div>
                <p>Врачебная ошибка {Medical_failure}</p>
                <p>Инфекция {Infection}</p>
                <p>Кровотечение {Bleeding}</p>
                <p>Паника {Panic}</p>
                <p>Влияние зоны {Zone}</p>
                <p>Рандом диагностики {diagnosis_random_min} - {diagnosis_random_max}</p>
                <p>Рандом операции {operation_random_min} - {operation_random_max}</p>
                <p>Навык врача {medic_skill}</p>
                <p>Необходимое вмешательство: {operation_kit}</p>
            </div>
        )
    }
}
class Personal_Data extends React.Component{
    handleClick1 () {
        Answer_1();
        return(
            ReactDOM.render(<Origin_Info/>, document.getElementById('root')),
            ReactDOM.render(<Complications/>, document.getElementById('count'))
        )
    }
    render() {
        return (
            <div className="questions" >
                <div className="question" >
                    <h3> Пол: </h3>
                    <label>
                        Мужчина
                        <input type="radio" name="sex" id="male" />
                    </label>
                    <label>
                        Женщина
                        <input type="radio" name="sex" id="female"/>
                    </label>
                </div>
                <div className='question'>
                    <h3>  Телосложение </h3>
                    <label>
                        Тучное
                        <input type="radio" name="body" id="fat" />
                    </label>
                    <label>
                        Обычное
                        <input type="radio" name="body" id="normal"/>
                    </label>
                    <label>
                        Атлетическое
                        <input type="radio" name="body" id="athletic"/>
                    </label>
                </div>
                <div className='question'>
                    <h3>  Возраст </h3>
                    <input className='возраст' type="text" id="age"/>
                </div>
                <input type="button" value="далее"  onClick={this.handleClick1}/>
            </div>
        )
    }
}
class Origin_Info extends React.Component {
    handleClick2 () {
       Answer_2();
        return(
            ReactDOM.render(<Wound_info/>, document.getElementById('root')),
            ReactDOM.render(<Complications/>, document.getElementById('count'))
        )
    }
    render() {
        return <div className="questions">
            <div className="question">
                <h3> Сталкерский опыт </h3>
                <label>
                    Новичок
                    <input type="radio" name="proficiency" id="newbie"/>
                </label>
                <label>
                    Опытный
                    <input type="radio" name="proficiency" id="skilled"/>
                </label>
                <label>
                    Считай легенда
                    <input type="radio" name="proficiency" id="legendary"/>
                </label>
            </div>
            <div className="question">
                <h3> Уровень достатка </h3>
                <label>
                    Изредка видит гроши
                    <input type="radio" name="life_quality" id="poor"/>
                </label>
                <label>
                    Стабильно зарабатывает
                    <input type="radio" name="life_quality" id="average"/>
                </label>
                <label>
                    Купается в деньгах
                    <input type="radio" name="life_quality" id="rich"/>
                </label>
            </div>
            <div className="button">
                <input type="submit" value="далее" onClick={this.handleClick2}/>
            </div>
        </div>
    }
}
class Wound_info extends React.Component {
    handleClick3 () {
        Answer_3()
        return(
            ReactDOM.render(<Symptoms/>, document.getElementById('root')),
            ReactDOM.render(<Complications/>, document.getElementById('count'))
        )
    }
    render() {
        return (
            <div className="questions">
                <div className="question">
                    <h3> Тип травмы </h3>
                    <label>
                        Огнестрельное ранение
                        <input type="radio" name="wound_type" id="gunshot"/>
                    </label>
                    <label>
                        Ранение иного характера
                        <input type="radio" name="wound_type" id="other"/>
                    </label>
                </div>
                <div className="question">
                    <h3> Поврежденный участок тела </h3>
                    <label>
                        Голова
                        <input type="radio" name="wounded_limb" id="head"/>
                    </label>
                    <label>
                        Конечности
                        <input type="radio" name="wounded_limb" id="leg"/>
                    </label>
                    <label>
                        Торс
                        <input type="radio" name="wounded_limb" id="torso"/>
                    </label>
                </div>
                <div className="question">
                    <h3> Время с момента получения ранения </h3>
                    <label>
                        Менее 30 минут
                        <input type="radio" name="wounded_time" id="<30"/>
                    </label>
                    <label>
                        30 - 45 минут
                        <input type="radio" name="wounded_time" id="30-45"/>
                    </label>
                    <label>
                        45 минут - 1.5 часа
                        <input type="radio" name="wounded_time" id="45-90"/>
                    </label>
                    <label>
                        более полутора часов
                        <input type="radio" name="wounded_time" id="90+"/>
                    </label>
                </div>
                <div className="button">
                    <input type="submit" value="далее" onClick={this.handleClick3}/>
                </div>
            </div>
        )
    }
}
class Symptoms extends  React.Component {
    handleClick4 () {
        Answer_4()
        Symp_count()
        return(
            ReactDOM.render(<Anamnesis/>, document.getElementById('root')),
            ReactDOM.render(<Complications/>, document.getElementById('count'))
        )
    }
    render() {
        return (
            <div className="questions" >
                <h3>Симптомы:</h3>
                <div className="checks">
                    <label>
                        кашель
                    <input type="checkbox" name ="symptoms" id = "кашель"/>
                    </label>
                    <label>
                        хрип
                        <input type="checkbox" name ="symptoms" id = "хрип"/>
                    </label>
                    <label>
                        рвота
                        <input type="checkbox" name ="symptoms" id = "рвота"/>
                    </label>
                    <label>
                        резкая боль
                        <input type="checkbox" name ="symptoms" id = "резкая боль"/>
                    </label>
                    <label>
                        длительная боль
                        <input type="checkbox" name ="symptoms" id = "длительная боль"/>
                    </label>
                    <label>
                        мигрень
                        <input type="checkbox" name ="symptoms" id = "мигрень"/>
                    </label>
                    <label>
                        кровотечение
                        <input type="checkbox" name ="symptoms" id = "кровотечение"/>
                    </label>
                    <label>
                        слабость
                        <input type="checkbox" name ="symptoms" id = "слабость"/>
                    </label>
                    <label>
                        обширная потеря крови
                        <input type="checkbox" name ="symptoms" id = "обширная потеря крови"/>
                    </label>
                    <label>
                        галлюцинации
                        <input type="checkbox" name ="symptoms" id = "галлюцинации"/>
                    </label>
                    <label>
                        амнезия
                        <input type="checkbox" name ="symptoms" id = "амнезия"/>
                    </label>
                    <label>
                        потеря чувствительности
                        <input type="checkbox" name ="symptoms" id = "потеря чувствительности"/>
                    </label>
                    <label>
                        головокружение
                        <input type="checkbox" name ="symptoms" id = "головокружение"/>
                    </label>
                    <label>
                        жар
                        <input type="checkbox" name ="symptoms" id = "жар"/>
                    </label>
                    <label>
                        тремор
                        <input type="checkbox" name ="symptoms" id = "тремор"/>
                    </label>
                    <label>
                        неадекватное поведение
                        <input type="checkbox" name ="symptoms" id = "неадекватное поведение"/>
                    </label>
                    <label>
                        упадок сил
                        <input type="checkbox" name ="symptoms" id = "упадок сил"/>
                    </label>
                    <label>
                        облучение
                        <input type="checkbox" name ="symptoms" id = "облучение"/>
                    </label>
                    <label>
                        недавний контакт с артефактами
                        <input type="checkbox" name ="symptoms" id = "недавний контакт с артефактами"/>
                    </label>
                </div>
                <div className="button" >
                    <input type="button" value="далее"  onClick={this.handleClick4}/>
                </div>
            </div>
        )
    }

}
class Anamnesis extends React.Component{
    handleClick5 () {
        return(
            ReactDOM.render(<Origin_Info/>, document.getElementById('root')),
            ReactDOM.render(<Complications/>, document.getElementById('count'))
        )
    }
    render() {
        return <div className="questions">
            <div className="question">
                {t1}, возраст: {t2}, телосложение {t3}.
                <p></p>
                Пациент является {t4}, с {t5} уровнем жизни.
                <p></p>
                {t6} ранение в {t7}. Ранение получено {t8} назад.
                <p></p>
                Во время обследования были установлены следующие симптомы: {t9}
            </div>
            <div>
                <p></p>
                Назначенное лечение:
                {operation_kit}
            </div>
            <div className="button">
                <input type="button" value="далее" onClick={this.handleClick5}/>
            </div>
        </div>
    }
}


// eslint-disable-next-line react/jsx-pascal-case
ReactDOM.render(<Personal_Data/>, document.getElementById('root'));
ReactDOM.render(<Complications/>, document.getElementById('count'));


