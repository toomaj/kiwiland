import { browser, element, by } from 'protractor';

describe('Kiwiland E2E Tests', function () {
  let pageHeading = "This is Kiwiland's Home Page";

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + pageHeading, function () {
    expect(element(by.css('h3')).getText()).toEqual(pageHeading);
  });
});
