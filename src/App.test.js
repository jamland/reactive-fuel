import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

const CoolComponent = ({greeting}) => (
    <div>
        <h1>{greeting}</h1>
        <p>Greeting</p>
    </div>
);

it('should render the greeting', () => {
  const component = shallow(<CoolComponent greeting="hello world" />)
  const actual = component.node;
  const expected = <h1>hello world</h1>
  expect(actual).toIncludeJSX(expected)
});
