import { bigo1stgraph, bigo2ndgraph, bigoconst, bigo3const, bigochart } from './assets'

/**interview-prep-app - version 8 - data js - 
 * Features: 
 * 
 *     --> Building 'n' data for space
 *         complexity    
 * 
 * Note: to generate url's dinamicly
 */

export const linksData = [
    {
      id:1,
      url:'/big-o-notation',
      name:'big o notation'   
    },
    {
      id:2,
      url:'/big-o-rule-book',
      name:'big o rule-book'
    },
    {
      id:3,
      url:'/space-complexity',
      name:'space complexity'
    }
]

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

export const boxes = [1,2,3,4,5]

export const boxes1 = [1,2,3,4,5,6,7,8]

export const boxesletters = [ 'a','b','c','d','e']

export const numbers = [1,2,3,4,5]

export const n = [1,2,3,4,5]
