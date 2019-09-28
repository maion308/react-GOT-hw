import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
            this.setState({characters: response.data})
          } catch(error) {
            console.log(error)
          }
    }
    render() {
        const characters = this.state.characters
        const checkName = (characterName) => {
            if (characterName.name === "") {
                return characterName.aliases
            } else {
                return characterName.name
            }
        }
        return(
            <div>
                {characters.map((character) => {
                    return(
                    <div className='list' style={{borderBottom: 'solid 1px'}}>
                            <div>Name: {checkName(character)}</div>
                            <div>Gender: {character.gender}</div>
                            <div>Culture: {character.culture}</div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default Characters;

   //game of thrones