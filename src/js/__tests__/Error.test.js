import Team from '../Team';
import Bowman from '../Bowman';


test('correct error', () => {
  expect(() => new Bowman()).toThrow('name отсутствует');
});

test('Unknown error', () => {
  const team = new Team();
  const bowman = new Bowman('test');
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow('Unknown error');
});
