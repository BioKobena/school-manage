import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import axios from 'axios';
import { backendUrl } from '../../../api-server.config';

const Timetable = ({ route }) => {
  const studentId = route.params.studentInfo;
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/students/${studentId.classeId}/timetable`);
        const timetableData = response.data;

        // Convertir les données de l'emploi du temps reçues en un format accepté par Agenda
        const formattedItems = {};

        // Boucler sur les données de l'emploi du temps et les organiser par date
        timetableData.schedules.forEach((schedule) => {
          const { day, time, title } = schedule;
          const formattedDate = day.split('T')[0]; // Récupérer la date sans l'heure
          if (!formattedItems[formattedDate]) {
            formattedItems[formattedDate] = [];
          }
          formattedItems[formattedDate].push({ name: title, time });
        });

        setItems(formattedItems);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'emploi du temps:', error);
      }
    };

    fetchTimetable();
  }, []);

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
        renderItem={renderItem}
        renderEmptyDate={() => <View />}
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
        pastScrollRange={7}
        futureScrollRange={7}
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
