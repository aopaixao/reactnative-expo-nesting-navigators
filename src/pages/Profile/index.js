import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <TouchableOpacity style={styles.btn} 
              onPress={() => navigation.openDrawer()}>
              <Text>Abrir Drawer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: 'blue',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Profile;