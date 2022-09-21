export interface SideButton {
  icon: string;
  cssClass: string;
  tooltip: string;
  handler: ((item: any) => void) | (() => void);
  disabled: boolean;
}
