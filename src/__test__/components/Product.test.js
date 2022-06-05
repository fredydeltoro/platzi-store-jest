import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Product from '../../components/Product'
import ProductMock from '../../__mocks__/ProductMock'

describe('<Product />', () => {
  test('Render del componente', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    )
    expect(product.length).toEqual(1)
  })
  
  test('Comprobar el boton de prueba', () => {
    const handleAddCart = jest.fn()
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddCart}
        />
      </ProviderMock>
    )
    wrapper.find('button').simulate('click')
    expect(handleAddCart).toHaveBeenCalledTimes(1)
  })
})