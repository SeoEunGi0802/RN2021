import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Styles'

const RenderCom = (props) => {
    let { id } = props
    let { name } = props
    let { str } = props
    return (
        <View style={styles.str_box}>
            <Text style={styles.str}>
                <Text style={styles.str_head}>
                    {str}
                </Text>
                {'\n\n'}
                ==============
                {'\n'}
                학번 : {id}
                {'\n'}
            이름 : {name}
            </Text>
        </View>
    )
}
export default RenderCom