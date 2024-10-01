/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssistantCreateFormInputValues = {
    model?: string;
    assistantId?: string;
    threadInstructions?: string;
    additionalInstructions?: string;
    messages?: string;
    moderationFlag?: boolean;
    identityId?: string;
};
export declare type AssistantCreateFormValidationValues = {
    model?: ValidationFunction<string>;
    assistantId?: ValidationFunction<string>;
    threadInstructions?: ValidationFunction<string>;
    additionalInstructions?: ValidationFunction<string>;
    messages?: ValidationFunction<string>;
    moderationFlag?: ValidationFunction<boolean>;
    identityId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssistantCreateFormOverridesProps = {
    AssistantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    assistantId?: PrimitiveOverrideProps<TextFieldProps>;
    threadInstructions?: PrimitiveOverrideProps<TextFieldProps>;
    additionalInstructions?: PrimitiveOverrideProps<TextFieldProps>;
    messages?: PrimitiveOverrideProps<TextFieldProps>;
    moderationFlag?: PrimitiveOverrideProps<SwitchFieldProps>;
    identityId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssistantCreateFormProps = React.PropsWithChildren<{
    overrides?: AssistantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssistantCreateFormInputValues) => AssistantCreateFormInputValues;
    onSuccess?: (fields: AssistantCreateFormInputValues) => void;
    onError?: (fields: AssistantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssistantCreateFormInputValues) => AssistantCreateFormInputValues;
    onValidate?: AssistantCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssistantCreateForm(props: AssistantCreateFormProps): React.ReactElement;
