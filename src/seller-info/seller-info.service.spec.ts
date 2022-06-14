import { Test, TestingModule } from '@nestjs/testing';
import { SellerInfoService } from './seller-info.service';

describe('SellerInfoService', () => {
  let service: SellerInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerInfoService],
    }).compile();

    service = module.get<SellerInfoService>(SellerInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
