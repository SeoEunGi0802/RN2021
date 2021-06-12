<details>
<summary>2021-06-11</summary>
<div markdown="2021-06-11">

# 2021-06-11
 > [기말고사](/RN2021/app(final_test))
----------------------------
</div>
</details>
<br>

<details>
<summary>2021-06-04</summary>
<div markdown="2021-06-04">

# 2021-06-04
  #### 리덕스란?
  + 리덕스는 "자바스크립트 앱을 위한 예측 가능한 state 컨테이너"로 정의한다.
  + 앱에 단 하나밖에 없는 전역 상태의 객체이다.
  + 이 전역 state객체는 리액트 네이티브 컴포넌트에서 props로 전달된다.
  + 리덕스 state의 데이터가 변경되면, 변경된 새 데이터가 전체 앱에 props로 전달한다.
  + 리덕스는 앱의 state를 모두 store라는 곳으로 이동시켜 데이터 관리를 편리하게 한다.
  + 리덕스는 리액트의 context라는 기능을 이용해서 동작한다.
  + context는 전역 state를 만들고 관리하는 매커니즘이다.

  #### context를 이용해서 앱의 전역 상태 관리하기
  + context는 전역변수를 만드는 React API이다.
  + context를 전달받는 컴포넌트는 context를 만든 컴포넌트의 자식 컴포넌트라야 한다.
  + 일반적으로 데이터를 전달하려면 컴포넌트 구조의 단계별로 props를 전달하지만
    -> context를 이용하면 props를 사용할 필요가 없다.
    -> 왜냐하면 전역 객체이기 때문에 앱 전체에서 context를 참조할 수 있기 때문이다.
  + [ 예제 8.1 ](/RN2021/app(past)/ch8/App8-1.js)

  #### 리액트 네이티브 앱에 리덕스 구현하기 - 도서 목록을 관리하는 앱
  + 기존의 프로젝트를 사용
  + 리덕스 관련 의존성 라이브러리 설치
    > npm install redux react-redux
  + 프로젝트 root에 src폴더를 생성, 폴더에 Books.js / actions.js파일 추가
  + src폴더에 reducers폴더 생성, 폴더에 bookReducer.js / index.js파일 추가

  #### 리덕스 리듀서로 리덕스 상태 관리하기
  + reducer는 객체를 반환하는 함수로, 이를 묶어서 전역 state를 만든다.
  + [src/reducers/index.js파일에 앱에서 사용할 모든 reducer를 결합해서 전역 state를 구성한다. 예제 8.3](/RN2021/app(past)/ch8/src/reducers/index8-3.js)
  + 하나의 reducer(bookReducer.js)만 사용하여 만든다.
  + bookReducer에 저장할 데이터는 도서 목록을 저장하는 배열이다.
  + bookReducer는 하나의 state를 만들고 반환한다.
  + 이 state는 이후에 리덕스 스토어에서 참조할 수 있게 된다.
  + [bookReducer.js에 첫번째 reducer를 만든다. 예제 8.2](/RN2021/app(past)/ch8/src/reducers/bookReducer8-2.js)
  + 예제 8.2에서는 state를 반환하는 역할만 하는 함수를 하나 만든다.

  #### provider를 추가하고 스토어 만들기
  + [프로젝트 root에 App.js파일을 생성한다. 예제 8.4](/RN2021/app(past)/ch8/App8-4.js)
  + provider는 자식 컴포넌트에 데이터를 전달하는 부모 컴포넌트이다.
  + 리덕스에서 provider는 앱 전체에 전역 state를 전달 한다.

  #### connect 함수를 이용해서 데이터 참조하기
  #### [예제 8.5](/RN2021/app(past)/ch8/src/Books8-5.js)
  + react-redux의 connext함수를 이용해 자식 컴포넌트에서 store를 참조한다.
  + connect 함수의 첫 번째 매개변수는 리덕스의 전역 state를 참조할 수 있게 해주는 함수이다. connect (args) (args)
  + connect 함수는 다른 함수를 반환하는 커링 함수이다.
  + 첫 번째 매개변수로 실행된 결과로 생성된 객체는 두 번째 매개변수로 전달된 컴포넌트의 props로 사용할 수 있다.

  #### 액션 추가하기
  #### [에제 8.6](/RN2021/app(past)/ch8/src/Books8-6.js)
  + 리덕스 스토어의 books 배열에 도서를 추가하는 기능을 구현한다.
  + [도서추가 기능을 만들기 위해 action을 사용한다. 예제 8.7](/RN2021/app(past)/ch8/src/actions8-7.js)
  + action은 스토어에 데이터를 보내고, 리듀서를 업데이트하는 객체를 반환하는 함수이다.
  + 스토어의 데이터는 action을 통해서만 변경할 수 있다.
  + 각 action은 리듀서가 사용할 수 있도록 type 속성을 포함한다.
  + 리덕스의 dispatch 함수로 action을 호출하면, 앱의 모든 리듀서에 action이 전달된다.
  + [리듀서가 action을 전달받으면, action의 type 속성을 확인하고 리듀서와 관련된 action에 따라 리듀서가 반환한 것을 업데이트 한다. 예제 8.8](/RN2021/app(past)/ch8/src/reducers/bookReducer8-8.js)
  + type이 ADD_BOOK이면, 기존의 모든 도서 목록에 새 도서가 포함된 갱신된 books배열을 변환한다.
  + 이것으로 리덕스를 이용하기 위한 모든 리덕스와 관련된 설정이 끝이다.

  #### [예제 8.9](/RN2021/app(past)/ch8/src/Books8-9.js)
  #### [예제 8.9](/RN2021/app(past)/ch8/src/Books8-10.js)
  #### [예제 8.9](/RN2021/app(past)/ch8/src/Books8-11.js)
  + initialState 변수를 추가해 로컬 컴포넌트 state를 저장하는 데 사용한다.
  + 클래스의 내용에는 컴포넌트의 state, state를 업데이트하는 메서드, 리덕스에 액션을 보내는 메서드 3가지를 추가한다.
  + addBook메서드는 connect함수의 props로 참조할 수 있는 함수인 dispatchAddBook을 호출한다.
  + dispatchAddBook함수는 전체 state를 매개변수로 전달 받는데 이때 state는 name과 aurhor속성을 포함한 객체이다.

  #### 리듀서에서 리덕스 스토어에 저장된 내용 지우기
  + 도서 목록에서 도서를 삭제하는 것처럼 배열에서 항목을 제거하려면, 먼저 도서를 고유하게 식별할 수 있어야 한다.
  + 이를 위해 uuid라이브러리를 사용한다. 
    > npm install uuid
  + 리듀서에서 initialState의 books 배열에 있는 항목에 고유 식별자를 부여한다.
  + [reducers/bookReducers.js파일에 예제8.12와 같이 수정한다.](/RN2021/app(past)/ch8/src/reducers/bookReducer8-12.js)
  + [actions.js파일에 새 액션을 추가한다. 에제 8.13](/RN2021/app(past)/ch8/src/actions8-13.js)
----------------------------
</div>
</details>
<br>

<details>
<summary>2021-05-28</summary>
<div markdown="2021-05-28">

# 2021-05-28
  #### [ 탭 네비게이션 ](/NaviApp/app(past)/App_tab.js)
  1. 모듈 다운로드 : npm install @react-navigation/bottom-tabs
  2. 코드 입력
  ```
  import * as React from 'react';
  import { Text, View } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
  ```

  #### [ 스택 네비게이션 ](/NaviApp/app(past)/App_stack.js)
  1. 모듈 다운로드 : npm install @react-navigation/stack
  2. 코드 입력
  ```
  import * as React from 'react';
  import { Button, View } from 'react-native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          />
        </View>
    );
  }
  
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
          <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
          />
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
          />
      </View>
    );
  }
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
  ```

  #### [ 드로어 네비게이션 ](/NaviApp/app(past)/App_drawer.js)
  1. 모듈 다운로드 : npm install @react-navigation/drawer
  2. 코드 입력
  ```
  import * as React from 'react';
  import { Button, View } from 'react-native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
  }
  
  const Drawer = createDrawerNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
  ```

  ### [expo-cli를 이용하여 프로젝트를 생성](/HelloExpo/)
   1. npm install -g expo-cli (cmd 관리자 권한으로 실행)
   2. expo --version으로 설치되었는지 확인
   3. expo init [porject-name]

  #### [ expo-cli를 이용한 탭 네비게이션 ](/HelloExpo/App.js)
  1. 모듈 다운로드 : npm install @react-navigation/material-bottom-tabs react-native-paper
  2. 코드 입력
  ```
  import * as React from 'react';
  import { BottomNavigation, Text } from 'react-native-paper';
  
  const MusicRoute = () => <Text>Music</Text>;
  const AlbumsRoute = () => <Text>Albums</Text>;
  const RecentsRoute = () => <Text>Recents</Text>;
  
  const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ]);
    
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
    });
    
    return (
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
    );
  };
  
  export default App;
  ```
----------------------------
</div>
</details>
<br>

<details>
<summary>2021-05-21</summary>
<div markdown="2021-05-21">

# 2021-05-21
 #### 프로필 카드 컴포넌트 제작2
 - [프로필 내용에 스타일 적용하기](/RN2021/app(past)/ch4/App4-15.js)
    + flex속성을 제외하고는 View에서 사용되는 대부분의 스타일을 Text에서도 사용할 수 있다.
    + 반대로 Text에서 사용하는 스타일을 View에서는 사용할 수는 없다.
 - [font family 지정하기](/RN2021/app(past)/ch4/App4-16(monospaced_font예제).js)
    + css와는 다르게 fontFamily 속성에 여러 개의 폰트를 지정할 수 없다.
    + iOS에서는 monospace	옵션을 사용할 수 없으며, 사용할 경우 오류가 발생한다. “Unrecognized	font family	‘monospace’”
    + 안드로이드에서는 지원하지 않는 폰트가 지정되면 기본 폰트를 사용한다.
    + 기본 폰트 외에 다른 폰트를 사용하려면 Platform 컴포넌트를 이용한다.
 - [기타 폰트 속성](/RN2021/app(past)/ch4/App4-17.js)
    + [ fontSize ] 텍스트의 크기를 조정하며, 기본 크기는 14px이다.
    + [ fontStyle ] normal과 italic 두개의 옵션만 사용이 가능하다.
    + [ fontWeight ] 기본값은 normal또는 400이다.
    + 'normal', 'bold', '100',	'200', '300', '400', '500', '600', '700', '800', '900’
 - [텍스트 장식하기1](/RN2021/app(past)/ch4/App4-18.js)
 - [텍스트 장식하기2](/RN2021/app(past)/ch4/App4-19(text_style예제).js)
    ###### 플랫폼별 지원 스타일
    + iOS와 Andidor: lineHeight, textAlign, textDecorationLine, textShadowColor, textShadowOffset, textShadowRadius
    + Adidrno: textAlignVertical
    + iOS: letterSpacing, textDecorationColor, textDecorationStyle, writingDirection
 - [프로필 카드 만들기 4장 최종](/RN2021/app(past)/ch4/App4-20.js)

 #### [네비게이션(React Navigation 사이트)](https://reactnavigation.org/)
  + 앱의 가장 핵심기능 중 하나이다.
  + 앱을 개발하기 전에 네비게이션과 라우팅 계획을 반드시 수립해야 한다.
  + 대표적으로 네비게이션으로틑 탭 네비게이션, 스택 네비게이션, 드로어 네비게이션이 있다.

  ###### [ 탭 네비게이션 ]
  + 화면의 위나 아래에 탭이 있고, 탭을 터치하면 연결된 페이지로 라우팅 되는 형태이다.
  + 인스타그램, 페이스북, 트위터 등에서 이 방식을 사용하고 있다.

  ###### [ 스택 네비게이션 ]
  + 기존의 화면위에 다른 화면이 스택 구조로 쌓이는 방법으로, 화면 이동 후에는 스택에 있는 이전 화면으로 되돌아가거나 계속해서 다음 화면으로 이동할 수 있다.
  + 실제 구현은 배열로 한다. 배열에 새 컴포넌트를 축라하면 새 화면이 나타나고, 이전으로 돌아가려면 마지막 화면을 스택에서 꺼내면 된다.
  + 네비게이션 라이브러리는 이렇게 스택에 추가하고, 삭제하는 과정을 대신 처리해 준다.

  ###### [ 드로어 네비게이션 ]
  + 화면의 위쪽 혹은 오른쪽에서 나오는 전형적인 사이드 메뉴이다. 메뉴 항목을 선택하면, 드로어가 닫히고 메뉴 화면으로 이동한다.
    + 리액트 네이티브에서는 네비게이션 라이브러리를 지원하지 않는다.
    + 따라서 서드 파티의 네비게이션 라이브러리를 사용해야 한다.
    + React Navigation은 자바스크립트로 구현 되어있으며, React Natived의 개발진이 추천하는 라이브러리이다.
    + 네이티브 방식으로 네비게이션을 구현에 관해 알고싶다면, Wix의 개발자들이 개발하고 관리하는 오픈소스 라이브러리인 React Native Navigation을 참고한다.
----------------------------
</div>
</details>
<br>

<details>
<summary>2021-05-14</summary>
<div markdown="2021-05-14">

# 2021-05-14(prettier 확장프로그램 추가, 공백 2자로 수정)
 #### 프로필 카드 컴포넌트 제작
 - [다양한 border radius 조합 지정하기 (4-9)](/RN2021/app(past)/ch4/App4-9.js)
   + ##### Text컴포넌트의 bounding box가 원과 겹치는 문제의 해결
   + margin 속성을 이용하여 문제 해결이 가능하나 글씨가 가로폭으로 꽉 차는 경우는 적합하지 않다.
   + centeredText 스타일에 backgroundColor를 transparent로 지정해도 이문제의 해결이 가능하다.
 - [프로필 카드 컴포넌트에 테두리 추가하기 (4-10)](/RN2021/app(past)/ch4/App4-10.js)
   + 예제 4-7에서 만든 직사각형을 수정
   + 이미지 사용을 위해 image컴포넌트를 import한다.
 - 컴포넌트의 위치를 margin과 padding으로 지정하기
   1. [margin 속성 이용하기 (4-11)](/RN2021/app(past)/ch4/App4-11(margin예제).js)
      + margin 속성에는 margin, marginTop, marginRight, marginBotton, marginLeft 속성이 있다.
      + 현재는 IOS와 Andorid 스타일에 차이가 없지만 구버전에는 차이가 있다.
   2. [padding 속성 이용하기 (4-12)](/RN2021/app(past)/ch4/App4-12(padding예제).js)
      + padding 속성에는 padding, paddingTop, paddingRight, paddingBotton, paddingLeft 속성이 있다.
      + 컴포넌트와 부모 컴포넌트 사이의 공간을 지정하는 margin과 달리, padding은 컴포넌트의 테두리로부터 자식 엘리먼트에 적용된다.
   3. [position 속성 이용하기 (4-13)](/RN2021/app(past)/ch4/App4-13(position예제).js)
      + 구현은 css와 유사하지만, css만큼 다양한 옵션을 지원하지 않는다.
      + 기본적으로 리액트 네이티브에서 모든 요소는 다른 요소들에 상대적으로 배치된다.
      + position이 absolute로 지정되면, 해당 요소의 위치는 부모요소의 위치를 기준으로 배치된다.
      + position 속성에는 relative(상대값:기본값)과 absolute(절대값)가 있다.
      + css의 static, fixed는 지원하지 않는다.

 - 프로필 카드의 위치 지정하기
   + [예제 4-14는 4-10의 코드를 수정해서 원과 사용자 이미지에 여백을 주고 모든 요소를 중앙으로 정렬했다.](/RN2021/app(past)/ch4/App4-14.js)
      아래의 코드로 수정
      ```
      cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
      },
      cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
      }
      ```
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-05-07</summary>
<div markdown="2021-05-07">

# 2021-05-07
 ##### [참고한 사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 ## 구조 분해 할당
  - 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식
  - 객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있다.
  ```
  var x = [1, 2, 3, 4, 5];
  ```
  - 구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의한다.
  ```
  var x = [1, 2, 3, 4, 5];
  var [y, z] = x;
  console.log(y); // 1
  console.log(z); // 2
  ```
  - 구조 분해 할당은 Perl이나 Python 등 다른 언어가 가지고 있는 기능이다.

### 배열 구조 분해
   #### 기본 변수 할당
   ```
   var foo = ["one", "two", "three"];
   
   var [one, two, three] = foo;
   console.log(one); // "one"
   console.log(two); // "two"
   console.log(three); // "three"
   ```

   #### 선언에서 분리한 할당
   - 변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있다.
   ```
   var a, b;
   [a, b] = [1, 2];
   console.log(a); // 1
   console.log(b); // 2
   ```

   #### 기본값
   - 변수에 기본값을 할당하면, 분해한 값이 undefined일 때 그 값을 대신 사용한다.
   ```
   var a, b;
   
   [a=5, b=7] = [1];
   console.log(a); // 1
   console.log(b); // 7
   ```

   #### 변수 값 교환하기
   - 하나의 구조 분해 표현식만으로 두 변수의 값을 교환할 수 있다.
   - 구조 분해 할당 없이 두 값을 교환하려면 임시 변수가 필요합니다. (일부 로우 레벨 언어에서는 [XOR 교체 트릭](https://en.wikipedia.org/wiki/XOR_swap_algorithm)을 사용할 수 있다)
   ```
   var a = 1;
   var b = 3;
   
   [a, b] = [b, a];
   console.log(a); // 3
   console.log(b); // 1
   ```

   #### 함수가 반환한 배열 분석
   - 함수는 이전부터 배열을 반환할 수 있었습니다. 구조 분해를 사용하면 반환된 배열에 대한 작업을 더 간결하게 수행할 수 있다.
   - 아래 예제에서 f()는 출력으로 배열 [1, 2]을 반환하는데, 하나의 구조 분해만으로 값을 분석할 수 있다.
   ```
   function f() {
      return [1, 2];
   }
      
   var a, b;
   [a, b] = f();
   console.log(a); // 1
   console.log(b); // 2
   ```

   #### 일부 반환 값 무시하기
   - 다음과 같이 필요하지 않은 반환 값을 무시할 수 있다.
   ```
   function f() {
      return [1, 2, 3];
   }
   
   var [a, , b] = f();
   console.log(a); // 1
   console.log(b); // 3
   ```
   - 반환 값을 모두 무시할 수도 있다.
   ```
   [,,] = f();
   ```

   #### 변수에 배열의 나머지를 할당하기
   - 배열을 구조 분해할 경우, 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당할 수 있다.
   ```
   var [a, ...b] = [1, 2, 3];
   console.log(a); // 1
   console.log(b); // [2, 3]
   ```
   - [spread 연산자](/RN2021/app(past)/ch4/styles4-5.js) --> ...baseContainerStyles의 '...'
<br>

### 객체 구조 분해
   #### 새로운 변수 이름으로 할당하기
   - 객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있다.
   ```
   var o = {p: 42, q: true};
   console.log(o.p)
   var {p: foo, q: bar} = o;
   
   console.log(foo); // 42
   console.log(bar); // true
   ```
   - 아래와 같은 방식은 리액트에서 자주 사용하는 방식이다.
   ```
   var o = {p: 42, q: true};
   var {p, q} = o;
   
   console.log(p)); // 42
   console.log(q); // true
   ```
----------------------------
## View 컴포넌트에 스타일 적용하기
 - View 컴포넌트는 UI의 주요 조립 블록, 스타일의 올바른 사용을 위한 중요 컴포넌트 중 하나
 - View 컴포넌트는 다른 요소를 감싸고 UI코드 블록을 만들수 있어 HTML의 DIV태그와 유사
   1. borderWidth를 이용해 profile 컨테이너에 태두리 만들기
   2. borderRadius를 이용해 테두리의 모서리 둥글게 하기
   3. 컴포넌트 폭의 반 크기인 borderRadius 값을 이용해 원처럼 보이는 테두리 만들기
   4. margin과 padding 속성으로 위치 지정하기

### 배경색 설정하기
 + backgroundColor 속성은 요소의 배경색을 설정하며 이 속성은 아래 표중 하나의 문자열을 사용한다.
 + rgb는 빨간색, 녹색, 파란색을 의미하며 0-255(00-ff, 16진수)까지의 숫자를 이용해서 색상을 지정한다.
 + alpha는 투명도와 유사(0은 투명, 1은 선명 0~1)
 + hls의 색상(hue)는 360도로 구성된 색상환의 1도를 의미한다. 0=red, 120=green, 240=blue 이다.
 + hsl의 채도(saturation)는 색상의 강도이며 회색인 0% 부터 선명한 색상 100%까지 사용가능하다.
 + hls의 명도(lightness, value, brightness)는 명도이며 검은색에 가까운 어두운색인 0% 부터 흰색에 가까운 밝은 색인 100%까지 사용가능하다.

|지원되는 색 형식|예|
|:--------:|:--------:|
|#rgb|#06f|
|#rgba|#06fc|
|#rrggbb|#0066ff|
|#rrggbbaa|#ff00ff00|
|rgb(숫자, 숫자, 숫자)|rgb(0, 127, 255)|
|rgb(숫자, 숫자, 숫자), 알파 값|rgb(0, 127, 255, .5)|
|hsl(색상, 채도, 명도)|hsl(216, 100%, 50%)|
|hsla(색상, 채도, 명도, 알파 값)|hsla(216, 100%, 50%, .5)|
|투명배경|transparent|
|CSS3 지정 색 이름(black, red 등)|dodgerblue|


+ [profile card 컴포넌트를 위한 초기 형태 (4-7)](/RN2021/app(past)/ch4/App4-7.js)
   + profile card 컴포넌트를 위해 초기상태를 지정하였을 뿐 특별하게 해준것은 없다.
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-04-30</summary>
<div markdown="2021-04-30">

# 2021-04-30
 > 마크다운 작성 시작(이전 날짜 추가 완료 - 2021-05-7)
----------------------------
 ## 리액트 네이티브 스타일 적용하고 관리하기
 - 리액트 네이티브는 내장 컴포넌트를 제공, 이들 컴포넌트에는 특정한 스타일을 지원
 - 스타일을 적용하는 방법은 다음과 같다.
    1. [인라인 스타일 (4-1)](/RN2021/app(past)/ch4/App4-1.js)
    2. [스타일시트에 정의된 스타일 참조 (4-2)](/RN2021/app(past)/ch4/App4-2.js)
    3. [스타일 파일을 분리 (4-3)](/RN2021/app(past)/ch4/App4-3.js)
 - 스타일시트에서는 스타일객체를 생성해서 각 스타일을 개별적으로 참조한다.
 - render 메서드에서 스타일을 분리하는 것이 가독성이 좋으며, 재활용에도 용의하다.
 - 중복된 프로퍼티가 있을 때는 마지막으로 전달된 스타일이 이전 스타일을 재정의 한다.

 + [외부 스타일시트 가져오기(4-4)](/RN2021/app(past)/ch4/App4-4.js)
    + 내부 컴포넌트인 StyleSheet 컴포넌트를 import한다.
    + 각각의 style은 상수로 저장한다.
    + 상수 하나하나를 css의 class로 생각하면 된다.
    + 일반 컴포넌트와 마찬가지로 외부에서 사용할 수 있도록 export해 준다.
    + [stylesheet name].js로 저장한다.

 + [컴포넌트 파일에서 사용하게 외부로 분리한 스타일(4-5)](/RN2021/app(past)/ch4/styles4-5.js)
    + 위의 분리된 [stylesheet name].js를 사용할 수 있도록 import한다.
    + 사용할 때는 다음과 같이 사용한다.
    ```
    <View style={styles.container}>
    <TouchableHighlight style={buttons.primary} />
    ```

 + [밝은색과 어두운색 테마를 바꾸는 토클버튼 앱(4-6)](/RN2021/app(past)/ch4/App4-6.js)
    + 다음 그림과 같이 화면 중앙에 버튼이 위치한다.
    + 처음 배경색은 white이며, 버튼의 이름도 white이다.
    + 버튼을 클릭(터치)하면, 배경색이 black으로 변하면서 버튼의 이름도 black로 바뀐다.
    + 버튼을 누를 때 마다 위의 동작을 반복한다.
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-04-23</summary>
<div markdown="2021-04-23">

# 2021-04-23
 > [중간고사](/RN2021/app(middle_test))
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-04-16</summary>
<div markdown="2021-04-16">

# 2021-04-16
 > TODO 앱 개발

 #### [Todo 컴포넌트 만들기](/RN2021/app(past)/ch3/Todo3-14.js)

 #### [TodoList 컴포넌트 만들기](/RN2021/app(past)/ch3/TodoList3-15.js)

 #### [TodoList 컴포넌트 가져오기](/RN2021/app(past)/ch3/App3-16.js)

 #### [toggleComplete와 deleteTodo 메소드 추가하기](/RN2021/app(past)/ch3/App3-17.js)

 #### [TodoButton.js 파일 작성하기](/RN2021/app(past)/ch3/TodoButton3-18.js)

 #### [toggleComplete와 deleteTodo를 TodoList에 props로 전달하기](/RN2021/app(past)/ch3/App3-19.js)

 #### [toggleComplete와 deleteTodo를 Todo에 props로 전달하기](/RN2021/app(past)/ch3/TodoList3-20.js)

 #### [Todo.js를 갱신해 TodoButton과 기능을 적용하기](/RN2021/app(past)/ch3/Todo3-21.js)

 #### [setType 메소드 추가하기](/RN2021/app(past)/ch3/App3-22.js)

 #### [TabBar 컴포넌트 만들기](/RN2021/app(past)/ch3/TabBar3-23.js)

 #### [TabBarItem 컴포넌트 만들기](/RN2021/app(past)/ch3/TabBarItem3-24.js)

 #### [TabBar 컴포넌트 구현하기](/RN2021/app(past)/ch3/App3-25.js)

 #### [TodoList 컴포넌트 갱신하기](/RN2021/app(past)/ch3/TodoList3-26.js)
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-04-09</summary>
<div markdown="2021-04-09">

# 2021-04-09
 > TODO 앱 개발

 #### [App.js 코드 작성](/RN2021/app(past)/ch3/App3-3.js)

 #### [초기 state의 설정](/RN2021/app(past)/ch3/App-4.js)

 #### [Heading 컴포넌트 만들기](/RN2021/app(past)/ch3/App3-5.js)

 #### [Heading컴포넌트를 App으로 가져와 사용하기](/RN2021/app(past)/ch3/App3-6.js)

 #### [TextInput 컴포넌트 만들기(Input.js)](/RN2021/app(past)/ch3/App3-7.js)

 #### [inputChange 메서드 작성하기](/RN2021/app(past)/ch3/App3-8.js)

 #### [inputChange와 inputValue를 TextInput에 추가하기](/RN2021/app(past)/ch3/App-9.js)

 #### [submitTodo 메서드 추가하기](/RN2021/app(past)/ch3/App3-10.js)

 #### [todoIndex 변수 생성하기](/RN2021/app(past)/ch3/App3-11.js)

 #### [Button 컴포넌트 만들기](/RN2021/app(past)/ch3/Button3-12.js)

 #### [Button 컴포넌트 가져오기](/RN2021/app(past)/ch3/App3-13.js)
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-04-07</summary>
<div markdown="2021-04-07">

# 2021-04-07
 > react-native2

 #### 리액트 컴포넌트 스펙
 + 컴포넌트를 만들 때 몇가지 스펙과 생명주기를 연결해서,	컴포넌트가 수행하는 동작을 제어할 수 있다.
 + 컴포넌트의 스펙은 기본적으로 컴포넌트의 생명주기 동안 일어나는 여러 상황에 대해 컴포넌트가 대응하는 방식을 제공한다.
 + 컴포넌트 스펙에는 다음과 같은 것이 있다.
  + render 메서드
  + constructor 메서드
  + statics 객체(클래스에서 사용할 수 있는 메서드를 정의할 때 사용)

 #### render메서드로 UI 만들기
 ###### render메서드?
  + 컴포넌트가 생성될 때 필수적으로 필요한 유일한 메서드이다.
  + 하나의 자식 요소나 null 혹은 false만을 반환한다.
  + 자식요소는 View나 Text처럼 이미 선언된 컴포넌트이거나, 개발자가 만들어 파일로부터 가져온 사용자 정의 컴포넌트 이다.
  + 괄호가 있거나 없는 채로 render메서드를 사용할 수 있다. 단, 괄호가 없을 때는 return과 같은 중에 줄 바꿈 없이 작성한다.
  + 다른 곳에서 정의한 컴포넌트를 반환할 수도 있다.
  + 조건문을 확인하고, 로직을 수행하고, 값에 따라 다른 컴포넌트를 반환할 수 있다.

 #### 속성 초기화와 생성자 사용하기
 + state는 생성자에서 만들 거나, 속성초기화를 사용해서 만들 수도 있다.
 + 속성초기화는 자바스크립트 ES7스팩이지만 리액트 네이티브에서 바로 사용 가능하다.
 ```
 class MyComponent extends React.Component {
   state = {
     someNumber: 1,
     someBoolean: false
   }
 }
 ```
 + 생성자에서 다른 속성들도 this.[property]의 형식으로 설정할 수 있다.
 ```
 constructor(){
   super()
   this.state = {
     someOtherNumber: 19,
     someOtherBoolean: true
   }
   this.name = 'Hello World'
   this.type = 'class'
   this.loaded = false
 }
 ```
 + 리액트 클래스는 다른 클래스를 확장해서 만들기 때문에 생성자를 이용할 때에는 반드시 super 키워드를 this키워드 전에 사용해야만 한다.
 + 생성자 안에 있는 특정 속성에 접근해야 한다면 생성자와 super호출 시에 인수(파라미터)로 전달해야 한다.
 + props를 이용해서 state를 지정하는 것은 좋은 방법이 아니다.

 #### 리액트 생명주기 메서드
 + 다양한 메서드들이 컴포넌트 생명주기 동안 특정 시점에 실행되는데 이를 생명주기 메서드라고 한다.
 + 예를 들어, 컴포넌트가 가져온 데이터를 이용해서 렌더링할 준비가 되었는지 확인하고 싶을 때는
   componentDidMount를 통해서 컴포넌트가 마운트 되었을 때 한번만 API를 호출하도록 작성할 수 있다.
 + 생명주기는 생성(Mount), 갱신, 파기(Unmount)의 세가지로 나뉜다.

 ###### static getDerivedStateFronProps 메서드
 + static클래스 메서드로 컴포넌트가 생성될 때와 컴포넌트가 새 props를 전달받을 때 모두 호출된다.
 + 새로운 props와 가장 최근의 state를 인수로 전달 받아서 하나의 객체를 반환한다.
 + 객체의 데이터는 컴포넌트의 state로 갱신된다.
 ```
 static getDerivedStateFromProps(nextProps, nextState) {
   if (nextProps.user.authenticated) {
     return {
       userLoggedIn: true
     }
   }
   return null
 }
 ```

 ###### componentDidMount 메서드
 + 프컴포넌트가 로딩되고 나서 바로 한 번만 호출된다.
 + Ajax 호출로 가져온 데이터를 처리하거나(Asynchromous JavaScript	and	XML),	
 + 지정된 실행 후에 실행되는 setTimeout을 처리하거나,
 + 다른 자바스크립트 프레임워크들과 통합하기에 적절한 위치이다.
 ```
 componentDidMount() {
   #simulate ajax call
   setTimeout(() => {
     this.setState({
       loading: false,
       data: {
         name: 'Nader Dabit',
         age: 35
       }
     })
   }, 2000)
 }
 ```

 ###### shouldComponentUpdate 메서드
 + Boolean을 반환하며, 컴포넌트의 랜더링 할 것인지를 결정할 수 있다.
 ```
 shouldComponentUpdate(nextProps, nextState) {
   if(nextProps.name !== this.props.name) {
     return true
   }
   return false
 }
 ```

 ###### componentWillUpdate 메서드
 + 컴포넌트가 갱신되면서 재 랜더링된 후에 바로 호출된다.
 + 이전 state와 props를 인수로 갖는다.
 ```
 componentWillUpdate(prevProps, prevState) {
   if(prevState.showToggled === this.state.showToggled) {
     this.setState({
       showToggled: !showToggled
     })
   }
 }
 ```

 ###### componentWillUnmount 메서드
 + 앱에서 컴포넌트가 파기되기 전에 호출된다.
 + 설정된 값을 정리하고, 리스너를 삭제하고, 타이머를 제거하도록 지정할 수 있다.
 ```
 componentWillUnmount() {
   clearTimeout(this._timeout);
 }
 ```
----------------------------
</div>
</details>
<br>


<details>
<summary>2021-03-26</summary>
<div markdown="2021-03-26">

# 2021-03-26
 > react-native

 ####  state를 사용해 컴포넌트 데이터 다루기
 + 데이터를 만들고 다루는 방식 중 하나로 state가 있다.
 + state는 컴포넌트가 생성될 때 선언된다.
 + state는 단순한 구조의 자바스크립트 객체일 뿐이다.
 + setState함수 호출을 통해 컴포넌트 내에서 갱신할 수 있다.
 + 데이터를 다루는 또 다른 방식으로는 props가 있다.
 + 컴포넌트가 생성될 때 매개 변수로 props가 전달된다.
 + state와는 다르게 props는 컴포넌트 내에서 갱신되지 않는다.

 #### 컴포넌트의 상태 제대로 조작하기
 + state는 컴포넌트가 다루는 값들의 집합체이다.
 + 컴포넌트가 setState 함수를 이용해서 state를 변경하게 되면, 리액트는 컴포넌트를 다시 랜더링하게 된다.
 + 만일 자식 컴포넌트가 부모 컴포넌트의 state를 props로 받아서 사용하게 되면, 부모 컴포넌트의 state가 변경될 때 자식 컴포넌트 역시 모두 다시 렌더링된다.
 + 컴포넌트의 state는 컴포넌트로 하여금 동적이면서, 인터렉티브하게 해준다.
 + state는 변경 가능하고, props는 변경 불가능 하다.

 - 초기 state 지정하기
 + 컴포넌트가 생성될 때 생성자 혹은 속성 초기화를 이용해서 초기화한다.
 + 초기화된 state는 컴포넌트 내에서 this.state.를 통해서 사용할 수 있다.
 * React를 학습하면서 stateful component를 class형 compment라고 했으나, 실제로는 함수형 component에서도 사용된다.
   class형 컴포넌트의 경우는 생성자에 선언한다.
   page68 예제2.1과 page69의 예제2.2를 참고한다.
   ```
   state = {
     year: 2016,
     name: 'Nader Dabit',
     colors: ['blue']
   }
   ```
   ```
   <Text>My name is: { this.state.name }</Text>
   ```

 #### state 갱신하기
 + state는 this.setState() 함수의 호출을 통해서 갱신된다.
 + page69의 예제2.3에서는 onPress라는 터치 핸들러인 새로운 메서드를 사용하고 있다.
 + 이 메서드는 tapping이 가능한 몇 가지 리액트 네이티브 컴포넌트에서 호출할 수 있다.
 + 예제에서는 텍스트를 누르면 updateYeat메서드가 호출되고, setState로 state를 갱신한다.
 ```
 updateYear() {
   this.setState({
     year: 2017
   })
 }
 ```
 + 이 경우는 state가 갱신되지만, page71의 예제는 갱신되지 않는다.
 + 그 이유는 setState메서드가 호출되지 않았기 때문이다.
 ```
 updateYear() {
   this.state.year = 2017
 }
 ```
 + 결론적으로 state를 갱신하려면 반드시 setState()메소드를 이용하라는 것이다.

 #### props를 사용해 컴포넌트 데이터 다루기
 + props(properties)는 부모 컴포넌트로 부터 전달된 속성값이거나, 컴포넌트가 상속받은 값이다.
 + 컴포넌트가 선언될 때는 고정된 값이나 동적인 값일 수 있지만, 상속되고 나면 props는 변경이 불가능 하다.
 + props와 state	간의 대표적인 차이점과 유사점은 다음과 같다.

|props|state|
|:--------:|:--------:|
|외부 데이터|내부 데이터|
|변경 불가능|변경 가능|
|부모로부터 상속|컴포넌트에서 성성|
|부모 컴포넌트가 변경|컴포넌트에서만 갱신|
|props로 전달 받을 수 있음|props로 전달 받을 수 있음|
|컴포넌트 내부에서 변경 불가능|컴포넌트 내부에서 변경 가능|

 #### 정적 props
 + MyComponent에서 Line4의 <BookDisplay book=“React	Native in Action” />를 생성하면서 book이라는 props를 전달한다.
 + props로 전달 받은 값은 자식 컴포넌트인 BookDisplay에서 this.props로 사용할수있다.
 + 예제2.7처럼 중괄호와 문자열 값을 사용하여, 변수를 다룰 때처럼 리터럴을 전달할 수도 있다.
 ```
 <BookDisplay book={"React Native in Action"} />
 ```

 #### 동적 props
 + 이 예제는 동적 props를 컴포넌트에 전달하는 예이다.
 + render메서드에서 return 구문 앞에서 변수 book을 선언하고 props로 전달한다.
 + 즉, 동적 props는 외부에서 변경하는 속성이다.
 + Line3의 let변수를 통해 변환하면 된다.
 ```
 let book = 'React Native in Action'
 ```
 + 이 것을 이해 하려면 변수의 종류와 특징을 알아야 할 것이다.
  + var : 변수 재 선언 가능
  + let : 변수 재 선언 불가능 / 변수 재 할당 가능
  + const : 변수 재 선언, 재 할당 불가능

 + 예제2.9는 state를 사용한 동적props를 컴포넌트에 전달하는 예이다.
 + Line5에서 state가 변하면, line10의 props가 바뀌고, 이 props가 BookDisplay컴포넌트에 상속된다.
 + 예제2.9를 실제 코드에 적용하여, 동적props를 동작 시키는데 필요한 요소를 살펴 보면 다음과 같다.

 1. state에 변수선언
 ```
 this.state = {
   book: 'React Native in Action'
 }
 ```
 2. state에 변수를 갱신하는 setState를 작성
 ```
 updateBook() {
   this.setState({
     book: 'Express in Action'
     })
 }
 ```
 3. 메서드와 state를 props로 자식 컴포넌트에 전달.
 ```
 <BookDisplay updateBook={ () => this.updateBook() } book={ this.state.book } />
 ```
 4. 메서드를 자식 컴포넌트에 있는 터치 핸들러에 연결.
 ```
 <Text onPress={ this.props.updateBook }>
 ```
 5. [이를 적용한 완성된 코드는 예제2.10과 같다.](/RN2021/app(past)/ch2/App2-10.js)

 #### state가 없는 컴포넌트에서의 props
 + 재사용해야 하는 컴포넌트를 만들 때 유용하다.
 + [예제2.12는 stateless 컴포넌트를 사용해서, props에 접근하려는 첫 번째 인수로 props를 전달한다.](/RN2021/app(past)/ch2/App2-12.js)
 ```
 const BookDisplay = (props) => {
 ```
 + [예제2.13은 메서드의 인수에서 props를 구조 분해 할당해서 이용할 수 있다.](/RN2021/app(past)/ch2/App2-13.js)
 ```
 const BookDisplay = ({ updateBook, book }) => {
 ```

 #### 배열과 개체를 props로 전달하기
 + 다른 데이터 타입에서도 props의 처리는 동일하게 작동한다.
 + [예제2.14는 배열 props를 전달하여 map()함수로 분리하는 예를 보여주고 있다.](/RN2021/app(past)/ch2/App2-14.js)
 ```
 <BookDisplay leapYear={ this.state.leapYear } info={ this.state.info } topics={['React', 'React Native', 'JavaScript']} />
 ```
 ```
 topics = topics.map((topic, i) => {
   return <Text>{ topic }</Text>
 })
 ```
----------------------------
</div>
</details>