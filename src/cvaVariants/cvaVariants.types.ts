import { VariantProps, cva } from 'class-variance-authority';
import { ElementType, ReactElement } from 'react';
import {
  AsPropsWithRef,
  AsPropsWithoutRef,
} from '../polymorphic/polymorphic.types';

export type Cva = ReturnType<typeof cva>;

export type BaseVariantsProps<CvaType extends Cva> = {
  variants?: VariantProps<CvaType>;
};

export type VariantsPropsWithoutRef<
  T extends ElementType,
  CvaType extends Cva
> = AsPropsWithoutRef<T> &
  Omit<BaseVariantsProps<CvaType>, keyof AsPropsWithoutRef<T>>;

export type VariantsPropsWithRef<
  T extends ElementType,
  CvaType extends Cva
> = AsPropsWithRef<T> &
  Omit<BaseVariantsProps<CvaType>, keyof AsPropsWithRef<T>>;

export interface ComponentWithVariants<
  DefaultComponent extends ElementType,
  CvaType extends Cva
> {
  <T extends ElementType = DefaultComponent>(
    props: VariantsPropsWithRef<T, CvaType>
  ): ReactElement;
}
