import React from 'react'
import { FlatList, StyleSheet, View, Text, StatusBar  } from 'react-native'
import CustomButton from '../components/customButton'

// Tambahkan "setCurrentPage" sebagai sebuah prop
const NoteCard = ({item, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        // Tuliskan layar "edit" untuk ketika tombol-nya ditekan
        onPress={() => {
          setSelectedNote(item);
          setCurrentPage('edit');
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
)

// Tambahkan "setCurrentPage" sebagai sebuah prop
const Home = ({ noteList, setCurrentPage, deleteNote, setSelectedNote }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      // Tuliskan layar "add" untuk ketika tombol-nya ditekan
      onPress={() => {
        setCurrentPage('add')
      }}
    />
    <FlatList
      className="pt-3"
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard
          item={item}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setSelectedNote={setSelectedNote}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home