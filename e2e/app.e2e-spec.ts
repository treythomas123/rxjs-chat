import { ChatPage } from './app.po';

describe('chat App', () => {
  let page: ChatPage;

  beforeEach(() => {
    page = new ChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
