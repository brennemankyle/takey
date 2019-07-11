import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { mockStyles, mockItemList, MockElement } from '../../mocks'
import ItemList from './ItemList'

const onClick = jest.fn()
const onMouseOver = jest.fn()

it('renders', () => {
  const wrapper = shallow(<ItemList
    styles={mockStyles}
    itemList={mockItemList}
    Item={MockElement} />)

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders removable', () => {
  const wrapper = shallow(<ItemList
    styles={mockStyles}
    itemList={mockItemList}
    Item={MockElement}
    removable={true} />)

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders no items', () => {
  const wrapper = shallow(<ItemList
    styles={mockStyles}
    itemList={[]}
    Item={MockElement}
    removable={true}
    noItemsText="None"
    onClick={onClick}
    onMouseOver={onMouseOver} />)

  wrapper.find('ul').simulate('mouseDown')
  wrapper.find('ul').simulate('mouseOver')

  expect(onClick).not.toBeCalled()
  expect(onMouseOver).not.toBeCalled()
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('should click', () => {
  const wrapper = shallow(<ItemList
    styles={mockStyles}
    itemList={mockItemList}
    Item={MockElement}
    onClick={onClick} />)

  wrapper.find('ul').simulate('mouseDown')

  expect(onClick).toBeCalled()
})

it('should mouseOver', () => {
  const wrapper = shallow(<ItemList
    styles={mockStyles}
    itemList={mockItemList}
    Item={MockElement}
    onMouseOver={onMouseOver} />)

  wrapper.find('ul').simulate('mouseOver')

  expect(onMouseOver).toBeCalled()
})