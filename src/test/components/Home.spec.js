import test from 'tape'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {setupJsdom} from '../jsdom'
import Home from '../../components/Home'

configure({ adapter: new Adapter() })
setupJsdom()

const wrapper = mount(<Home />)

test('Home component has an image and Logo', (t) => {
  t.deepEqual(
    (wrapper.find('img').length),
    1
  )

  t.deepEqual(
    (wrapper.find('svg').length),
    1
  )

  /*
  t.pass(
    expect(wrapper.find('p').first().text()).toEqual('A better way to enjoy every day')
  )

  t.pass(
    expect(wrapper.find('p').last().text()).toEqual('© 2017 Broccoli & Co. All rights reserved.')
  )
  */
  t.end()
})
