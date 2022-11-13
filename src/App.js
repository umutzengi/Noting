import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './Style';

function App() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [notes, setNotes] = React.useState([]);

  function addNote() {
    setNotes([...notes, {title: title, description: description}]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatListContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>NOTing</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            horizontal={true}
            data={notes}
            renderItem={({item}) => (
              <View style={styles.noteContainer}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteDescription}>{item.description}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formTitleInput}
          placeholder="What's in your mind? "
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.formDescriptionInput}
          placeholder="Tell me!"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
        />
        <TouchableOpacity style={styles.formButton} onPress={addNote}>
          <Text style={styles.formButtonText}>Add Note 📜</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
