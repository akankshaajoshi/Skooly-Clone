import { screen } from '@testing-library/react';
import { fetchCourseData } from './../lib/fetchData';

test('check whether the course data is working', () => {
  return expect(fetchCourseData());
});
