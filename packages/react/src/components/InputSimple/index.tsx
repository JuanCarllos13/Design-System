import { ComponentProps, ElementRef, ElementType, forwardRef } from "react";
import { Input, InputSimpleContainer } from "./styles";

export interface InputSimpleProps extends ComponentProps<typeof Input> {
  as?: ElementType;
}

export const InputSimple = forwardRef<
  ElementRef<typeof Input>,
  InputSimpleProps
>(({ children, ...props }: InputSimpleProps, ref) => {
  return (
    <InputSimpleContainer >
      <Input ref={ref} {...props}/>
      {children && children}
    </InputSimpleContainer>
  );
});

InputSimple.displayName = "InputSimple";
