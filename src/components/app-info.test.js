import React from 'react';
import {shallow} from 'enzyme';

import AppInfo from './app-info';

describe('<AppInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<AppInfo text="What is HollyWomen? If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor male leads over females. Netflix and other streaming sites have even created categories like 'Strong Female Lead' because women with starring roles in Hollywood is such a rarity.How do I use it?Enter a search term and select either TV or Movie from the drop down menu to get the posters and titles from everything that matches. All you have to do next is click on the poster!" />);
    });

    it('Renders the text', () => {
        const text = "What is HollyWomen? If you've ever searched on IMDB, you've undoubtedly noticed that Hollywood tends to heavily favor male leads over females. Netflix and other streaming sites have even created categories like 'Strong Female Lead' because women with starring roles in Hollywood is such a rarity.How do I use it?Enter a search term and select either TV or Movie from the drop down menu to get the posters and titles from everything that matches. All you have to do next is click on the poster!";
        const wrapper = shallow(<AppInfo text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});


