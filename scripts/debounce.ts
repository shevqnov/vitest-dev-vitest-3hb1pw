export function debounce(fn: Function, ms: number): Function {
  let cd = false;
  return function () {
    if (cd) return;
    fn.apply(this, arguments);
    cd = true;
    setTimeout(() => (cd = false), ms);
  };
}
