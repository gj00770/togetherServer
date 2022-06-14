import { Test, TestingModule } from '@nestjs/testing';
import { SellerInfoController } from './seller-info.controller';

describe('SellerInfoController', () => {
  let controller: SellerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerInfoController],
    }).compile();

    controller = module.get<SellerInfoController>(SellerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
