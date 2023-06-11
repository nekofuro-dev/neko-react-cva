import { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';
import { GenericRef } from '../utils';

interface As<T extends ElementType> {
  as?: T;
}

export type AsPropsWithoutRef<T extends ElementType> = As<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof As<T>>;

export type AsPropsWithRef<T extends ElementType> = AsPropsWithoutRef<T> & {
  ref?: GenericRef<T>;
};

export interface ComponentWithAs<DefaultComponent extends ElementType> {
  <T extends ElementType = DefaultComponent>(
    props: AsPropsWithRef<T>
  ): ReactElement;
}
