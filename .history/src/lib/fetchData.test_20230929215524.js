import { screen } from '@testing-library/react';
import "axios" from axios;
import { fetchCourseData } from './fetchData';
import axios from 'axios';

test('check whether the course data is working', () => {
  return expect(fetchCourseData());
});
