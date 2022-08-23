let mq1280 = window.matchMedia("(max-width: 1280px)");
export const style1 = () => {
    let style = { fontSize: '11px' }
    if (mq1280.matches) { style = { fontSize: '8.4px' } }
    return style
}
export const style2 = () => {
    let style = { fontSize: '13px', fontWeight: 500 }
    if (mq1280.matches) { style = { fontSize: '10px', fontWeight: 500 } }
    return style
}
export const style3 = () => {
    let style = { fontSize: '11px', fontWeight: 400, cursor: 'pointer' };
    if (mq1280.matches) { style = { fontSize: '8.4px', fontWeight: 400, cursor: 'pointer' } }
    return style
}
export const style4 = () => {
    return { height: '50px', fontWeight: 500, color: '#666666' }
}
export const style5 = () => {
    return { width: '275px', margin: '0 3px' }
}
export const style6 = () => {
    return { height: '15px', margin: '0 0 2px 0' }
}