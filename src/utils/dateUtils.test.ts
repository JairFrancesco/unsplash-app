import { formatDate } from './dateUtils';

describe('formatDate', () => {
  it('should format the date string correctly', () => {
    const dateString = '2023-08-12T00:00:00Z';
    const result = formatDate(dateString);
    expect(result).toBe('Taken on August 12, 2023');
  });

  it('should handle different date formats', () => {
    const dateString = '12/08/2023';
    const result = formatDate(dateString);
    expect(result).toBe('Taken on December 8, 2023');
  });

  it('should return "Invalid Date" for an invalid date string', () => {
    const invalidDateString = 'invalid-date';
    const result = formatDate(invalidDateString);
    expect(result).toBe('Taken on Invalid Date');
  });
});
