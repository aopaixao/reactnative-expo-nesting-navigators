import { StyleSheet, Text, View } from 'react-native';

const Help = () => {
    return (
        <View style={styles.container}>
            <Text>Help</Text>
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

export default Help;