import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import quotes from '../data/quotes';
import colors from '../data/colors';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a wrapping element of id `quote-box`', () => {
    expect(app.find('#quote-box').exists()).toBe(true);
  });

  it('contains an element with id `text`', () => {
    expect(app.find('#text').exists()).toBe(true);
  });

  it('contains an element with id `author` inside `quote-box`', () => {
    expect(app.find('#quote-box').children('#author').length).toBe(1);
  });

//   it('contains an element with id `tweet-quote` inside `quote-box`', () => {
//     expect(app.find('#quote-box').children('#tweet-quote').length).toBe(1);
//   });

  it('initialises the `state` with a quote', () => {
    expect(app.state().quote).toEqual(quotes[0]);
  });

  it('initialises the `state` with a color scheme', () => {
    expect(app.state().color).toEqual(colors[0]);
  });

  describe('when clicking the `New Quote` button', () => {
    beforeEach(() => {
      app.find('#new-quote').simulate('click');
    });

    it('updates the `state` with a new quote', () => {
      expect(app.state().quote).not.toEqual(quotes[0]);
    });

    it('changes the color scheme', () => {
      expect(app.state().color).not.toEqual(colors[0]);
    });
  });
});
