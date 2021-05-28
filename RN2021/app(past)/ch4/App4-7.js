import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
/** Component<{}> 이부분이 왜 빨간줄이 그어지는지 모르겠다. Component 이렇게만 써도 결과물과 같은 화면이 출력되긴 한다.*/
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>    
                <View style={styles.cardContainer}/>    
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';    

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {    
        backgroundColor: profileCardColor,    
        width: 300,
        height: 400
    }
});