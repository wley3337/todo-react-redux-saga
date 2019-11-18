import { style } from 'typestyle';

export const grid = style({
    display: 'grid',
    gridTemplateRows: ".5fr 1fr 1fr",
    gridTemplateAreas: "'x' 'form' 'y'",
    justifyContent: 'center'
})
