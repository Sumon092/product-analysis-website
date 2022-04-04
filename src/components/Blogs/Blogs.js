import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <h1>What is Semantic tag</h1>
                <p>
                    Ans: Semantic tag defines clear meaning about element to  and browser also,any can understand by name that tag what can be.before semantic tag everybody have used div to declare a section name,Header,Nav,Form,article etc.But Html5 brigs solution for those ambiguity.We can declare a header by the header tag,nav by nav tag.non-semantic tag could tell nothing about tag.But semantic tag makes our coding more meaningful and clear by its name.Browser can read this by its name.semantic tag makes disappear coding ambiguity to browser and also programmer.

                </p>
            </div>
            <div>
                <h1>Difference between block,inline and inline-block</h1>
                <p>Ans: CSS have two different types of boxes.Block and Inline. Web browser treats every element as a kind of box.A block element always starts on a new line and fills up the horizontal left and right space on the web page.We can add margin and padding all four sides of block element.Some example of block element is h2,P etc.

                    Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are span , strong, and img tags.

                    Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare display: inline-block in your CSS code.
                </p>
            </div>
        </div>
    );
};

export default Blogs;