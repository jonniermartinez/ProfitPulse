/* eslint-disable */
// prettier-ignore
/* 
    capital es P
    tasa de interes es r
    n
    t es perido o tiempo
  
    p * (1 + r / n) a  la potencia de n * 
    */

/* yo quiero que retorne un objeto 
{
    año: 1,
    CapitalInicial: 100,
    BalanaceFinal: 110,00,
    interesGanado: capaitalInical - BalanceFinal,
    interesAcumulado: es la suma de todo el interes ganado
}

*/
// todo esto es anual
// la aportacion en anual

interface Data {
  year: number,
  initialBalance: string,
  finalBalance: string,
  interesGanado: string,
  capital: number
}

function calculator(
  capital: number,
  tasaDeInteres: number,
  periodo: number,
  aportacion?: number
) {
  const data: Data[] = [];

  const P = capital;
  const r = tasaDeInteres;
  const n = 1;
  let lastBalance: number = capital;

  for (let index = 1; index <= periodo; index++) {
    const initialBalance = lastBalance.toFixed(2);
    console.log(aportacion);
    const t = index;
    const base = 1 + r / 100 / n;
    const finalValue = P * Math.pow(base, 1 * t);
    lastBalance = finalValue;
    const BalanaceFinal = finalValue.toFixed(2);
    const interesGanado = (finalValue - capital).toFixed(2);
    // const interesGanado = (finalValue - capital).toFixed(2);

    data.push({
      year: index,
      initialBalance: initialBalance,
      finalBalance: BalanaceFinal,
      interesGanado: interesGanado,
      capital: capital,
    });
  }

  return data;
}

export default calculator;
