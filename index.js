import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { Navigation } from "react-native-navigation";

import App from "./App";
Navigation.registerComponent("com.myApp.WelcomeScreen", () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "com.myApp.WelcomeScreen",
            },
          },
        ],
      },
    },
  });
});
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
