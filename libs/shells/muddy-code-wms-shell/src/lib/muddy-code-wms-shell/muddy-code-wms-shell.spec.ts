import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuddyCodeWmsShell } from './muddy-code-wms-shell';

describe('MuddyCodeWmsShell', () => {
  let component: MuddyCodeWmsShell;
  let fixture: ComponentFixture<MuddyCodeWmsShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuddyCodeWmsShell],
    }).compileComponents();

    fixture = TestBed.createComponent(MuddyCodeWmsShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
