let timer: any;
export function debouncing(
  cb: (...args: any) => void,
  delay: number | undefined
) {
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
