export interface Entity<T extends Entity<T>> {
  isSameIdentityAs(other: T): boolean;
}
