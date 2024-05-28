import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Produto from './src/telas/Produtos/';
import Sobre from './src/telas/Sobre/';
import Produtos_Lista from './src/telas/Produtos_Lista/';

import mockProduto from './src/mocks/produto/';
import mockSobre from './src/mocks/sobre/';
import mockProdutos_Lista from './src/mocks/produtos_lista/';


function MenuKit(){
  return <View>
     <Produto {...mockProduto}/>
  </View>
}

function SobreNos(){
  return <View>
     <Sobre {...mockSobre}/>
  </View>
}

function ListaProdutos(){
  return <View>
     <Produtos_Lista {...mockProdutos_Lista}/>
  </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator
  
      screenOptions={ ({route})=>({
        tabBarIcon: ({focused, color, size}) =>{
          let iconName;

          if(route.name === "Kit"){
            iconName = focused
            ? 'basket'
            :  'basket-outline';
          }else if (route.name === "Sobre nós"){
            iconName = focused
            ? 'apps'
            : 'apps-outline';
          }else if(route.name === "Produtos"){
            iconName = focused
            ? 'list'
            : 'list-outline';
          }else if(route.name === "Lista de Desejos"){
            iconName = focused
            ? 'heart'
            : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}/>

        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'pink',
        tabBarHideOnKeyboard: true,

      })}>
        <Tab.Screen name="Sobre nós" component={SobreNos}/>
        <Tab.Screen name="Kit" component={MenuKit}/>
        <Tab.Screen name="Produtos" component={ListaProdutos}/>
        <Tab.Screen name="Lista de Desejos" component={MenuKit}/>
      </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte para o projeto
  const [fonteCarregada] = useFonts({
    "SpaceGRegular": SpaceGrotesk_300Light,
    "SpaceGBold": SpaceGrotesk_700Bold,
  })

  //Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />
  }

  return <NavigationContainer>
    <TabsMenu />
  </NavigationContainer>
}