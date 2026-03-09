import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme';
import { MissionsProvider } from '../context/MissionsContext';
import { RootStackParamList, RootTabParamList } from './types';
import { Package, CheckCircle } from 'lucide-react-native';





const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();


// Les écrans seront créés plus tard, on référence simplement leurs modules
import MissionsListScreen from '../screens/MissionsListScreen';
import MissionDetailScreen from '../screens/MissionDetailScreen';
import MyMissionsScreen from '../screens/MyMissionsScreen';



function MissionsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFFFFF',
        headerStyle: { backgroundColor: colors.primary },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="MissionsList"
        component={MissionsListScreen}
        options={{ title: 'Missions disponibles' }}
      />
      <Stack.Screen
        name="MissionDetail"
        component={MissionDetailScreen}
        options={{ title: 'Détail de la mission' }}
      />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <MissionsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.mutedText,
          }}
        >
          <Tab.Screen
            name="MissionsStack"
            component={MissionsStackNavigator}
            options={{
              title: 'Missions',
              tabBarIcon: ({ color, size }: { color: string; size: number }) => <Package color={color} size={size} />

            }}
          />
          <Tab.Screen
            name="MyMissions"
            component={MyMissionsScreen}
            options={{
              title: 'Mes missions',
              tabBarIcon: ({ color, size }: { color: string; size: number }) => <CheckCircle color={color} size={size} />

            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MissionsProvider>
  );
}

