import HPStatus from '../src/health';

test('HPStatus text', () => {
  const persons = [
    { name: 'Test', health: 90 },
    { name: 'Test', health: 40 },
    { name: 'Test', health: 10 },
  ];

  for (let i = 0; i < persons.length; i += 1) {
    const result = HPStatus(persons[i]);
    if (persons[i].health > 50) {
      expect(result).toBe('healthy');
    } else if (persons[i].health <= 50 && persons[i].health > 15) {
      expect(result).toBe('wounded');
    } else {
      expect(result).toBe('critical');
    }
  }
});
