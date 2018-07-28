import { TestAPIPage } from './app.po';

describe('test-api App', function() {
  let page: TestAPIPage;

  beforeEach(() => {
    page = new TestAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
