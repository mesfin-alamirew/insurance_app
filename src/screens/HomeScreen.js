import { StyleSheet, View, Text, Button } from 'react-native';
import Services from './ServicesScreen';

function HomeScreen() {
  return (
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>Good Morning</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoHeaderText}>Get COVID Cover!</Text>
        <Text style={styles.infoBodyText}>
          Introducing annual COVID cover for as low as Birr 3000! Cover yourself
          and loved ones today!
        </Text>
        <View style={styles.btnContainer}>
          <Button color="teal" title="Get Cover" />
        </View>
      </View>
      <Services />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    marginTop: 50,
  },
  headerText: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'teal',
  },
  infoContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  infoHeaderText: {
    color: 'red',
    fontSize: 20,
  },
  infoBodyText: {},

  btnContainer: {
    marginTop: 10,
    width: '30%',
  },
});
