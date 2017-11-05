import { StudentsPage } from './app.po';

describe('students App', () => {
  let page: StudentsPage;

  beforeEach(() => {
    page = new StudentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
