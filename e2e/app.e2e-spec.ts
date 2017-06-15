import { AngularTokenAuthPage } from './app.po';

describe('angular-token-auth App', () => {
  let page: AngularTokenAuthPage;

  beforeEach(() => {
    page = new AngularTokenAuthPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
