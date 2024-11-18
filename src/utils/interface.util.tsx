import { ChangeEvent, RefObject } from "react";

export interface IStorage {
    keepData(key: string, data: object | string): void;
    fetchData(key: string): string | null;
  }
  
  export interface INoteStorage {
    keepNote(key: string, data: object | string): void;
    fetchNote(key: string): string | null;
  }
export interface ITitle {
    text: string;
    size?: string;
    color?: string;
    margin?: {
      top?: string;
      bottom?: string;
    };
  }
  
  export interface ITextInput {
    type: "email" | "text" | "textarea";
    ref?: RefObject<HTMLInputElement>;
    showFocus?: boolean;
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    id?: string;
    hasIcon?: boolean;
    icon?: string;
    name?: string;
    placeholder?: string;
    value?: string
    autoComplete?: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  }

  
export interface IPasswordInput {
    ref?: RefObject<HTMLInputElement>;
    showFocus?: boolean;
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    id?: string;
    hasIcon?: boolean;
    icon?: string;
    name?: string;
    placeholder?: string;
    autoComplete?: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  }

  export interface IButton {
    text: string;
    onClick(e: any): void;
  }
  export interface IIconButton {
    width?: string;
    height?: string;
    icon: {
      type: "web" | "image";
      name?: string;
      url?: string;
      width?: string;
      height?: string;
    };
  }
  
  export interface INavButton {
    link?: string,
    icon: string,
    text: string
  }
  