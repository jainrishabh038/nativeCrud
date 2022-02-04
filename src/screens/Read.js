import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const Read = (props) => {
  let [jsonData, setJsonData] = useState([])
  useEffect(async() => {
    await axios.get(`https://gorest.co.in/public/v1/users`)
      .then(res => setJsonData(res.data.data));
  }, [])

  const Delete = async (id) => {
    console.warn(id);
    await axios.delete(`https://gorest.co.in/public-api/users/${id}`)
      .then((data) => alert('delested'))
  }

  return (
    <ScrollView>
      <View style={{}}>
        {jsonData.map((data, index) => {
          return (

            <View style={{ borderWidth: 2, alignItems: 'center', backgroundColor: 'black', borderColor: 'white', padding: 20 }} key={index}>
              <Text style={{ color: 'white' }}>id: {data.id}</Text>
              <Text style={{ color: 'white' }}>Name: {data.name}</Text>
              <Text style={{ color: 'white' }}>Email: {data.email}</Text>
              <Text style={{ color: 'white' }}>Status: {data.status}</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('Add', { name: 'rish' })} style={{ backgroundColor: 'green', borderRadius: 5, marginTop: 12, width: 90, height: 28 }}><Text style={{ color: 'white', textAlign: 'center', }}>Add</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Edit', { name: 'rish' })} style={{ backgroundColor: 'green', borderRadius: 5, marginTop: 12, width: 90, height: 28 }}><Text style={{ color: 'white', textAlign: 'center' }}>Update</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Delete(data.id)} style={{ backgroundColor: 'green', borderRadius: 5, marginTop: 12, width: 90, height: 28 }}><Text style={{ color: 'white', textAlign: 'center', }}>Delete</Text></TouchableOpacity>
            </View>

          );
        })}
      </View>
    </ScrollView>
  );
}

export default Read;
