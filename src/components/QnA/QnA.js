import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div className='qna-container'>
            <div>
                <h4>How does react work?</h4>
                <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
            <div>
                <h4>Difference between props and state?</h4>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. Props (short for “properties”) and state are both plain JavaScript objects. While both hold information
                    that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
            </div>
            <div>
                <h4>Why we use useEffect rather than calling api?</h4>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the
                    render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects.</p>
            </div>
        </div>
    );
};

export default QnA;