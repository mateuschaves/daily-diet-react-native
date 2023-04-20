export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewSnack: undefined;
      SnackResume: {
        snackPercent: number;
        snacks: SnackModel[];
      };
      SnackAdded: {
        onDiet: boolean;
      };
    }
  }
}
