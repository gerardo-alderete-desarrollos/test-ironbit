import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TestModule } from '../../test.module';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;
  let homeFixture: ComponentFixture<HomeComponent>;

  let numerosNaturales = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  let multiplos3 = [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ]
  let numerosPrimos = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ TestModule ]
    })
    .compileComponents();

    homeFixture = TestBed.createComponent(HomeComponent);
    homeComponent = homeFixture.componentInstance;
    homeFixture.detectChanges();

  });

  it('Debe existir el componente Home', () => {
    expect(homeComponent).toBeTruthy();
  });

  it('Debe regresar el primer número primo', () => {
    homeComponent.nesimo = numerosNaturales[0];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 2 números primos', () => {
    homeComponent.nesimo = numerosNaturales[1];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 3 números primos', () => {
    homeComponent.nesimo = numerosNaturales[2];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 4 números primos', () => {
    homeComponent.nesimo = numerosNaturales[3];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 5 números primos', () => {
    homeComponent.nesimo = numerosNaturales[4];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 6 números primos', () => {
    homeComponent.nesimo = numerosNaturales[5];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 7 números primos', () => {
    homeComponent.nesimo = numerosNaturales[6];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 8 números primos', () => {
    homeComponent.nesimo = numerosNaturales[7];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 9 números primos', () => {
    homeComponent.nesimo = numerosNaturales[8];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar los primeros 10 números primos', () => {
    homeComponent.nesimo = numerosNaturales[9];
    const nesimo = homeComponent.nesimo;
    homeComponent.getPrimos();
    const primosMetodo = homeComponent.primos
    const primosPrueba = numerosPrimos.slice(0, nesimo);

    expect(primosMetodo).toEqual(primosPrueba);
  });

  it('Debe regresar el primer multiplo de 3', () => {
    homeComponent.nesimo = numerosNaturales[0];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 2 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[1];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 3 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[2];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 4 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[3];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 5 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[4];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 6 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[5];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 7 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[6];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 8 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[7];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 9 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[8];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });

  it('Debe regresar los primeros 10 multiplos de 3', () => {
    homeComponent.nesimo = numerosNaturales[9];
    const nesimo = homeComponent.nesimo;
    homeComponent.getMultples();
    const multiplesMetodo = homeComponent.multiples3
    const multiplesPrueba = multiplos3.slice(0, nesimo);

    expect(multiplesMetodo).toEqual(multiplesPrueba);
  });


});
