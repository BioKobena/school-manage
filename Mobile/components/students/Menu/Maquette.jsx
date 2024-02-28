import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';

const Maquette = () => {
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);

  const onZoom = (event) => {
    const currentScale = event.nativeEvent.scale;
    setScale(currentScale);
  };

  return (
    <ScrollView
      style={styles.container}
      pinchGestureEnabled={true}
      maximumZoomScale={5}  // Ajustez la valeur maximale de zoom selon vos besoins
      minimumZoomScale={1}  // Ajustez la valeur minimale de zoom selon vos besoins
    >
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Maquette Pédagogique 2024-2025</Text>
      </View> */}
      <Image
        ref={imageRef}
        source={{
          uri: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_778,h_1024/https://collegegarnier.qc.ca/wp-content/uploads/2021/07/Maquette-de-cours-2024-2025-2-cycle-778x1024.png',
        }}
        style={[styles.fullScreenImage, { transform: [{ scale }] }]}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullScreenImage: {
    width: '100%',
    height: 500, // Ajustez la hauteur selon vos besoins
  },
});

export default Maquette;
