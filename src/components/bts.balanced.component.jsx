import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 27.09 - BTSBalanced  
 * - Features: 
 * 
 *     --> Developing BTS Balanced concept. 
 * 
 *     --> Destructuring unbalanced tree from the context.
 * 
 * Note: Pending to re structure imports using the index.
 */

const BTSBalanced = () => {

    const { graphsData } = useAppContext()
    //console.log(' graphsData ==> ', graphsData)
    
    const unbalancedavltreepng = graphsData[22].image;

    return(
        <DataStructuresWrapper>
            <h2>BTS Balanced</h2>

            <p>
                this kind of tree they have small variations from a <strong> BTS </strong>
                and great advantages, becuase both trees are able to rebalanced themselves 
                so using these trees i can have as result the <strong> 'balanaced or most balanced' </strong>
                tree, that helps a lot when permormed <strong> insertion and lookup </strong>
                methods
            </p>

            <p>
                there are two ways of make a tree <strong> 'balance' </strong>, and 
                it is achieved by using:
            </p>

            <ul>
                <li>
                    <strong> AVL tree </strong>
                </li>
                <li>
                    <strong> Red Black tree </strong>
                </li>
            </ul>

            <h3> AVL tree </h3>

            <p>
                this tree when it comes to balance, it will re order the tree in a sequencial way, if the node
                that is unbalncing the tree is layers down in the tree, it will como back in the exact same 
                sequence that the unbalnced node was inserted, and reorder the node layers up to get balanced
                in the tree
            </p>

            <p>
                let's make an example performing the following insertions:
            </p>
            
            <ul>
                <li>
                    <strong> 77 </strong>
                </li>
                <li>
                    <strong> 80 </strong>
                </li>
            </ul>

            <p>
                for this purpose let's use visualgo
            </p>

            <p>
                once the insertion is done, i will get a BTS like this <strong> (unbalanced tree) </strong>:
            </p>

            <img src={unbalancedavltreepng} className='large' alt="unbalanced avl treepng"/>

            <h3> Red black tree </h3>

            <p>
                the nodes that provoque an unbalanced tree are mark as red nodes and the nodes that become 
                in parents to reorder are marked as black nodes, that way the tree keeps reordering 
                dynamicly
            </p>
        </DataStructuresWrapper>
    )
}

export default BTSBalanced;