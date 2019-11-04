import { style } from 'typestyle';


export const gridWrapper = style({
    display: 'grid',
    gridTemplateRows: '4rem 1fr',
    gridTemplateAreas: " 'title' 'description' ", 
    border: "solid .1rem black",
    backgroundColor: '#00b2cc',
    padding: '1rem',
    margin: '1rem',
    filter: 'drop-shadow(3mm 2mm 1mm #78909c)'
})

export const title = style({
    gridArea: 'title',
    textAlign: 'left',
    margin: '0rem',
    display: 'inline-block',

})

export const description = style({
    gridArea: 'description',
    backgroundColor: '#FFF',
})