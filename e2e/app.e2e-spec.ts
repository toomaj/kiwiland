import { browser, element, by } from 'protractor';

describe('Kiwiland E2E Tests', function () {
  let pageHeading = "This is Kiwiland's Home Page";
  let railInfoHeading = "Rail Info";

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + pageHeading, function () {
    expect(element(by.css('h3')).getText()).toEqual(pageHeading);
  });

  it('should display: ' + railInfoHeading, function () {
    expect(element(by.css('div')).getText()).toEqual(railInfoHeading);
  });
});
