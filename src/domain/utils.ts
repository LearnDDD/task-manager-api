export function map<T, U>(func: (source: T) => U, source?: T): U | undefined {
  return (source === null || source === undefined)
    ? undefined
    : func(source);
};

export function ifPresent<T, U>(func: (source: T) => void, source?: T) {
  if (source !== null && source !== undefined) {
    func(source);
  }
}
