import { EPatientCarePage } from './app.po';

describe('e-patient-care App', () => {
  let page: EPatientCarePage;

  beforeEach(() => {
    page = new EPatientCarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
