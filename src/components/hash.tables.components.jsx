import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.07 - HashTables  
 * - Features: 
 * 
 *     --> Building in progress 'HashTables'
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */

const HashTables = () => {

    return(
        <DataStructuresWrapper>
            <h2>Hash Tables Data structure</h2>

            <p>
                <strong>hash tables</strong> are the second type 
                of data structures depending on 
                the language or context may have 
                other names as <strong>hash maps,
                maps, dictionaries, objects</strong>
                and slight variations
            </p>

            <p>
                hash tables are extremily useful and
                is common use across languages
            </p>

            <p>
                so i have the following hash table
            </p>

            <section className="code-block">
                <p>basket.grapes = 10000</p>
            </section>

            <p>
                is a hash table of basket with 
                the <strong>'key'</strong> grapes 
                and using the key i have access to 
                the <strong>data</strong>
            </p>

            <p>
                so <strong>hash tables</strong> use 
                <strong>hash function</strong> to find
                the items
            </p>

            <p>
                hash functions make use of <strong>SHA-1,
                SHA-256</strong> to generate a hash code 
                and with this code get a unique <strong>
                code number combination for the data</strong> 
            </p>

            <a href="https://www.miraclesalad.com/webtools/md5.php">
                miraclesalad hash md5 generator
            </a>

        </DataStructuresWrapper>
    )
}

export default HashTables;