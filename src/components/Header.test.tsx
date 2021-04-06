import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('component: Header', () => {
  it('renders the expected title and subtitle', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    const header = shallow(<Header title={title} subtitle={subtitle} />);

    expect(header.find('[data-test-id="header-title"]').text()).toEqual(title);
    expect(header.find('[data-test-id="header-subtitle"]').text()).toEqual(subtitle);
  });

  it('renders only the title when no subtitle is passed', () => {
    const header = shallow(<Header title="Test Title" />);

    expect(header.find('[data-test-id="header-title"]').exists()).toBeTruthy();
    expect(header.find('[data-test-id="header-subtitle"]').exists()).toBeFalsy();
  });
});
