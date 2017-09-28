import Link from 'next/link';
import React from 'react';
import {makeStore} from '../store/index';
import wrapper from './wrapper';

export default wrapper(makeStore)(({url: {pathname}}) => (
    <div>
        <div>Using Next.js default prop in a wrapped component: {pathname}</div>
        <nav>
            <Link href='/'><a>Navigate to index</a></Link>
        </nav>
    </div>
));