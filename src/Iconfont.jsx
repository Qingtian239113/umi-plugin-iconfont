import React, {memo} from 'react';
import './iconfont.css';

const Index = memo((props) => {
    return <svg {...props} className={'icon ' + props.className} aria-hidden="true">
        <use xlinkHref={`#${props.type}`}/>
    </svg>
});

const Iconfont = (props) => {
    return <Index {...props} />
};

export default Iconfont;
