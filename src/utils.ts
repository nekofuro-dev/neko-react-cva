export type GenericRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type WithGenericRef<T extends React.ElementType, P = object> = Omit<
  P,
  keyof GenericRef<T>
> & {
  ref?: GenericRef<T>;
};
