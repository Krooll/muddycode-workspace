import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WmsBarcodes } from './wms-barcodes';

describe('WmsBarcodes', () => {
  let component: WmsBarcodes;
  let fixture: ComponentFixture<WmsBarcodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WmsBarcodes],
    }).compileComponents();

    fixture = TestBed.createComponent(WmsBarcodes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
