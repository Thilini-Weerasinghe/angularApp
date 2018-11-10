import { HeroroutingmoduleModule } from './heroroutingmodule.module';

describe('HeroroutingmoduleModule', () => {
  let heroroutingmoduleModule: HeroroutingmoduleModule;

  beforeEach(() => {
    heroroutingmoduleModule = new HeroroutingmoduleModule();
  });

  it('should create an instance', () => {
    expect(heroroutingmoduleModule).toBeTruthy();
  });
});
