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
        {name: 'Kira', image: CH1, delay: 3, percent: 20, z: 6},
        {name: 'Vova', image: CH2, delay: 1, percent: '-20', z: 5},
        {name: 'loX', image: CH3, delay: 1, percent: '20', z: 4},
        {name: 'Shluha', image: CH4, delay: 1, percent: '-20', z: 3},
        {name: 'Kek', image: CH5, delay: 1, percent: '20', z: 2},
        {name: 'Lol', image: CH6, delay: 1, percent: '-20', z: 1},
    ]

    const charInfo = [
        {
            title: 'something',
            role: 'Soldier',
            bio: 'Was born in 1972',
            skills:
                [
                    {
                        description: 'something',
                        name: 'something',
                    },
                    {
                        description: 'something',
                        name: 'something',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'something',
                    },
                    {
                        description: 'something',
                        name: 'something',
                    },
                ]
        },
        {
            title: 'something',
            role: 'Soldier',
            bio: 'Was born in 1972',
            skills:
                [
                    {
                        description: 'something',
                        name: 'something',
                    },
                    {
                        description: 'something',
                        name: 'something',
                    },
                ],
            weapons:
                [
                    {
                        description: 'something',
                        name: 'something',
                    },
                    {
                        description: 'something',
                        name: 'something',
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