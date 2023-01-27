import {
  ScreenRect,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
function ServicesScreen({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Insurance')}>
      <View style={styles.container}>
        <View style={styles.itemLeft}>
          <FontAwesome name="copy" color="teal" size={25} />
          <Text style={styles.sHeaderText}>Insurance Services</Text>
          <Text style={styles.sHeaderBody}>
            Explor our insurance services, outcomes from directly from your
            phone and keep a digital record of your policies.
          </Text>
        </View>
        <View style={styles.itemRight}>
          <FontAwesome name="calendar" color="teal" size={25} />
          <Text style={styles.sHeaderText}>Claim Services</Text>
          <Text style={styles.sHeaderBody}>
            File claims directly, from your phone and keep a digital record of
            your claim.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    padding: 10,
  },
  sHeaderText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sHeaderBody: {
    // color: 'white',
    padding: 10,
    textAlign: 'justify',
  },
  itemLeft: {
    flex: 1,
    height: 180,
    backgroundColor: 'skyblue',
    marginRight: 2,
    padding: 10,
    borderRadius: 10,
  },
  itemRight: {
    flex: 1,
    height: 180,
    backgroundColor: 'skyblue',
    marginLeft: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default ServicesScreen;
