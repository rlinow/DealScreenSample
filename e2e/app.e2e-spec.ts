import { DealScreenSamplePage } from './app.po';

describe('deal-screen-sample App', () => {
  let page: DealScreenSamplePage;

  beforeEach(() => {
    page = new DealScreenSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
