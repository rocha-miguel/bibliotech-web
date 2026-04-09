import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPorId } from './listar-por-id';

describe('ListarPorId', () => {
  let component: ListarPorId;
  let fixture: ComponentFixture<ListarPorId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPorId],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPorId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
