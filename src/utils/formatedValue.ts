export function formatedValue(value: string) {
  let numeroFormatado = value.toString();

  let partes = numeroFormatado.split(".");

  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return partes.join(".");
}
