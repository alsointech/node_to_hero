
import { findHeroById } from "./services/hero.service";
// ? null operator


// if not an updated version of ecmascript nulish operator not a good idea
console.log(findHeroById(1)?.name ?? 'Hero not found')
