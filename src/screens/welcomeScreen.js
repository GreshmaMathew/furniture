import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {styles} from '../styles/welcomeStyle';

export default class Welcome extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image
            source={require('../assets/menu_icon.png')}
            style={styles.imagestyle}
          />
          <Image
            source={require('../assets/cart_icon.png')}
            style={styles.imagestyle1}
          />
          <Image
            source={require('../assets/icon_1.png')}
            style={styles.imagestyle2}
          />
        </View>
        <View>
          <Text style={styles.textstyle1}>Our Products</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.textstyle2}>ALL</Text>
          <Text style={styles.textstyle3}>FURNITURE</Text>
          <Text style={styles.textstyle4}>SHOES</Text>
          <Text style={styles.textstyle5}>HODDIE</Text>
          <Text style={styles.textstyle6}>ACCESORIES</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/rectangle_1.png')}
            style={styles.recbox}
          />
          <Image
            source={require('../assets/chair1.png')}
            style={styles.chairbox}
          />
          <Image
            source={require('../assets/icon_2.png')}
            style={styles.vector1}
          />
          <Image
            source={require('../assets/icon_3.png')}
            style={styles.vector2}
          />
          <Image
            source={require('../assets/icon_4.png')}
            style={styles.vector3}
          />
          <Image
            source={require('../assets/icon_5.png')}
            style={styles.circle1}
          />
          <Text style={styles.plus1}>+</Text>
          <Text style={styles.textstyle7}>Dining Chair</Text>
          <Text style={styles.textstyle11}>$280</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/rectangle_1.png')}
            style={styles.recbox1}
          />
          <Image
            source={require('../assets/chair2.png')}
            style={styles.chairbox1}
          />
          <Image
            source={require('../assets/icon_6.png')}
            style={styles.vector4}
          />
          <Text style={styles.textstyle8}>Dining Chair</Text>
          <Text style={styles.textstyle12}>$280</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/rectangle_1.png')}
            style={styles.recbox2}
          />
          <Image
            source={require('../assets/chair3.png')}
            style={styles.chairbox2}
          />
          <Image
            source={require('../assets/icon_3.png')}
            style={styles.vector22}
          />
          <Image
            source={require('../assets/icon_4.png')}
            style={styles.vector33}
          />
          <Image
            source={require('../assets/icon_2.png')}
            style={styles.vector11}
          />
          <Image
            source={require('../assets/icon_5.png')}
            style={styles.circle2}
          />
          <Text style={styles.plus2}>+</Text>
          <Text style={styles.textstyle9}>Elegand Chair</Text>
          <Text style={styles.textstyle13}>$280</Text>

          <Image
            source={require('../assets/rectangle_1.png')}
            style={styles.recbox3}
          />
          <Image
            source={require('../assets/chair4.png')}
            style={styles.chairbox3}
          />

          <Image
            source={require('../assets/icon_6.png')}
            style={styles.vector44}
          />
          <Image
            source={require('../assets/icon_4.png')}
            style={styles.vector333}
          />
          <Image
            source={require('../assets/icon_3.png')}
            style={styles.vector222}
          />
          <Image
            source={require('../assets/icon_5.png')}
            style={styles.circle3}
          />
          <Text style={styles.plus3}>+</Text>
          <Text style={styles.textstyle10}>Eames Chair</Text>
          <Text style={styles.textstyle14}>$280</Text>
          <Image
            source={require('../assets/icon_5.png')}
            style={styles.circle4}
          />
          <Text style={styles.plus4}>+</Text>
        </View>
        <View>
          <Image
            source={require('../assets/tab.png')}
            style={styles.tabstyle}
          />
        </View>
      </View>
    );
  }
}
