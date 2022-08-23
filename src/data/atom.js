import { atom } from "recoil";

export const sidebarDisp_ = atom({
    key: "sidebar",
    default: "none"
});

export const tasksCard = atom({
    key: "tasks card",
    default: {
        main: true,
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false
    }
});

export const offerDetail = atom({
    key: 'offer detail',
    default: false
})

export const toggleInstructionModel = atom({
    key: 'toggleInsModel',
    default: 'insModelWrapperHide'
})

export const taskDetailCount = atom({
    key: 'taskDetailCount',
    default: {
        offers: 0,
        instructions: 0,
        supplements: 0,
        commands: 0,
        confirmer: 0
    }
})
export const offerStyle = atom({
    key: 'offerStyle',
    default: ''
})
export const offerAnimation = atom({
    key: 'offerAnimation',
    default: false
})
export const offerAnimationTemp = atom({
    key: 'offerAnimationTemp',
    default: false
})
export const pinAnimationTemp = atom({
    key: 'pinAnimationTemp',
    default: false
})
export const pinnedStyle_ = atom({
    key: 'pinnedStyle_',
    default: ''
})
export const incidentAnimationTemp = atom({
    key: 'incidentAnimationTemp',
    default: false
})
export const incidentStyle_ = atom({
    key: 'incidentStyle_',
    default: ''
})
export const blogAnimationTemp = atom({
    key: 'blogAnimationTemp',
    default: false
})
export const blogStyle_ = atom({
    key: 'blogStyle_',
    default: ''
})