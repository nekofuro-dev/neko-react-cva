import { ElementType, forwardRef } from 'react';
import { GenericRef } from '../utils';
import {
  ComponentWithVariants,
  Cva,
  VariantsPropsWithoutRef,
} from './cvaVariants.types';

/**
 * hoc to add variants prop to a component with cva, with polymorphic support
 * @param defaultComponent the default component to render if no as prop is passed
 * @param variantsCva the cva function to apply to the component
 * @returns polymorphic component with variants prop derived from [variantsCva]
 */
export const withVariants = <
  DefaultComponent extends ElementType,
  CvaType extends Cva
>(
  defaultComponent: DefaultComponent,
  variantsCva: CvaType
): ComponentWithVariants<DefaultComponent, CvaType> => {
  const cvaComponent = <T extends ElementType = DefaultComponent>(
    { variants, as, className, ...props }: VariantsPropsWithoutRef<T, CvaType>,
    ref: GenericRef<T>
  ) => {
    const Component: ElementType = as || defaultComponent;
    const cvaClassName = variantsCva({ ...variants, className });
    return <Component {...props} ref={ref} className={cvaClassName} />;
  };

  return forwardRef(cvaComponent) as ComponentWithVariants<
    DefaultComponent,
    CvaType
  >;
};
