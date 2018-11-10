import { AngularHeroModule } from './angular-hero.module';

describe('AngularHeroModule', () => {
  let angularHeroModule: AngularHeroModule;

  beforeEach(() => {
    angularHeroModule = new AngularHeroModule();
  });

  it('should create an instance', () => {
    expect(angularHeroModule).toBeTruthy();
  });
});
