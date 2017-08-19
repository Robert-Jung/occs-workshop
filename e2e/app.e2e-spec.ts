import { OccsWorkshopPage } from './app.po';

describe('occs-workshop App', () => {
  let page: OccsWorkshopPage;

  beforeEach(() => {
    page = new OccsWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
