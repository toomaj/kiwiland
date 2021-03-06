/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent, RailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h3> text', () => {
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(/Kiwiland App/i,
      '<h3>Should present "Kiwiland App" heading</h3>');
  });
});

/// Stub RailInfoComponent ///
import { Component } from '@angular/core';

@Component({
  selector: 'rail-info',
  template: ''
})
class RailInfoComponent {}
