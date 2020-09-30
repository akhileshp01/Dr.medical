import doctordetails from './screens/docterdetails'
import doctorlist from './screens/doctorlist'
import doctorprofile from './screens/doctorprofile'
import appointmentdetails from './screens/appointmentdetails'
import ordersummary from './screens/ordersummary'
import schedule from './screens/schedule'
import deliveryaddress from './screens/deliveryaddress'
import cart from './screens/cart'
import payments from './screens/payments'
import order from './screens/order'
import bookdate from './screens/bookdate'
import pvtchat from './screens/pvtchat'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


const AppStack = createStackNavigator(
  {
    doctordetails: {
        screen: doctordetails,
        navigationOptions:{
          header:null
        }
    },
    doctorlist: {
        screen: doctorlist,
        navigationOptions:{
          header:null
        }
    },
    doctorprofile: {
        screen: doctorprofile,
        navigationOptions:{
          header:null
        }
    }, 
    appointmentdetails: {
        screen: appointmentdetails,
        navigationOptions:{
          header:null
        }
    }, 
    ordersummary: {
      screen: ordersummary,
      navigationOptions:{
        header:null
      }
  },
  schedule: {
    screen: schedule,
    navigationOptions:{
      header:null
    }
}, 
deliveryaddress: {
  screen: deliveryaddress,
  navigationOptions:{
    header:null
  }
},  
cart: {
  screen: cart,
  navigationOptions:{
    header:null
  }
}, 
payments: {
  screen: payments,
  navigationOptions:{
    header:null
  }
},
order: {
  screen: order,
  navigationOptions:{
    header:null
  }
},
bookdate: {
  screen: bookdate,
  navigationOptions:{
    header:null
  }
},
pvtchat: {
  screen: pvtchat,
  navigationOptions:{
    header:null
  }
},

},
{
  initialRouteName: 'pvtchat'
}
)

export default createAppContainer(AppStack)

