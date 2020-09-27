
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

const handleToggle = ()=> {

const el = findDOMNode(this.refs.slide);
$(el).slideToggle();


 

}

export default handleToggle;
