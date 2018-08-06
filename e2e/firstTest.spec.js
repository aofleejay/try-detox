describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should render home screen', async () => {
    await expect(element(by.id('home-container'))).toBeVisible()
  })
})
