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

  it('should have sample output text', () => {
    de = fixture.debugElement.query(By.css('ul'));
    el = de.nativeElement;
    expect(el.textContent).toMatch(/OUT PUT GOES HERE/i,
      '<li>Should present "OUT PUT GOES HERE" title</li>');
  });

  it('should have sample output text', () => {
    //this just a temporary test to make the arary push process fail
    //will be replaced with appropriate example where Graph objects
    //need to be tested
    expect(comp.paths.length).toEqual(9);
  });
});
