import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AddEventsScreen from '../screens/AddEventsScreen';
import AddEventDetailScreen from '../screens/AddEventDetailScreen';

const AddEventNavigator = createStackNavigator({
    Home:HomeScreen,
    AddEvents:AddEventsScreen,
    AddEventDetail:AddEventDetailScreen,
// }, {
//     defaultNavigationOptions: {
//         headerStyle:{

//         }
//     }
});

export default createAppContainer(AddEventNavigator)