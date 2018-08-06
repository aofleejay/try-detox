describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should render home screen', async () => {
    await expect(element(by.id('home-container'))).toBeVisible()
  })

  it('Should alert foo when press press me butoon', async () => {
    await element(by.id('press-me')).tap()
    await expect(element(by.id('profile-container'))).toBeVisible()
  })
})
