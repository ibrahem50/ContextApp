import React ,{Component} from 'react';

class Booklist extends Component {
    state = {  }
    render() { 
        return (
            <div className="book-list">
                <ul>
                    <li>the way of kings</li>
                    <li>the name of the wind</li>
                    <li>the final empiree</li>
                </ul>
            </div>
        );
    }
}
 
export default Booklist;