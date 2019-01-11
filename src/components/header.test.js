import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header text="HollyWomenHollyWomen tells you the percentage of females cast in any TV Show or Movie." />);
    });

    it('Renders the text', () => {
        const text = "HollyWomenHollyWomen tells you the percentage of females cast in any TV Show or Movie.";
        const wrapper = shallow(<Header text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});


