import { bigo1stgraph, bigo2ndgraph } from './assets'

/**interview-prep-app - version 2 - data js - 
 * Features: 
 * 
 *     --> Building 'graphsData' to handle
 *         assets.
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
