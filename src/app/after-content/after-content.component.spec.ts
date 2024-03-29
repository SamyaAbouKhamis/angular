import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentComponent } from './after-content.component';

describe('AfterContentComponent', () => {
  let component: AfterContentComponent;
  let fixture: ComponentFixture<AfterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
