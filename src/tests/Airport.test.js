import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import AirbpLogo from '../components/svg/airbpLogo'
import {FuelTypeSticker} from '../components/airport/FuelProvider'
import {AirportNavigation} from '../components/airport/AirportNavigation'

describe('AirBP logo', () => {
    it('should render SVG', () => {
        const component = shallow(<AirbpLogo />)
        const actual = component.node.type
        const expected = 'svg'
        expect(actual).toEqual(expected)
    })
})

describe('Fuel Sticker', () => {
    const component = shallow(<FuelTypeSticker type="JET FUEL" />)
    it('should have right classes', () => {
        const actual = component.node.props.className.includes('fuel-sticker jetfuel')
        console.log(component.node);
        const expected = true
        expect(actual).toEqual(expected)
    })
    it('should be div', () => {
        const actual = component.node.type
        const expected = 'div'
        expect(actual).toEqual(expected)
    })
    it('should have right text', () => {
        const actual = component.node.props.children
        const expected = 'JET FUEL'
        expect(actual).toEqual(expected)
    })
})

describe('AirportNav', () => {
    const AirportNav = shallow(<AirportNavigation
                          activeTab='1'
                          rSelected='jetfuel'
                      />)
})
