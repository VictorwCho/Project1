import { Sex } from 'src/app/enumerations/sex';
import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee( new Date(), 'Joe', 'Smith', Sex.Male, new Date())).toBeTruthy();
  });
});
