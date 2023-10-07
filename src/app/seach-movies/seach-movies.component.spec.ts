import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachMoviesComponent } from './seach-movies.component';

describe('SeachMoviesComponent', () => {
  let component: SeachMoviesComponent;
  let fixture: ComponentFixture<SeachMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeachMoviesComponent]
    });
    fixture = TestBed.createComponent(SeachMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
