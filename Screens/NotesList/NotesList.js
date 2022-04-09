import React from "react";

import {View, FlatList, Text, TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";

const NotesList = ({navigation})=>{

    const [data, setData] = React.useState([
      {
        id: '1',
        title: 'A note 1',
        detail: 'Lorem Ipsum blah blah blah',
      },
      {
        id: '2',
        title: 'A note 2',
        detail: 'Lorem Ipsum blah blah blah',
      },
      {
        id: '3',
        title: 'A note 3',
        detail: 'Lorem Ipsum blah blah blah',
      },
      {
        id: '4',
        title: 'A note 4',
        detail: 'Lorem Ipsum blah blah blah',
      },
      {
        id: '5',
        title: 'A note 5',
        detail: 'Lorem Ipsum blah blah blah',
      },
    ]);

    const [Refreshing, setRefreshing] = React.useState(false);

    const onRefresh = ()=>{
        setRefreshing(true);
        setData([...data, {title: "a new note added", detail: "Yada yada yada"}]);
        setRefreshing(false);
    };

    function renderNotesList(){
        const renderItem = ({item}) => {
          return (
            <TouchableOpacity style={styles.item}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        };
        return(
            <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{paddingBottom: 10}}/>
        )
    }

   return(
       <SafeAreaView style={styles.container}>
           {renderNotesList()}
       </SafeAreaView>
   );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 25
    },
    item: {
        padding:20, 
        fontSize: 15,
        marginTop: 5,
        backgroundColor: "#A9A9A9",
        borderRadius: 20
    }
})

export default NotesList;
