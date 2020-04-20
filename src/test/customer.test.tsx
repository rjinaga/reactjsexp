import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CustomerFormView from '../components/admin/customer/customer-form-view';
import { Customer } from '../models/customer/customer';

test('renders learn react link', () => {
  const tree = renderer.create(<CustomerFormView onSubmit={(customer: Customer) => Promise.resolve(true)}/>).toJSON()
  expect(tree).toMatchSnapshot();
});
