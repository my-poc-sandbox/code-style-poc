import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './Header';

describe('component: Header', () => {
  it('renders the expected title and subtitle', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    const header = shallow(<Header title={title} subtitle={subtitle} />);

    const headerTitle = header.find('[data-test-id="header-title"]');
    const headerSubtitle = header.find('[data-test-id="header-subtitle"]');

    expect(headerTitle.exists()).toEqual(true);
    expect(headerTitle.text()).toEqual(title);

    expect(headerSubtitle.exists()).toEqual(true);
    expect(headerSubtitle.text()).toEqual(subtitle);
  });

  it('renders only the title when no subtitle is passed', () => {
    const header = shallow(<Header title="Test Title" />);

    expect(header.find('[data-test-id="header-title"]').exists()).toEqual(true);
    expect(header.find('[data-test-id="header-subtitle"]').exists()).toEqual(false);
  });
});
