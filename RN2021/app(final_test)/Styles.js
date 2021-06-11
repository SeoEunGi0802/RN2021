import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    str_box: {
        width: 300,
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderColor: 'red',
        borderWidth: 3,
        borderStyle: 'solid',
    },

    str_head: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },

    str: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    }
})

export { styles }