import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuddyCodeDashboardShell } from './muddy-code-dashboard-shell';

describe('MuddyCodeDashboardShell', () => {
  let component: MuddyCodeDashboardShell;
  let fixture: ComponentFixture<MuddyCodeDashboardShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuddyCodeDashboardShell],
    }).compileComponents();

    fixture = TestBed.createComponent(MuddyCodeDashboardShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
