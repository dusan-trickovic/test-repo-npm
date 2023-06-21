const packageFunction = require('../index');

describe('myFunction', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log the expected message', () => {
    packageFunction();
    expect(consoleLogSpy).toHaveBeenCalledWith("Testing");
  });
});
