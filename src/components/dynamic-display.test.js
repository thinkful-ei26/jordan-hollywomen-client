import React from 'react';
import {shallow} from 'enzyme';

import DynamicDisplay from './dynamic-display';

describe('<DynamicDisplay />', () => {
    it('Renders without crashing', () => {
        shallow(<DynamicDisplay />);
    });

    it('Renders images and text on submit', () => {
        const imgs = ['img1', 'img2']
        const wrapper = shallow(<DynamicDisplay text={text} />);
        wrapper.setState({
            imgs
        });
        lis.forEach((li, i) => {
            expect(li.text()).toEqual(imgs[i])
        });
    });


});


