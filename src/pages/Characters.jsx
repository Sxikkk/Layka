import Character from "../components/Character/Character.jsx";
import CH1 from "../assets/images/CH1.png";
import CH2 from "../assets/images/CH2.png";
import CH3 from "../assets/images/CH3.png";
import CH4 from "../assets/images/CH4.png";
import CH5 from "../assets/images/CH5.png";
import CH6 from "../assets/images/CH6.png";
import CharacterList from "../components/CharacterList/CharacterList.jsx";
import CharacterCardList from "../components/CharacterCard/CharacterCardList/CharacterCardList.jsx";


const Characters = () => {

    const characters = [
        {name: 'Райдер', image: CH1, delay: 3, percent: 20, z: 6},
        {name: 'Кира', image: CH2, delay: 1, percent: '-20', z: 5},
        {name: 'Макс', image: CH3, delay: 1, percent: '20', z: 4},
        {name: 'Иван', image: CH4, delay: 1, percent: '-20', z: 3},
        {name: 'Юн', image: CH5, delay: 1, percent: '20', z: 2},
        {name: 'Эрика', image: CH6, delay: 1, percent: '-20', z: 1},
    ]

    const charInfo = [
        {
            title: 'Кира "Феникс" Азаева',
            role: 'Штурмовик',
            bio: 'Бывший спецназовец, которая потеряла семью в результате техногенной катастрофы. Присоединилась к сопротивлению, чтобы предотвратить повторение трагедии.',
            skills:
                [
                    {
                        description: 'После смерти активирует нанодроны, восстанавливающие часть здоровья.',
                        name: 'Возрождение',
                    },
                    {
                        description: 'Устанавливает огненные баррикады, которые наносят урон врагам при контакте.',
                        name: 'Огненный рубеж',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Автоматическая винтовка с подствольным огнемётом',
                    },
                ]
        },
        {
            title: 'Райдер "Шакал" Торрес',
            role: 'Разведчик',
            bio: 'Бывший контрабандист, хорошо знаком с пустынными территориями. Его кличка "Шакал" отражает его способность выживать в самых суровых условиях.',
            skills:
                [
                    {
                        description: 'Отмечает противников, попавших в его поле зрения.',
                        name: 'Следопыт',
                    },
                    {
                        description: 'Временно ослепляет врагов в зоне действия.',
                        name: 'Песчаная буря',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Винтовка с высокой точностью и арбалет для бесшумного устранения.',
                    },
                ]
        },
        {
            title: 'Эрика "Медведица" Кобе',
            role: 'Танк',
            bio: 'Родом из заснеженных северных регионов, Эрика привыкла к выживанию в экстремальных условиях. Она всегда защищает своих товарищей',
            skills:
                [
                    {
                        description: 'Создаёт огромный энергетический щит, который поглощает урон.',
                        name: 'Щитовая стена',
                    },
                    {
                        description: 'Атака в ближнем бою, сбивающая врагов с ног.',
                        name: 'Рывок медведя',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Тяжёлый пулемёт и боевой топор.',
                    },
                ]
        },
        {
            title: 'Иван "Гаджет" Марков',
            role: 'Инженер',
            bio: 'Гений электроники, создатель множества боевых устройств. Страдает от нехватки уверенности, но всегда находит выход из сложных ситуаций.',
            skills:
                [
                    {
                        description: 'Выпускает дронов, которые атакуют или лечат союзников.',
                        name: 'Боевые дроны',
                    },
                    {
                        description: 'Устанавливает невидимые мины, которые активируются при приближении врагов.',
                        name: 'Минное поле',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Штурмовая винтовка с подствольным электрошокером.',
                    },
                ]
        },
        {
            title: 'Юн "Тень" Чан',
            role: 'Снайпер',
            bio: 'Загадочный наёмник из восточной Азии. Её молчаливость и точность сделали её легендой.',
            skills:
                [
                    {
                        description: 'Уходит в невидимость на короткое время.',
                        name: 'Смертельная тишина',
                    },
                    {
                        description: 'Видит врагов сквозь препятствия на несколько секунд.',
                        name: 'Снайперский прицел',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Высокоточная снайперская винтовка и компактный пистолет.',
                    },
                ]
        },
        {
            title: 'Макс "Буря" О’Коннор',
            role: 'Подрывник',
            bio: 'Бывший пиротехник, который потерял всё из-за предательства своих коллег. С тех пор он стал бороться с коррупцией',
            skills:
                [
                    {
                        description: 'Запускает залп из нескольких гранат одновременно.',
                        name: 'Град гранат',
                    },
                    {
                        description: 'Использует взрыв, чтобы резко переместиться вперёд.',
                        name: 'Взрывной скачок',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'Гранатомёт и дробовик',
                    },
                ]
        }
    ]

    return (
        <div>
            <CharacterList characters={characters} />
            <CharacterCardList props={charInfo}/>
        </div>
    );
};

export default Characters;