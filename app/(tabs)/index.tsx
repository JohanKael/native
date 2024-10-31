import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

function ForYou(){
  return (
    <View style={{ backgroundColor: '#fff', height: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
      <Link href={"/"} style={{ backgroundColor: 'whitesmoke', height: 40, padding: 10, borderRadius: 20}}>
        <Text>Suggested</Text>
      </Link>
      <Link href={"/"} style={{ backgroundColor: 'whitesmoke', height: 40, padding: 10, borderRadius: 20}}>
        <Text>Liked</Text>
      </Link>
      <Link href={"/"} style={{ backgroundColor: 'whitesmoke', height: 40, padding: 10, borderRadius: 20}}>
        <Text>Library</Text>
      </Link>
    </View>
  )
}

export default ForYou