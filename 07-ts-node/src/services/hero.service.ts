import { heroes } from "@/src/data/heroes";

export const findHeroById = (id: number) => {
    /* if (!heroes || heroes.length == 0 || !id) {
        return 0;
    }
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].id === id) {
            return heroes[i];
        }
    }
    return 0; */
    const hero = heroes.find(hero => hero.id === id);
    return hero;
}
