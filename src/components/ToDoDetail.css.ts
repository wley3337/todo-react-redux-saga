import { style } from 'typestyle';


export const gridWrapper = style({
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: " 'title' 'description' "
})

export const title = style({
    gridArea: 'title',
    textAlign: 'center',
    margin: '0rem'

})

export const description = style({
    gridArea: 'description'
})