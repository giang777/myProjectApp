import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/router/Home';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Main from './src/components/router/Main';


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
