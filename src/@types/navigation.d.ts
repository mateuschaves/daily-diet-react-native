export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewSnack: {
        snackId?: string;
      };
      SnackResume: {
        snackPercent: number;
        snacks: SnackModel[];
      };
      SnackAdded: {
        onDiet: boolean;
      };
      SnackDetail: {
        snackId: string;
      };
    }
  }
}
