import { Edge } from './edge';
/////  SPECS  //////

describe('Edge', function () {
  let items: any[] = ['A', 'B', 'C', 'D', 'E']
  let from: string = randomChar(items);
  let to: string = randomChar(items);
  let weight: number = Math.floor(Math.random() * 100);
  let fixture = new Edge(from, to, weight);

  it('should set "from"', () => expect(fixture.from).toEqual(from));
  it('should set "to"', () => expect(fixture.to).toEqual(to));
  it('should set "weight"', () => expect(fixture.weight).toEqual(weight));
});

/// Faker library can potentially be a better option here
function randomChar(items: any[]): string {
  return items[Math.floor(Math.random() * items.length)];
}
