import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);

  function handleNewAddSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Bruno!</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleNewAddSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <SkillCard listSkills={mySkills} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
