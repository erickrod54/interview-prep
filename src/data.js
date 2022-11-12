import { bigo1stgraph, bigo2ndgraph, bigoconst, bigo3const, bigochart } from './assets'

/**interview-prep-app - version 3 - data js - 
 * Features: 
 * 
 *     --> Adding 'big o complexity constant time' 
 *          assets to graphData. 
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

export const nemo = ['nemo'];

export const graphsData = [
    {
        id:1,
        image:bigo1stgraph
    },
    {
        id:2,
        image:bigo2ndgraph
    },
    {
        id:3,
        image:bigoconst
    },
    {
        id:4,
        image:bigo3const
    },
    {
        id:5,
        image:bigochart
    }
]

export const everyoneCharacter = [
 'dory',
 'bruce',
 'marlin',
 'nemo',
 'gill',
 'bloat',
 'nigel',
 'squirt',
 'darla',
 'hank'
]

export const largeArray = new Array(1000).fill('nemo')
