import { StyleSheet, Text, View } from 'react-native';

const Invite = () => {
    return (
        <View style={styles.container}>
            <Text>Invite</Text>
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
});

export default Invite;