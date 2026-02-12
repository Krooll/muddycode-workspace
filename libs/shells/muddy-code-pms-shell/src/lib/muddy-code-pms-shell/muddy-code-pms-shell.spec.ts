import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuddyCodePmsShell } from './muddy-code-pms-shell';

describe('MuddyCodePmsShell', () => {
  let component: MuddyCodePmsShell;
  let fixture: ComponentFixture<MuddyCodePmsShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuddyCodePmsShell],
    }).compileComponents();

    fixture = TestBed.createComponent(MuddyCodePmsShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
