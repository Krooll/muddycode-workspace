import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmsDictionaries } from './pms-dictionaries';

describe('PmsDictionaries', () => {
  let component: PmsDictionaries;
  let fixture: ComponentFixture<PmsDictionaries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmsDictionaries],
    }).compileComponents();

    fixture = TestBed.createComponent(PmsDictionaries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
