import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModClientesComponent } from './mod-clientes.component';

describe('ModClientesComponent', () => {
  let component: ModClientesComponent;
  let fixture: ComponentFixture<ModClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModClientesComponent]
    });
    fixture = TestBed.createComponent(ModClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
