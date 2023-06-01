import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 25.14 - 
 * TreeDataStructure - Features: 
 * 
 *     --> Work in progress 'Binary Tree kinds' Concept.
 * 
 *     --> Developing binary search tree concept
 *          through O(log N).
 * 
 * Note: pending to add binary tree assets
 */

const TreeDataStructure = () => {

    const { graphsData } = useAppContext();

    console.log(' graphsData ==>', graphsData)

    const treesdatastructure = graphsData[16].image;
    const binarytreeconcept = graphsData[17].image;
    const kindbinarytrees = graphsData[18].image;
    const binarysearchtreeconcept = graphsData[19].image;
    const bigocomplexitychart = graphsData[4].image;

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

            <img src={binarytreeconcept} alt='binary tree concept'/>

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
                till the end <strong> ( left figure ) </strong>
            </p>

            <h3>Full Binary tree:</h3>

            <p>
                a tree full binary tree is a tree that has gaps, means that has nodes that has 
                from the root node descending nodes or child nodes that has 0 child nodes, and this
                creates gaps before the structure ends <strong> ( right figure ) </strong>
            </p>

            <img src={kindbinarytrees} alt='kind binary trees'/>

            <p>
                as can be seen, each <strong> 'layer' </strong> of the binary tree define 
                if it's a <strong> Perfect Binary tree </strong> or a <strong> Full Binary tree </strong> 
                and this defines its complexity the <strong> Perfect Binary tree </strong>
                is desirable because has less complexity than <strong> Full Binary tree </strong>
            </p>

            <p>
                in a <strong> Perfect Binary tree </strong> half of the nodes are in the <strong> last layer </strong>
                of the tree and by organizing the data in that way i have less complexity at the 
                <strong> root node </strong> that highly desirable because makes easy to perform 
                operations from the <strong> root node </strong> to the <strong> bottom layer </strong>
                and this type of structure creates a <strong> new complexity notation </strong>
            </p>

            <img src={binarysearchtreeconcept} alt='binary search tree concept'/>

            <p>
                And this notation is:
            </p>


            <section className="code-block">
                <p><strong> O( log N ) </strong></p>
            </section>

            <p>
                this is related to <strong> 'binary search tree' </strong>
            </p>

            <p>
                so from this point is there a way to calculate the number of nodes of 
                the binary search tree
            </p>

            <section className="code-block">
                <p><strong> level 0: </strong> 2 ^ 0 = 1 <strong> (root level) </strong></p>
                <p><strong> level 1: </strong> 2 ^ 1 = 2 <strong> (level 1) </strong></p>
                <p><strong> level 2: </strong> 2 ^ 2 = 4 <strong> (level 2) </strong></p>
                <p><strong> level 3: </strong> 2 ^ 3 = 8 <strong> (level 3) </strong></p>
            </section>

            <p>
                this last example is based in a <strong> perfect binary tree </strong>
            </p>

            <p>
                so the formal way to express this calculation is 
            </p>

            <section className="code-block">
                <p><strong> # of nodes </strong> 2 ^ h</p>
                <p>where <strong> 'h' </strong> is the height of the tree</p>
            </section>

            <p>
                so knowing the <strong> levels (height) </strong> of the binary tree 
                i can calculate how many <strong> 'nodes' </strong> the tree has
            </p>

            <p>
                but there is one gotcha if i evaluate in the graph how many nodes the
                tree has 
            </p>

            <img src={binarysearchtreeconcept} alt='binary search tree concept'/>

            <p>
                it results in <strong> 7 nodes </strong> not <strong> 8 nodes </strong>
                so this calculation is made with log
            </p>

            <section className="code-block">
                <p><strong> # of nodes </strong> 2 ^ h - 1 </p>
                <p>where <strong> 'h' </strong> is the height of the tree</p>
                <p>and it gets simplified in the following way: </p>
                <p><strong> log nodes </strong> = <strong> height </strong></p>
                <p>so:</p>
                <p><strong> log 100 </strong> = <strong> 2 </strong></p>
                <p> beacause the base calculation is: </p>
                <p><strong> 10 ^ 2 </strong> = <strong> 100 </strong></p>
            </section>

            <p>
                so the calculation <strong> divides the nodes </strong> so i can 
                perform efficiently methods as <strong> lookup, insert, and delete </strong>
                in several posibilities represented by <strong> O(log N) </strong>
            </p>

            <p>
                As it follows in the the graph the <strong> O(log N) </strong> is a much 
                better case scenario than <strong> O(n) </strong> almost at pair with 
                <strong> O(1) </strong>
            </p>

            <img src={bigocomplexitychart} alt="big o complexity chart"/>

        </DataStructuresWrapper>
    )
}

export default TreeDataStructure;