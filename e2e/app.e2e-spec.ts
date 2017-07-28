import { ComplianceSolutionClientPage } from './app.po';

describe('compliance-solution-client App', () => {
  let page: ComplianceSolutionClientPage;

  beforeEach(() => {
    page = new ComplianceSolutionClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
