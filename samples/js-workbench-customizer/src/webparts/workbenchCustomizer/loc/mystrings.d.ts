declare interface IWorkbenchCustomizerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  CustomWorkbenchStylesFieldLabel: string;
  customWorkbenchStylesFullWidthFieldLabel: string;
  PreviewModeFieldLabel: string;
  TitleLabel: string;
  ThemeLabel: string;
  RequestPageRefresh: string;
}

declare module 'WorkbenchCustomizerWebPartStrings' {
  const strings: IWorkbenchCustomizerWebPartStrings;
  export = strings;
}
