import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

function Account(){
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <Text>Account Page</Text>
      <Link href={"/accountinfo"}>
        <Text style={{ color: 'blue' }}>information</Text>
      </Link>
    </View>
  )
}

export default Account