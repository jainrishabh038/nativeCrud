import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from 'axios'

let Edit = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [status, setStatus] = useState('')

   async function UploadData() {
        if (name.length > 0 && email.length > 0 && status.length > 0) {
            await axios.put ('https://jsonplaceholder.typicode.com/posts/1',{ name, email, status })
            // fetch('https://jsonplaceholder.typicode.com/posts/1', {
            //     method: 'PUT',
            //     body: JSON.stringify(obje),
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8',
            //     },
            // })
                .then(() => alert('Updated'));
        } else {
            alert('please fill the all fields')
        }
    }
    return (
        <View style={{ backgroundColor: 'gray', marginTop: '50%', borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: "bold", color: 'white' }}>Edit Data </Text>
            <TextInput style={{ borderWidth: 1, height: 40, marginTop: 1 }} placeholder="name" onChangeText={(e) => setName(e)} />
            <TextInput style={{ borderWidth: 1, height: 40, marginTop: 1 }} placeholder="email" onChangeText={(e) => setEmail(e)} />
            <TextInput style={{ borderWidth: 1, height: 40, marginTop: 1 }} placeholder="status" onChangeText={(e) => setStatus(e)} />
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'green', width: 150, height: 30, marginTop: 10, paddingTop: 4, marginLeft: '30%', marginBottom: 10 }}><Text style={{ color: 'white', textAlign: 'center' }} onPress={UploadData} > Update Data </Text></TouchableOpacity>
        </View>
    )
}
export default Edit;