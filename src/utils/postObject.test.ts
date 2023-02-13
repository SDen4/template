import { postObject } from './postObject';

test('Post object test', () => {
  const params = { name: 'John' };
  const result = postObject(params);
  const rightResult = {
    'body': '{"name":"John"}',
    'headers': { 'Content-Type': 'application/json;charset=uth-8' },
    'method': 'POST',
  };

  expect(result).toEqual(rightResult);
});
