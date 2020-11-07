import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { showLocation } from 'react-native-map-link'

class LocationPage extends React.Component {
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  
  state = {
    //array of location tags
    tags:['Civil War', 'Family', '1800s',],
    
    //array of location reviews
    reviews:[
      {username: 'username1', rating: 4, reviewText: "Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt."},
      {username: 'username2', rating: 3, reviewText: "Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt.Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel. sed aliquam vulputate ligula, non tincidunt sem euismod at. quisque dictum, sapien pulvinar gravida tincidunt."},
      {username: 'username3', rating: 4.5, reviewText: "Review Contents. lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur aliquam rutrum quam, non varius magna molestie vel."}],
      
  }

  render (){
    if(this.props.route.params) { // Only render the event page if a marker has been picked
    const { markerInfo } = this.props.route.params;

    return (
      <View style={styles.backgroundColor}>
        <ScrollView>
          <SafeAreaView>

          <Image source = {require('../assets/logo.jpg')} 
          style = {{ 
            width: Dimensions.get("window").width/6, 
            height: Dimensions.get("window").width/6, 
            padding: Dimensions.get("window").width/12,
            borderRadius: (Dimensions.get("window").width/5)/2,
            alignSelf: 'center',
              }}
          />
          <View style={styles.outerBox}>
            <View style = {styles.outerBoxText}>

              {/*Base screen, with title, address, distance, and description*/}
              <Text style = {styles.HeaderText}>{markerInfo.title}</Text>
            <Text style = {styles.SubHeaderText}> {markerInfo.city} { ", Texas" }</Text>
            
            <View style = {{padding: 15}}>
              <TouchableOpacity style={styles.logButton} onPress={()=>{
                showLocation({
                  latitude: markerInfo.latitude,
                  longitude: markerInfo.longitude,
                  googleForceLatLon: true,
                  title: (markerInfo.title),
                })
              }}>
                <Text>Go There!</Text>  
              </TouchableOpacity> 
            </View>
              
            <Text style = {styles.DescriptionText}>{markerInfo.markertext}</Text>

            {/*Rendering the tags, currently set to only display 3 tags */}
            <View style={styles.tagsBox}>

              <TouchableHighlight style={styles.button}>
                <Text style={styles.TagText}>{markerInfo.code}</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.button}>
                <Text style={styles.TagText}>{markerInfo.code}</Text>
              </TouchableHighlight>

              <TouchableHighlight style={styles.button}>
                <Text style={styles.TagText}>{markerInfo.code}</Text>
              </TouchableHighlight>

            </View>

            {/*Show first 3 reviews, then a button to get next three reviews*/}
            <View style={styles.reviewBox}>
              <View style={{flexDirection:"row"}}> 
              <Image source = {require('../assets/logo.jpg')}
                style = {{ 
                borderRadius: 60,
                width: Dimensions.get("window").width/11, 
                height: Dimensions.get("window").width/11, 
                marginTop: Dimensions.get("window").height/50,
                marginLeft: (Dimensions.get("window").height)/40,
                }}/>
                <Text style = {styles.UsernameText}>{this.state.reviews[0].username}</Text>
                <Text style = {styles.StarsText}>{this.state.reviews[0].rating}/5</Text>
              </View>
              <Text style = {styles.ReviewText}>{this.state.reviews[0].reviewText}</Text>
            </View>

            <View style={styles.reviewBox}>
              <View style={{flexDirection:"row"}}> 
              <Image source = {require('../assets/logo.jpg')}
                style = {{ 
                borderRadius: 60,
                width: Dimensions.get("window").width/11, 
                height: Dimensions.get("window").width/11, 
                marginTop: Dimensions.get("window").height/50,
                marginLeft: (Dimensions.get("window").height)/40,
                }}/>
                <Text style = {styles.UsernameText}>{this.state.reviews[1].username}</Text>
                <Text style = {styles.StarsText}>{this.state.reviews[1].rating}/5</Text>
              </View>
              <Text style = {styles.ReviewText}>{this.state.reviews[1].reviewText}</Text>
            </View>

            <View style={styles.reviewBox}>
              <View style={{flexDirection:"row"}}> 
              <Image source = {require('../assets/logo.jpg')}
                style = {{ 
                borderRadius: 60,
                width: Dimensions.get("window").width/11, 
                height: Dimensions.get("window").width/11, 
                marginTop: Dimensions.get("window").height/50,
                marginLeft: (Dimensions.get("window").height)/40,
                }}/>
                <Text style = {styles.UsernameText}>{this.state.reviews[2].username}</Text>
                <Text style = {styles.StarsText}>{this.state.reviews[2].rating}/5</Text>
              </View>
              <Text style = {styles.ReviewText}>{this.state.reviews[2].reviewText}</Text>
            </View>

            </View>
          </View>

        </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
  else {
    return (
      <View style={styles.backgroundColor}>
      <ScrollView>
      <SafeAreaView>
        <Image source = {require('../assets/logo.jpg')} 
        style = {{ 
          width: Dimensions.get("window").width/6, 
          height: Dimensions.get("window").width/6, 
          padding: Dimensions.get("window").width/12,
          borderRadius: (Dimensions.get("window").width/5)/2,
          alignSelf: 'center',
            }}
        />
        <View style={styles.outerBox}>
          <View style = {styles.outerBoxText}>

            {/*Base screen, with title, address, distance, and description*/}
            <Text style = {styles.HeaderText}>Choose a marker from the map to view details about the location</Text>
          </View>
        </View>
      </SafeAreaView>
      </ScrollView>
      </View>
    )}
  }
}

const styles = StyleSheet.create({
  tagsBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
  reviewArea:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: (Dimensions.get("window").height),
    width: (Dimensions.get("window").width*(12/13)),
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height)/60,
  },
  outerBox: {
    borderRadius: 45,
    width: (Dimensions.get("window").width*(12/13)),
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height)/60,
    backgroundColor: '#F0ECE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewBox: {
    //flex: 4,
    borderRadius: 45,
    width: (Dimensions.get("window").width)*(10.8/13),
    //height: (Dimensions.get("window").height)/80,
    marginTop: (Dimensions.get("window").height)/30,
    //marginBottom: (Dimensions.get("window").height)/60,
    backgroundColor: '#cbaf87',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    //flex:1,
    borderRadius: 20,
    width: (Dimensions.get("window").width)/4,
    height: (Dimensions.get("window").height)/20,
    marginTop: (Dimensions.get("window").height)/45,
    backgroundColor: '#7E8A97',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    //box-shadow: 0px 4px 4px 0px #000000 25%;
  },
  outerBoxText: {
    flex: 8,
    borderRadius: 45,
    width: (Dimensions.get("window").width)*(10/12),
    //height: (Dimensions.get("window").height)*(1.5),
    //marginTop: (Dimensions.get("window").height)/8,
    //backgroundColor: '#F0EC00',
    textAlign: 'center',
    paddingBottom: (Dimensions.get("window").height)/30,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  HeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/10,
    marginTop: (Dimensions.get("window").height)/45,
    textAlign: 'center',
    //fontFamily: "BanglaSangamMN",
  },
  SubHeaderText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/20,
    marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'center'
    
    //fontFamily: "BanglaSangamMN",
  },
  MilesAwayText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/25,
    //marginTop: (Dimensions.get("window").height)/70,
    textAlign: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  DescriptionText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/22,
    marginTop: (Dimensions.get("window").height)/35,
    textAlign: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  TagText: {
    color: '#F0ECE3',
    fontSize: (Dimensions.get("window").width)/30,
    marginTop: (Dimensions.get("window").height)/85,
    textAlign: 'center'
    //fontFamily: "BanglaSangamMN",
  },
  UsernameText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/18,
    marginTop: (Dimensions.get("window").height)/40,
    marginLeft: (Dimensions.get("window").height)/90,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  StarsText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/20,
    marginTop: (Dimensions.get("window").height)/40,
    marginLeft: (Dimensions.get("window").height)/50,
    textAlign: 'left',
    //fontFamily: "BanglaSangamMN",
  },
  ReviewText: {
    color: '#30475E',
    fontSize: (Dimensions.get("window").width)/22,
    marginTop: (Dimensions.get("window").height)/80,
    marginLeft: (Dimensions.get("window").width)/15,
    marginRight: (Dimensions.get("window").width)/30,
    marginBottom: (Dimensions.get("window").height)/40,
    textAlign: 'left'
    //fontFamily: "BanglaSangamMN",
  },
  logButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#cbaf87',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
});

export default LocationPage;