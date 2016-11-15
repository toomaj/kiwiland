/* tslint:disable:no-unused-variable */
import { RailInfoComponent } from './rail-info.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

/////  SPECS  //////
describe('RailInfoComponent', function () {
  let comp: RailInfoComponent;
  let fixture: ComponentFixture<RailInfoComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ RailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailInfoComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected title text', () => {
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
    expect(el.textContent).toMatch(/Rail Info/i,
      '<div>Should present "Rail Info" title</div>');
  });

  it('should return Truthy or Falthy', () => {
    expect(comp.findEdge('A', 'B')).toBeTruthy();
    expect(comp.findEdge('A', 'G')).toBeFalsy();
  });

  it('should add graph', () => {
    let [f, t, w] = ['H', 'I', 10];
    const graphCount = comp.edges.length;
    comp.addEdge(f, t, w);
    expect(comp.edges.length).toEqual(graphCount + 1);
  });

  it('should calculate distance of existing path', () => {
    let distHI = Math.floor(Math.random());
    let distJK = Math.floor(Math.random());
    comp.addEdge('H', 'I', distHI);
    comp.addEdge('J', 'K', distJK);
    expect(comp.routeDistnace(['H', 'I'])).toEqual(distHI);
    expect(comp.routeDistnace(['J', 'K'])).toEqual(distJK);
    expect(comp.routeDistnace(['A', 'B', 'C'])).toEqual(9);
    expect(comp.routeDistnace(['A', 'D'])).toEqual(5);
    expect(comp.routeDistnace(['A', 'D', 'C'])).toEqual(13);
    expect(comp.routeDistnace(['A', 'E', 'B', 'C', 'D'])).toEqual(22);
    expect(comp.routeDistnace(['A', 'E', 'D'])).toEqual('NO SUCH ROUTE');
    expect(comp.routeDistnace(['T', 'E', 'F'])).toEqual('NO SUCH ROUTE');
  });

  it('should have output text', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
    expect(el.textContent).toMatch(/Output #1, Distance of: A,B,C/);
    expect(el.textContent).toMatch(/Output #2, Distance of: A,D/);
    expect(el.textContent).toMatch(/Output #3, Distance of: A,D,C/);
    expect(el.textContent).toMatch(/Output #4, Distance of: A,E,B,C,D/);
    expect(el.textContent).toMatch(/Output #5, Distance of: A,E,D/);
  });
});
