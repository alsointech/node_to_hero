enum OWNER  {
    MARVEL= "Marvel",
    DC= "DC"
}

interface IHeroe {
    id: number;
    name: String,
    power: String,
    owner: OWNER
}

export const heroes: IHeroe[] = [
    {
        id: 1,
        name: "Ironman",
        power: "Money",
        owner: OWNER.MARVEL
    },
    {
        id: 2,
        name: "Spiderman",
        power: "Spider",
        owner: OWNER.MARVEL
    },
    {
        id: 3,
        name: "Batman",
        power: "Money",
        owner: OWNER.DC
    }
]