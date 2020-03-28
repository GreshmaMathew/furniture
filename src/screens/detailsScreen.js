import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../styles/detailsStyle';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.conatiner1}>
        <View style={styles.conatiner2}>
          <Image
            source={require('../assets/shadow.png')}
            style={styles.shadow}
          />
          <Image
            source={require('../assets/back_icon.png')}
            style={styles.images}
          />
          <Image
            source={require('../assets/icon_1.png')}
            style={styles.imagestyle2}
          />
          <Image
            source={require('../assets/cart_icon.png')}
            style={styles.imagestyle1}
          />
          <Image
            source={require('../assets/chair4.png')}
            style={styles.chair}
          />
          <Image source={require('../assets/icon_3.png')} style={styles.vec1} />
          <Image source={require('../assets/icon_4.png')} style={styles.vec2} />
          <Image source={require('../assets/icon_6.png')} style={styles.vec3} />
        </View>
        <View style={styles.conatiner3}>
          <Text style={styles.textstyle}>Eames Chair</Text>
          <Image
            source={require('../assets/star_icon.png')}
            style={styles.star}
          />
          <Image
            source={require('../assets/star_icon.png')}
            style={styles.star1}
          />
          <Image
            source={require('../assets/star_icon.png')}
            style={styles.star2}
          />
          <Image
            source={require('../assets/star_icon.png')}
            style={styles.star3}
          />
          <Image
            source={require('../assets/star_icon1.png')}
            style={styles.star4}
          />
          <Text style={styles.text1}>125 reviews</Text>
          <Text style={styles.text2}>$280</Text>
          <Text style={styles.text3}>
            Upholster Stylish Restaurant Chair. Modern design and good-quality.
            Steel frame inside, molded foam sponge. High quality solid wood
            base.
          </Text>
          <View style={styles.conatiner4}>
            <Text style={styles.text4}>Quantity</Text>
            <Image source={require('../assets/one.png')} style={styles.dot1} />
            <Image source={require('../assets/one.png')} style={styles.dot2} />
            <Image source={require('../assets/one.png')} style={styles.dot3} />
            <Text style={styles.minus}>-</Text>
            <Text style={styles.num}>23</Text>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={styles.conatiner4}>
            <Image
              source={require('../assets/heart.png')}
              style={styles.circlaststyle}
            />
            <Image
              source={require('../assets/rect.png')}
              style={styles.rectstyle}
            />
            <Image
              source={require('../assets/addto.png')}
              style={styles.addtostyle}
            />
          </View>
        </View>
      </View>
    );
  }
}
