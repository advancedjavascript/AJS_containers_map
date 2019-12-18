import ErrorRepository from './app';

test('error 1', () => {
  const expected = new ErrorRepository();
  const resieved = 'Error: uncorrect name.';
  expect(resieved).toEqual(expected.translate(1));
});

test('error 2', () => {
  const expected = new ErrorRepository();
  const resieved = 'Error: uncorrect type.';
  expect(resieved).toEqual(expected.translate(2));
});

test('unknown error', () => {
  const expected = new ErrorRepository();
  const resieved = 'Unknown error.';
  expect(resieved).toEqual(expected.translate(14));
});
