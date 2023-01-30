import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LogoutComp from '../components/LogoutComp';
function InsuranceScreen({ navigation }) {
  return (
    // <View>
    <>
      <LogoutComp />
      <View style={styles.servicesRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Insurances')}
          style={styles.eventContainer}
        >
          <View style={[styles.sText, styles.elevation]}>
            <FontAwesome
              name="shopping-cart"
              color="purple"
              size={25}
              style={{ textAlign: 'center' }}
            />
            <Text style={styles.title}>Buy Insurance</Text>
            <Text style={styles.body}>Buy Iinsurance packages with </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Insurances')}
          style={styles.eventContainer}
        >
          <View style={[styles.sText, styles.elevation]}>
            <FontAwesome
              name="bars"
              color="purple"
              size={25}
              style={{ textAlign: 'center' }}
            />
            <Text style={styles.title}>My Policies</Text>
            <Text style={styles.body}>Buy Iinsurance packages with </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Insurances')}
          style={styles.eventContainer}
        >
          <View style={[styles.sText, styles.elevation]}>
            <FontAwesome
              name="bars"
              color="purple"
              size={25}
              style={{ textAlign: 'center' }}
            />
            <Text style={styles.title}>Insurance Sticker</Text>
            <Text style={styles.body}>Buy Insurance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Insurances')}
          style={styles.eventContainer}
        >
          <View style={[styles.sText, styles.elevation]}>
            <FontAwesome
              name="dollar"
              color="purple"
              size={25}
              style={{ textAlign: 'center' }}
            />
            <Text style={styles.title}>Finance Plan</Text>
            <Text style={styles.body}>Buy Insurance</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default InsuranceScreen;

const styles = StyleSheet.create({
  servicesRow: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },

  eventContainer: {
    width: '48%',
  },
  sText: {
    height: 180,
    // width: '50%',
    padding: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'teal',

    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    color: 'purple',
    fontSize: 20,
    textAlign: 'center',
  },
  body: {
    color: 'teal',
    // padding: 5,
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 3,
  },
});
