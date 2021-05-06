import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image, Button} from 'react-native';
import SaleItem from '../components/SaleItem';

const Sales = () => {
  return (
    <ScrollView>
      <SaleItem/>
      <SaleItem/>
    </ScrollView>
  );
};



export default Sales;
