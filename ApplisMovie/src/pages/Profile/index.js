import React, { useState, useContext } from 'react'

import firebase from '../../config/firebaseConnection'

import * as ImagePicker from 'expo-image-picker';


import {
  Container,
  Name,
  Email,
  Button,
  ButtonText,
  UploadButton,
  UploadText,
  Avatar,
  ModalContainer,
  ButtonBack,
  Input
} from './styles'

import { Feather } from '@expo/vector-icons'

import { Modal } from 'react-native'

import { useNavigation } from '@react-navigation/native'

function Profile() {

  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const navigation = useNavigation()


// Fonction pour déconnecter l'utilisateur
  function logoutFirebase() {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Home')
    }).catch((error) => {
      console.log('erro')
    })
  }


// définit le nouveau nom d'utilisateur
  async function updateProfile(){
    await setNome(nome)
  }

// Fonction pour télécharger un fichier pour l'avatar
  const uploadFile = async () => {
// Aucune demande de permission n'est nécessaire pour lancer la bibliothèque d'images
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>

      {image ? (
        <UploadButton onPress={() => uploadFile()}>
          <UploadText>+</UploadText>
          <Avatar source={{ uri: image }} />
        </UploadButton>
      ) : (
        <UploadButton onPress={() => uploadFile()}>
          <UploadText>+</UploadText>
        </UploadButton>
      )}

      <Name>{nome}</Name>

      <Button bg="red" onPress ={() => setOpen(true)}>
        <ButtonText color="white">Mettre à jour le profil</ButtonText>
      </Button>

      <Button bg="#ccc" onPress={logoutFirebase}>
        <ButtonText color="black">Déconnection</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left"
              size={22}
              color="#121212"
            />
            <ButtonText color="#121212">Retour</ButtonText>
          </ButtonBack>

          <Input
            placeHolder="teste nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Button bg="red" onPress={updateProfile}>
            <ButtonText color="white">Sauvegarder</ButtonText>
          </Button>
        </ModalContainer>

      </Modal>

    </Container>
  )
}

export default Profile