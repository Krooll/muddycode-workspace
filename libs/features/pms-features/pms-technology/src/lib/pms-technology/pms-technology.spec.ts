import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmsTechnology } from './pms-technology';

describe('PmsTechnology', () => {
  let component: PmsTechnology;
  let fixture: ComponentFixture<PmsTechnology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmsTechnology],
    }).compileComponents();

    fixture = TestBed.createComponent(PmsTechnology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
