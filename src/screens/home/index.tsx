import { Text, View, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

import { Participant } from '../../components/participant';

export function Home() {
  const [participants, setParticipant] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      Alert.alert('Participante Existe','Já existe um participante na lista com esse nome');
      return;
    }

    setParticipant(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante',`Tem certeza que deseja remover participante ${name} ?`,[
      {
      text: 'Sim',
      onPress: () => setParticipant((prevState)=> prevState.filter((participant)=> participant !== name))

    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>

      <Text style={styles.description}>Lista de participantes</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} disabled={!participantName}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{
          width: '100%',
          marginLeft: 45
        }}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Nenhum Item na lista</Text>
        )}
      />
{/* 
      <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}