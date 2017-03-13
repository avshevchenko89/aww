import { AwwPage } from './app.po';

describe('aww App', () => {
  let page: AwwPage;

  beforeEach(() => {
    page = new AwwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
