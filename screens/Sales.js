import React from 'react';
import { ScrollView } from 'react-native';
import SaleItem from '../components/SaleItem';

const Sales = () => {
  return (
    <ScrollView >
      <SaleItem
        userName={'CoffeTaste'}
        titleWanted={"Assassin's Creed II"}
        offered={'Raw VS SmackDown 2011'}
      />
      <SaleItem
        userName={'CoffeTaste'}
        titleWanted={'FarCry V'}
        offered={'SpongeBob: Battle For Bikini Bottom'}
      />
    </ScrollView>
  );
};

export default Sales;
