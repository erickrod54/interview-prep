import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 25.04 - 
 * TreeDataStructure - Features: 
 * 
 *     --> Developing Tree Data Structure concept.
 * 
 *     --> Work in progress 'Binary Tree' Concept
 * 
 * Note: pending to add binary tree assets
 */

const TreeDataStructure = () => {

    const { graphsData } = useAppContext();

    console.log(' graphsData ==>', graphsData)

    const treesdatastructure = graphsData[16].image;

    return(
        <DataStructuresWrapper>

            <h2>Tree Data Structure</h2>

            <p>
                The tree is a data structure in which the parent is related to a 
                son in a <strong> 'unidirectional way' </strong>, as can be seen in the image, it is an 
                inverse tree, where the <strong> top of the tree is the parent and the leaves descend from there </strong>, 
                and there are leaves that in turn are parents of other leaves, as <strong> is the case of '1' and '3' </strong>
            </p>

            <img src={treesdatastructure} alt='trees data structure'/>

            <p>
                Linked List is a kind of tree because each parent has a child related in <strong> 'unidirectional way' </strong>
                and it is <strong> hierarchical </strong> so as in the representation in the image this tree is compose
                in the following way:
            </p>

            <ul>
                <li>Root <strong> '1' </strong></li>
                <li>Parent <strong> '1' and '3'</strong></li>
                <li>Child <strong> '2', '3', '4', '6', '7'</strong></li>
                <li>Leaf <strong> '2', '4', '6', '7'</strong></li>
                <li>Siblings <strong> '2', '3', '4', '6', '7' </strong></li>
            </ul>

            <p>
                Lets talk about the most use trees data structures, there is many kinds of tree,
                but i will focus in the most use ( check the reference to access )
            </p>

            <h3>Binary Tree</h3>

            <p>
                A binary tree is a tree that has <strong> 'two node child' </strong>, and <strong> their child have exactly two node child </strong>,
                binaries trees has a set of rules that are as follows:
            </p>

            <ul>
                <li>Each <strong> 'node' </strong> can have either <strong> '0, 1, or 2 nodes' </strong></li>
                <li>Each child can have only <strong> 'one parent' </strong></li>
            </ul>

            <p>
                from this binary tree i will focus in two classifications:
            </p>

            <ul>
                <li>Perfect Binary tree</li>
                <li>Full Binary tree</li>
            </ul>

            <h3>Perfect Binary tree:</h3>

            <p>
                a tree that is perfectly full is a tree that has <strong> no gaps </strong>,
                has everything fill in, every parent node has a child node in descendant way
                till the end ( left figure )
            </p>

            <h3>Full Binary tree:</h3>

            <p>
                a tree full binary tree is a tree that has gaps, means that has nodes that has 
                from the root node descending nodes or child nodes that has 0 child nodes, and this
                creates gaps before the structure ends ( right figure )
            </p>
        </DataStructuresWrapper>
    )
}

export default TreeDataStructure;