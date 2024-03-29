import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

const Timetable = () => {
  const items = {
    '2024-03-01': [
      { name: 'Cours de Mathématiques', time: '08:00 AM' },
      { name: 'Cours de Physique', time: '10:00 AM' },
    ],
    '2024-03-02': [
      { name: 'Cours de Français', time: '09:30 AM' },
      { name: "Cours d'Anglais", time: '01:00 PM' },
    ],
    // Add more events as needed
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        renderItem={(item) => renderItem(item)}
        renderEmptyDate={() => <View />}
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
        // Définir les clés pour les jours de la semaine
        // et ajuster les valeurs en fonction des besoins
        pastScrollRange={7} // Afficher les 7 jours passés
        futureScrollRange={7} // Afficher les 7 jours futurs
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default Timetable;