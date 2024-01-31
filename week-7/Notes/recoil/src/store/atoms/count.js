import { atom, selector } from 'recoil';

export const countAtom = atom({
    key: "countAtom",  //unique id in respect to other atoms
    default: 0         // default value of th atom
});


export const evenSelector = selector({
    key : 'evenSelector',
    get : ({get}) => {
        const count =  get(countAtom);
        return !Boolean(count % 2);
    }
})