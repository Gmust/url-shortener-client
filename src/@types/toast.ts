import { IconType } from 'react-icons';

export interface IToast {
  id: string,
  message: string,
  type: ToastTypes,
  Icon?: IconType
  removing?: boolean
  headingText?: string;
}


export enum ToastTypes {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Default = 'default'
}

export enum ToastPositions {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}
