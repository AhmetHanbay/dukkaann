import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView , Text } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../src/components/ProductCard";
import useFetch from "../../src/hooks/useFetch";
import Loading from "../../src/components/Loading";
import Error from "../../src/components/Error"; 

const Products = ({ navigation }) => { 
  const { loading, data, error } = useFetch(Config.API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage' , {id});
  };

  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect (item.id)} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
