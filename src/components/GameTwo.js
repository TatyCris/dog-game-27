import React, { Component } from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'

export default class GameTwo extends Component {
  
  render() {
    return (
      <div>
        <Title content="Welcome to game Two" />
        <h3>Random breed name</h3>
        <Image ulr="#" alt="randomDogBreed" onClick=""></Image>
        <Image ulr="#" alt="randomDogBreed" onClick=""></Image>
        <Image ulr="#" alt="randomDogBreed" onClick=""></Image>
        <Score />
      </div>
    )
  }
}
